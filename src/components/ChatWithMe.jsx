import { useState, useRef, useEffect } from "react";
import { MoveUpRight } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export const ChatWithMe = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState(() => {
    // sessionStorage persists data for the session (tab) only.
    // It is cleared when the tab or browser is closed.
    const saved = sessionStorage.getItem("chat_history");
    return saved
      ? JSON.parse(saved)
      : [
          {
            role: "assistant",
            content: "Hello! I am Saksham Gupta, in a digital shell",
          },
        ];
  });

  useEffect(() => {
    sessionStorage.setItem("chat_history", JSON.stringify(messages));
  }, [messages]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const [scrollShadows, setScrollShadows] = useState({
    top: false,
    bottom: false,
  });

  const handleScroll = () => {
    if (chatContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } =
        chatContainerRef.current;
      setScrollShadows({
        top: scrollTop > 10,
        bottom: Math.ceil(scrollTop + clientHeight) < scrollHeight - 10,
      });
    }
  };

  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
    // Check shadows after scroll
    setTimeout(handleScroll, 100);
  }, [messages]);

  useEffect(() => {
    // Initial check
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const renderMessageContent = (content) => {
    // Simple parser for bold, italic, and bold-italic
    // Regex matches: ***bolditalic*** OR **bold** OR *italic* OR __bold__ OR _italic_
    // Note: This simple regex might be tricked by nested symbols but works for standard Gemini output
    const regex = /(\*\*\*.*?\*\*\*|\*\*.*?\*\*|\*.*?\*|__.*?__|_.*?_)/g;

    return content.split(regex).map((part, index) => {
      if (part.startsWith("***") && part.endsWith("***") && part.length >= 6) {
        return (
          <strong key={index}>
            <em>{part.slice(3, -3)}</em>
          </strong>
        );
      } else if (
        part.startsWith("**") &&
        part.endsWith("**") &&
        part.length >= 4
      ) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      } else if (
        part.startsWith("__") &&
        part.endsWith("__") &&
        part.length >= 4
      ) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      } else if (
        part.startsWith("*") &&
        part.endsWith("*") &&
        part.length >= 2
      ) {
        return <span key={index}>{part.slice(1, -1)}</span>;
      } else if (
        part.startsWith("_") &&
        part.endsWith("_") &&
        part.length >= 2
      ) {
        return <span key={index}>{part.slice(1, -1)}</span>;
      }
      return <span key={index}>{part.replace(/(^|\n)\s*\*\s+/g, "$1")}</span>;
    });
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      if (!import.meta.env.VITE_GEMINI_API_KEY) {
        throw new Error(
          "API Key is missing. Please verify your env configuration."
        );
      }

      const systemPrompt = import.meta.env.VITE_GEMINI_SYSTEM_PROMPT;

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${
          import.meta.env.VITE_GEMINI_API_KEY
        }`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            system_instruction: {
              parts: [
                {
                  text: systemPrompt,
                },
              ],
            },
            contents: [
              ...messages.map((msg) => ({
                role: msg.role === "user" ? "user" : "model",
                parts: [{ text: msg.content }],
              })),
              {
                role: "user",
                parts: [{ text: userMessage }],
              },
            ],
            generationConfig: {
              temperature: 0.5,
              maxOutputTokens: 1200,
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Server connection failed. Please check your internet connection. Status: " +
            response.status
        );
      }

      const data = await response.json();
      const aiResponse =
        data.candidates[0]?.content?.parts[0]?.text ||
        "I apologize, but I couldn't generate a response.";

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: aiResponse },
      ]);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error.message || "Failed to send message. Please try later.",
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm experiencing connection issues :(\nPlease try again or contact me via email.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-card p-5 rounded-lg shadow-sm border-2 border-primary w-full h-full flex flex-col">
      <h4 className="font-semibold text-xl mb-4 text-center justify-center text-foreground">
        <span className="text-foreground font-semibold">Chat with me</span>{" "}
        <span className="text-primary font-semibold">in Real time</span>
      </h4>

      <div className="bg-card chat-message-box rounded-lg px-0 py-1 mb-2">
        <div
          ref={chatContainerRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto space-y-3 pr-0 custom-scrollbar"
          style={{ maxHeight: "250px", minHeight: "250px" }}
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`w-fit max-w-[63%] px-2 py-1 border-2 ${
                  message.role === "user"
                    ? "bg-secondary text-primary border-primary"
                    : "bg-secondary text-foreground border-foreground font-semibold"
                }`}
              >
                <p className="text-left whitespace-pre-wrap break-words chat-message-text">
                  {renderMessageContent(message.content)}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-secondary/50 rounded-full px-3 py-2 flex items-center gap-1 text-foreground">
                <div className="w-1.25 h-1.25 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-1.25 h-1.25 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-1.25 h-1.25 bg-primary rounded-full animate-bounce"></div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <form onSubmit={sendMessage} className="flex gap-2 items-center">
        <input
          type="text"
          id="chat-input"
          name="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me some Questions ..."
          autoComplete="off"
          disabled={isLoading}
          aria-label="Chat Input"
          className="flex-1 responsive-input rounded-full disabled:opacity-100"
        />
        <button
          type="submit"
          disabled={isLoading || !input.trim()}
          className={`flex items-center justify-center rounded-full aspect-square h-fit ${
            input.trim()
              ? "cosmic-button !p-1.5 shadow-[0_0_15px_rgba(var(--primary),0.5)] hover:shadow-[0_0_20px_rgba(var(--primary),0.8)] border-[2.2px]"
              : "view-resume-button !p-1.5 border-[2.2px] border-primary text-primary bg-transparent hover:bg-primary/20 disabled:opacity-100 disabled:hover:bg-transparent"
          }`}
        >
          <MoveUpRight className="icon-sm" strokeWidth={3} />
        </button>
      </form>
    </div>
  );
};
