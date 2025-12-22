import { useState, useRef, useEffect } from "react";
import { MoveUpRight } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import Lenis from "lenis";

export const ChatWithMe = () => {
  const { toast } = useToast();
  const [messages, setMessages] = useState(() => {
    try {
      const saved = sessionStorage.getItem("chat_history");
      return saved
        ? JSON.parse(saved)
        : [
            {
              role: "assistant",
              content: "Hello! I'm Saksham Gupta, in a digital shell",
            },
          ];
    } catch (error) {
      console.error("Failed to parse chat history:", error);
      return [
        {
          role: "assistant",
          content: "Hello! I'm Saksham Gupta, in a digital shell",
        },
      ];
    }
  });

  useEffect(() => {
    try {
      sessionStorage.setItem("chat_history", JSON.stringify(messages));
    } catch (error) {
      console.error("Failed to save chat history:", error);
    }
  }, [messages]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const lenisRef = useRef(null);

  const handleScroll = () => {
    // Logic removed
  };

  const scrollToBottom = () => {
    if (lenisRef.current && chatContainerRef.current) {
      lenisRef.current.scrollTo(chatContainerRef.current.scrollHeight, {
        duration: 0.5,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
    setTimeout(handleScroll, 100);
  }, [messages]);

  // Initialize Lenis for chat container
  useEffect(() => {
    if (chatContainerRef.current) {
      lenisRef.current = new Lenis({
        wrapper: chatContainerRef.current,
        content: chatContainerRef.current,
        duration: 0.8, // Snappy but smooth
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 2.5, // Very responsive
        touchMultiplier: 3,
        infinite: false,
      });

      function raf(time) {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }

    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("resize", handleScroll);
      lenisRef.current?.destroy();
    };
  }, []);

  const renderMessageContent = (content) => {
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

    // Check online status
    if (!navigator.onLine) {
      toast({
        variant: "destructive",
        title: "Offline",
        description: "Please check your internet connection and try again.",
      });
      return;
    }

    const userMessage = input.trim();
    setInput("");

    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const systemPrompt = import.meta.env.VITE_GEMINI_SYSTEM_PROMPT;

      if (!apiKey) {
        throw new Error(
          "API configuration is missing. Please try again later."
        );
      }

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            system_instruction: {
              parts: [
                {
                  text:
                    systemPrompt ||
                    "You are Saksham Gupta, an AWS Full-Stack Python Developer & AI Engineer.",
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
        const errorData = await response.json().catch(() => ({}));
        // console.error("Gemini API error handled");

        if (response.status === 429) {
          throw new Error(
            "I'm receiving too many messages right now. Please wait a moment."
          );
        }

        if (response.status === 401 || response.status === 403) {
          throw new Error(
            "AI Authentication failed. The API key might be invalid or expired."
          );
        }

        throw new Error(
          `Connection issue (Status ${response.status}). Please try again later.`
        );
      }

      const data = await response.json();

      // Handle blocked content or empty responses
      if (data.promptFeedback?.blockReason) {
        throw new Error(
          "I cannot respond to this message due to safety filters."
        );
      }

      const aiResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        (data.candidates?.[0]?.finishReason === "SAFETY"
          ? "I apologize, but I cannot discuss that topic."
          : "I apologize, but I'm having trouble formulating a response right now.");

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: aiResponse },
      ]);
    } catch (error) {
      console.error("Chat error:", error);
      toast({
        variant: "destructive",
        title: "Chat Error",
        description:
          error.message || "Failed to send message. Please try later.",
      });

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I'm experiencing connection issues :(\nPlease try again or contact me via email if the issue persists.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="group bg-card p-4 rounded-lg shadow-sm gradient-border card-hover w-full h-[450px] flex flex-col relative z-20 overflow-hidden">
      <h3 className="text-2xl text-primary font-bold mb-4 text-center font-['Poppins']">
        Chat with me <span className="text-foreground">in Real time</span>
      </h3>

      <div className="bg-card chat-message-box rounded-lg px-0 py-1 mb-1.5 flex-1 flex flex-col overflow-hidden min-h-0">
        <div
          ref={chatContainerRef}
          onScroll={handleScroll}
          onMouseEnter={() => {
            lenisRef.current?.start();
            lenisRef.current?.resize();
          }}
          onMouseLeave={() => lenisRef.current?.stop()}
          className="flex-1 overflow-y-auto space-y-3 pr-0 pb-6 scrollbar-hide overscroll-none"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`w-fit max-w-[60%] px-3 py-1 border-2 rounded-md ${
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
