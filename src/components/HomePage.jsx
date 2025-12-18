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
            <span className="text-primary whitespace-nowrap">
              {displayedText}
              <span
                className="animate-pulse inline-block"
                style={{ fontSize: "1em", fontWeight: "100" }}
              >
                |
              </span>
            </span>
          </h1>
          {firstTypingComplete && (
            <>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                A
                <span className="text-primary text-xl md:text-2xl">
                  {" "}
                  Software Developer
                </span>
                , I engineer stellar digital solutions with the precision of
                orbital mechanics. I'm committed to launching efficient,
                cloud-native applications that explore the frontiers of the
                Internet.
                <span> </span>{" "}
              </p>

              <div className="mt-8 opacity-0 animate-fade-in-delay-4 hover:scale-103">
                <a
                  href="/resume5.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cosmic-button w-fit font-['Roboto_Mono'] text-3xl md:text-4xl px-16 py-8 font-black tracking-widest"
                >
                  View Resume <FileDown className="w-12 h-12 md:w-16 md:h-16" />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};
