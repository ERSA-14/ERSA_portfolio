import React, { useState, useRef, useEffect } from "react";
import { MoveUpRight, Globe, MoveUp, MoveDown } from "lucide-react";
import { SiAmazonwebservices, SiOracle } from "react-icons/si";
import { cn } from "../lib/utils";
import { debounce } from "../utils/debounce";

const certifications = [
  {
    title: "Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    startDate: "Feb 2025",
    expiryDate: "Feb 2028",
    link: "https://www.credly.com/badges/e3bf58f5-7a58-4847-a234-fa6d2814fa61/linked_in_profile",
    icon: <SiAmazonwebservices className="w-10 h-10 md:w-8 md:h-8" />,
    description:
      "I built a solid foundation in cloud computing with AWS, learning how global infrastructure and core services work together to power modern applications.",
  },
  {
    title: "Generative AI Certified Professional",
    issuer: "Oracle Cloud Infrastructure",
    startDate: "Oct 2025",
    expiryDate: "Oct 2027",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=7712CB35AAD0B31FDE3154077E3F7D29EDAF1DA70C7F51969EE97CACF32A0C49",
    icon: <SiOracle className="w-10 h-10 md:w-8 md:h-8" />,
    description:
      "I explored the basics of Large Language Models and prompt engineering, learning how to build and experiment with generative AI tools on the Oracle Cloud.",
  },
  {
    title: "Data Science Certified Professional",
    issuer: "Oracle Cloud Infrastructure",
    startDate: "Jul 2025",
    expiryDate: "Jul 2027",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=91CBB24852A192D2E793E6D8616BDF73D0BCF982B98FDFEAB8240C9DD25304E4",
    icon: <SiOracle className="w-10 h-10 md:w-8 md:h-8" />,
    description: `I developed a fundamental understanding of data analysis and machine learning, focusing on the core concepts of data engineering and model deployment.`,
  },
  {
    title: "AI Vector Search Certified Professional",
    issuer: "Oracle Cloud Infrastructure",
    startDate: "May 2025",
    expiryDate: "May 2027",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=42B248756A96C0E862B8CA7AAB6BD7443E85CA8EF0C0CD29EC2CBBBCCA1996CD",
    icon: <SiOracle className="w-10 h-10 md:w-8 md:h-8" />,
    description:
      "I learnt the fundamentals of semantic search and vector databases, exploring how RAG architectures can make AI-driven search more precise and intelligent.",
  },
  {
    title: "Migration Architect Certified Professional",
    issuer: "Oracle Cloud Infrastructure",
    startDate: "Oct 2025",
    expiryDate: "Oct 2027",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=0ED43A978E6DFC8DCA7115B8747740CCC3782EC6161B0BDF943E525CAD89FCA2",
    icon: <SiOracle className="w-10 h-10 md:w-8 md:h-8" />,
    description:
      "I studied the key principles of cloud transitions, gaining an understanding of how to plan and execute migrations for reliable and scalable infrastructure.",
  },
];

export const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  // Determine items per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setItemsPerSlide(3); // Large screens
      } else if (window.innerWidth >= 768) {
        setItemsPerSlide(2); // Medium screens
      } else {
        setItemsPerSlide(1); // Small screens
      }
    };

    handleResize();

    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  useEffect(() => {
    if (currentIndex !== 0) {
      setCurrentIndex(0);
    }
  }, [itemsPerSlide]);

  const totalSlides = Math.ceil(certifications.length / itemsPerSlide);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const visibleCerts = certifications.slice(
    currentIndex * itemsPerSlide,
    (currentIndex + 1) * itemsPerSlide
  );

  return (
    <section
      id="Certifications"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-secondary/10"
    >
      <div className="container mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            My <span className="text-primary tracking-normal">Credentials</span>
          </h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            These industry-validated certifications map my journey across the
            technology stack, each one a waypoint in the infinite expanse of
            software development.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto flex items-center gap-6 md:gap-10">
          {/* Main Content Area */}
          <div className="flex-1 flex flex-col justify-center gap-4 transition-all duration-500 w-full">
            {visibleCerts.map((cert, index) => (
              <div
                key={index}
                className="bg-card gradient-border p-4 md:p-6 rounded-xl shadow-md card-hover flex flex-col md:flex-row items-center gap-4 md:gap-6 group relative overflow-hidden transition-all duration-300 border border-border/50 w-full animate-in fade-in slide-in-from-bottom-4 duration-500"
              >
                {/* Icon Container */}
                <div className="relative border-2 border-primary p-4 md:p-3 bg-primary/10 rounded-xl text-primary shadow-[0_0_10px_rgba(var(--primary),0.1)] group-hover:scale-105 transition-transform duration-500 shrink-0">
                  {cert.icon}
                </div>

                <div className="relative z-10 flex-1 text-center md:text-left flex flex-col justify-center gap-1">
                  <div>
                    <span className="text-sm md:text-xs font-bold tracking-[.2em] uppercase opacity-80 leading-none font-['Roboto_Mono']">
                      {cert.issuer}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-xl font-bold leading-tight font-['Poppins'] tracking-wide">
                    {cert.title
                      .split(
                        /(Certified Cloud|Generative AI|Data Science|AI Vector Search|Migration Architect)/
                      )
                      .map((part, i) =>
                        /(Certified Cloud|Generative AI|Data Science|AI Vector Search|Migration Architect)/.test(
                          part
                        ) ? (
                          <span key={i} className="font-black text-primary">
                            {part}
                          </span>
                        ) : (
                          part
                        )
                      )}
                  </h3>

                  <p className="text-muted-foreground text-base md:text-sm leading-relaxed mb-1 font-medium font-['Space_Grotesk'] italic max-w-3xl">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 font-['Inter']">
                    <span className="px-2 py-0.5 border-1 border-primary bg-primary/20 text-primary text-sm md:text-xs font-bold rounded uppercase border border-primary/10">
                      Active
                    </span>
                    <span className="text-sm md:text-xs font-bold text-muted-foreground/80 tracking-wide uppercase">
                      {cert.startDate} — {cert.expiryDate}
                    </span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="relative z-10 md:self-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cosmic-button flex items-center gap-2 px-6 py-2.5 text-xs md:text-sm font-black group/btn shrink-0"
                  >
                    VERIFICATION{" "}
                    <MoveUpRight className="w-4 h-4 transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Vertical Navigation Controls - Fixed to the side without overlap */}
          {totalSlides > 1 && (
            <div className="flex flex-col items-center gap-4 shrink-0">
              <button
                onClick={handlePrev}
                className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 p-2 shadow-lg hover:scale-110 active:scale-95"
                aria-label="Previous certifications"
              >
                <MoveUp strokeWidth={3} className="w-5 h-5 md:w-6 md:h-6" />
              </button>

              {/* Indicator Dots */}
              <div className="flex flex-col gap-3 items-center">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "h-5 w-2 bg-primary shadow-lg"
                        : "h-2 w-2 bg-foreground dark:bg-foreground hover:bg-foreground/60 dark:hover:bg-foreground/70"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === currentIndex}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 p-2 shadow-lg hover:scale-110 active:scale-95"
                aria-label="Next certifications"
              >
                <MoveDown strokeWidth={3} className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
