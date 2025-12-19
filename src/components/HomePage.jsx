import { useState, useEffect } from "react";
import { FileDown } from "lucide-react";

export const HomePage = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [firstTypingComplete, setFirstTypingComplete] = useState(false);
  const fullText = "Saksham Gupta";

  useEffect(() => {
    let timeout;
    if (!isDeleting && displayedText === fullText) {
      if (!firstTypingComplete) {
        setTimeout(() => {
          setFirstTypingComplete(true);
          window.dispatchEvent(new Event("typingComplete"));
        }, 0);
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
  }, [displayedText, isDeleting, firstTypingComplete, fullText]);

  return (
    <section
      id="Home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 opacity-100"
    >
      <div className="container max-w-6xl mx-auto text-center z-10 mt-20">
        <div className="space-y-6 ">
          <h1 className="text-4xl md:text-6xl font-bold flex flex-wrap md:flex-nowrap justify-center gap-x-3 gap-y-2">
            <span className="opacity-0 animate-fade-in whitespace-nowrap">
              Hello, I'm
            </span>
            <span className="text-primary whitespace-nowrap font-bold">
              {displayedText}
              <span
                className="animate-pulse inline-block"
                style={{ fontSize: "1em", fontWeight: "200" }}
              >
                |
              </span>
            </span>
          </h1>
          {firstTypingComplete && (
            <>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto opacity-0 animate-fade-in-delay-3">
                A
                <span className="text-primary text-xl md:text-2xl font-semibold">
                  {"  "}
                  Software Developer{"  "}
                </span>
                and Automation Enthusiast specialising in efficient, scalable
                applications built with modern technologies and frameworks. From
                intuitive user interfaces to powerful backend architectures, I
                create cloud-native solutions that prioritise performance,
                security, and user experience consistently delivering quality
                software that solves real problems.
                <span> </span>{" "}
              </p>

              <div className="mt-12 opacity-0 animate-fade-in-delay-4">
                <a
                  href="/resume5.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button scale-110 w-fit text-4xl md:text-5xl px-20 py-10 tracking-widest transition-transform duration-300"
                >
                  View Resume <FileDown className="w-16 h-16 md:w-20 md:h-20" />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
