import { useState, useEffect, useCallback } from "react";
import { AlertCircle, Loader2 } from "lucide-react";

let _keyCounter = 0;
const uid = () => `md-${++_keyCounter}`;

const rawReadmeUrl = (githubUrl) => {
	try {
		const url = new URL(githubUrl);
		const [, owner, repo] = url.pathname.split("/");
		return `https://api.github.com/repos/${owner}/${repo}/readme`;
	} catch {
		return null;
	}
};

const parseInline = (text) => {
	if (!text) return null;

	const parts = [];
	const re =
		/(!?)\[([^\]]*)\]\(([^)]+)\)|`([^`]+)`|\*\*\*(.+?)\*\*\*|\*\*(.+?)\*\*|\*(.+?)\*|~~(.+?)~~|__(.+?)__|_(.+?)_/g;

	let last = 0;
	let match;

	while ((match = re.exec(text)) !== null) {
		if (match.index > last) {
			parts.push(text.slice(last, match.index));
		}

		if (match[2] !== undefined) {
			if (match[1] === "!") {
				parts.push(
					<img
						key={uid()}
						src={match[3]}
						alt={match[2]}
						className="readme-img"
						loading="lazy"
					/>
				);
			} else {
				parts.push(
					<a
						key={uid()}
						href={match[3]}
						target="_blank"
						rel="noopener noreferrer"
						className="readme-link"
					>
						{match[2]}
					</a>
				);
			}
		} else if (match[4] !== undefined) {
			parts.push(
				<code key={uid()} className="readme-inline-code">
					{match[4]}
				</code>
			);
		} else if (match[5] !== undefined) {
			parts.push(
				<strong key={uid()}>
					<em>{match[5]}</em>
				</strong>
			);
		} else if (match[6] !== undefined) {
			parts.push(<strong key={uid()}>{match[6]}</strong>);
		} else if (match[7] !== undefined) {
			parts.push(<em key={uid()}>{match[7]}</em>);
		} else if (match[8] !== undefined) {
			parts.push(<del key={uid()}>{match[8]}</del>);
		} else if (match[9] !== undefined) {
			parts.push(<strong key={uid()}>{match[9]}</strong>);
		} else if (match[10] !== undefined) {
			parts.push(<em key={uid()}>{match[10]}</em>);
		}

		last = re.lastIndex;
	}

	if (last < text.length) parts.push(text.slice(last));
	return parts.length === 0 ? text : parts;
};

const parseTable = (lines) => {
	const rows = lines.map((l) =>
		l
			.trim()
			.replace(/^\||\|$/g, "")
			.split("|")
			.map((c) => c.trim())
	);

	const [header, , ...body] = rows;

	return (
		<div key={uid()} className="readme-table-wrapper">
			<table className="readme-table">
				<thead>
					<tr>
						{header.map((cell, i) => (
							<th key={i}>{parseInline(cell)}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{body.map((row, ri) => (
						<tr key={ri}>
							{row.map((cell, ci) => (
								<td key={ci}>{parseInline(cell)}</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

const parseMarkdown = (markdown) => {
	const lines = markdown.split("\n");
	const elements = [];
	let i = 0;
	let safetyLoopCount = 0;
	let skippedFirstH1 = false;

	while (i < lines.length && safetyLoopCount < 50000) {
		safetyLoopCount++;
		const line = lines[i];

		if (/^```/.test(line)) {
			const lang = line.slice(3).trim();
			const codeLines = [];
			i++;
			while (i < lines.length && !/^```/.test(lines[i])) {
				codeLines.push(lines[i]);
				i++;
			}
			elements.push(
				<div key={uid()} className="readme-code-block">
					{lang && <span className="readme-code-lang">{lang}</span>}
					<pre>
						<code>{codeLines.join("\n")}</code>
					</pre>
				</div>
			);
			i++;
			continue;
		}

		if (/^(-{3,}|\*{3,}|_{3,})\s*$/.test(line)) {
			elements.push(<hr key={uid()} className="readme-hr" />);
			i++;
			continue;
		}

		const headingMatch = line.match(/^(#{1,6})\s+(.*)/);
		if (headingMatch) {
			const level = headingMatch[1].length;
			if (level === 1 && !skippedFirstH1) {
				skippedFirstH1 = true;
				i++;
				continue;
			}
			const Tag = `h${level}`;
			elements.push(
				<Tag key={uid()} className={`readme-h${level}`}>
					{parseInline(headingMatch[2])}
				</Tag>
			);
			i++;
			continue;
		}

		if (/^>\s?/.test(line)) {
			const quoteLines = [];
			while (i < lines.length && /^>\s?/.test(lines[i])) {
				quoteLines.push(lines[i].replace(/^>\s?/, ""));
				i++;
			}
			elements.push(
				<blockquote key={uid()} className="readme-blockquote">
					{quoteLines.map((ql) => (
						<p key={uid()}>{parseInline(ql)}</p>
					))}
				</blockquote>
			);
			continue;
		}

		if (/^\|/.test(line)) {
			const tableLines = [];
			while (i < lines.length && /^\|/.test(lines[i])) {
				tableLines.push(lines[i]);
				i++;
			}
			if (tableLines.length >= 2) {
				elements.push(parseTable(tableLines));
			}
			continue;
		}

		if (/^(\s*)([-*+])\s+/.test(line)) {
			const listItems = [];
			while (i < lines.length && /^(\s*)([-*+])\s+/.test(lines[i])) {
				const itemText = lines[i].replace(/^\s*[-*+]\s+/, "");
				const taskMatch = itemText.match(/^\[([ xX])\]\s+(.*)/);
				if (taskMatch) {
					listItems.push(
						<li key={uid()} className="readme-task-item">
							<input
								type="checkbox"
								readOnly
								checked={taskMatch[1].toLowerCase() === "x"}
								className="readme-checkbox"
							/>
							<span>{parseInline(taskMatch[2])}</span>
						</li>
					);
				} else {
					listItems.push(
						<li key={uid()}>{parseInline(itemText)}</li>
					);
				}
				i++;
			}
			elements.push(
				<ul key={uid()} className="readme-ul">
					{listItems}
				</ul>
			);
			continue;
		}

		if (/^\d+\.\s+/.test(line)) {
			const listItems = [];
			while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
				const itemText = lines[i].replace(/^\d+\.\s+/, "");
				listItems.push(<li key={uid()}>{parseInline(itemText)}</li>);
				i++;
			}
			elements.push(
				<ol key={uid()} className="readme-ol">
					{listItems}
				</ol>
			);
			continue;
		}

		if (line.trim() === "") {
			i++;
			continue;
		}

		const paraLines = [];
		while (
			i < lines.length &&
			lines[i].trim() !== "" &&
			!/^(#{1,6}\s|```|>\s?|[-*+]\s|\d+\.\s|\|)/.test(lines[i]) &&
			!/^(-{3,}|\*{3,}|_{3,})\s*$/.test(lines[i])
		) {
			paraLines.push(lines[i]);
			i++;
		}

		if (paraLines.length > 0) {
			elements.push(
				<p key={uid()} className="readme-p">
					{parseInline(paraLines.join(" "))}
				</p>
			);
		} else {
			i++;
		}
	}

	return elements;
};

export const ProjectReadmeSection = ({ project }) => {
	const [content, setContent] = useState(null);
	const [status, setStatus] = useState("loading");
	const [errorMsg, setErrorMsg] = useState("");

	const fetchReadme = useCallback(async () => {
		const apiUrl = rawReadmeUrl(project.githubUrl);
		if (!apiUrl) {
			setStatus("error");
			setErrorMsg("Invalid GitHub URL.");
			return;
		}

		try {
			setStatus("loading");
			const res = await fetch(apiUrl, {
				headers: { Accept: "application/vnd.github.v3.raw" },
			});

			if (!res.ok) {
				if (res.status === 404) throw new Error("No README found for this repository.");
				if (res.status === 403) throw new Error("GitHub API rate limit hit. Try again in a minute.");
				throw new Error(`GitHub API error: ${res.status}`);
			}

			const text = await res.text();
			setContent(text);
			setStatus("success");
		} catch (err) {
			setStatus("error");
			setErrorMsg(err.message || "Failed to fetch README.");
		}
	}, [project.githubUrl]);

	useEffect(() => {
		fetchReadme();
	}, [fetchReadme]);

	const parsedContent = status === "success" && content ? parseMarkdown(content) : null;

	return (
		<div className="readme-inline">
			{status === "loading" && (
				<div className="readme-state">
					<Loader2 className="readme-spinner" />
					<p>Loading project content…</p>
				</div>
			)}

			{status === "error" && (
				<div className="readme-state readme-error">
					<AlertCircle className="icon-xl" />
					<p>{errorMsg}</p>
					<button onClick={fetchReadme} className="cosmic-button mt-4">
						Retry
					</button>
				</div>
			)}

			{status === "success" && parsedContent && (
				<article className="readme-article">{parsedContent}</article>
			)}
		</div>
	);
};
