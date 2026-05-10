export const projects = [
	{
		id: 1,
		title: "Agentic AI Coding Assistant",
		description:
			"This is a command-line autonomous AI coding agent powered by Gemini that reads, writes, and executes Python files while intelligently debugging code with real-time error analysis and automatic iterative code correction through multiple sequential function calling operations.",
		image: "/ProjectSS/four.png",
		tags: [
			"Python",
			"File-handling",
			"Prompt",
			"Function-calling",
			"Autonomous",
		],
		docsUrl: "",
		githubUrl: "https://github.com/ERSA-14/Python-AI",
	},
	{
		id: 2,
		title: "Invoice Processing Automation",
		description:
			"This is a Automated Lambda function that extracts receipt data (vendor, date, total, items) from an S3 bucket uploaded image using Textract for OCR processing and stores it in DynamoDB database. It then sends an email notification with the extracted receipt details via SES.",
		image: "/ProjectSS/two.jpeg",
		tags: ["Python", "AWS Cloud", "Serverless", "Event-driven", "Automation"],
		docsUrl: "",
		githubUrl: "https://github.com/ERSA-14/AWS-lambda",
	},
	{
		id: 3,
		title: "Secure Authentication System",
		description:
			"This is a Express.js authentication system using Passport.js with local strategy (bcrypt + AES crypto) and Google OAuth2, storing user data in PostgreSQL. Authenticated users access protected routes with session-based authentication managed by express-session.",
		image: "/ProjectSS/one.jpeg",
		tags: ["Node", "Express", "Authentication", "Postgres", "Sessions"],
		docsUrl: "",
		githubUrl: "https://github.com/ERSA-14/Authentication_frontend",
	},
];
