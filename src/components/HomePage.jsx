import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const HomePage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [firstTypingComplete, setFirstTypingComplete] = useState(false);
  const fullText = "Saksham Gupta";

  useEffect(() => {
    let timeout;
    if (!isDeleting && displayedText === fullText) {
      if (!firstTypingComplete) {
        setFirstTypingComplete(true);
      }
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && displayedText === "") {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    } else if (isDeleting) {
      const deleteSpeed = Math.random() * 80 + 50;
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
      }, deleteSpeed);
    } else {
      const typingSpeed = Math.random() * 130 + 80;
      timeout = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting]);

  return (
    <section
      id="Home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 opacity-1000"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            <span className="opacity-0 animate-fade-in">Hello, I am</span>
            <span className="text-primary ml-2">
              {displayedText}
              <span
                className="animate-pulse"
                style={{ fontSize: "1em", fontWeight: "50" }}
              >
                |
              </span>
            </span>
          </h1>
          {firstTypingComplete && (
            <>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                A software and web architect, I engineer stellar digital
                solutions with the precision of orbital mechanics. I'm committed
                to launching efficient, high-quality applications that explore
                the frontiers of Internet.
                <span> </span>{" "}
              </p>

              <div className="opacity-0 animate-fade-in-delay-4 hover:scale-105">
                <a href="#Projects" className="cosmic-button">
                  View my Projects
                </a>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex item-center animate-bounce">
        <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
      </div>
    </section>
  );
};
