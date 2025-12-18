import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ChatWithMe } from "./ChatWithMe";
import { debounce } from "../utils/debounce";
import {
  Linkedin,
  Mail,
  MapPin,
  PhoneOutgoing,
  Github,
  GitCommitVertical,
  Send,
  MoveLeft,
  MoveRight,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { useToast } from "../hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const form = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);
  const [isSending, setIsSending] = useState(false);

  // Determine items per slide based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Laptop screens and above: show both cards side-by-side
      if (window.innerWidth >= 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(1);
      }
    };

    handleResize();

    const debouncedResize = debounce(handleResize, 100);
    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, []);

  // Reset current index when items per slide changes
  useEffect(() => {
    if (currentIndex !== 0) {
      setCurrentIndex(0);
    }
  }, [itemsPerSlide]);

  const slidesCount = 2; // Message, Chat
  const totalSlides = Math.ceil(slidesCount / itemsPerSlide);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);

    if (
      !import.meta.env.VITE_SERVICE_ID ||
      !import.meta.env.VITE_TEMPLATE_ID ||
      !import.meta.env.VITE_PUBLIC_KEY
    ) {
      toast({
        variant: "destructive",
        title: "Configuration Error",
        description:
          "EmailJS keys are not configured or has reached 200 limit. Please check your .env file.",
      });
      return;
    }

    const formData = new FormData(form.current);
    const templateParams = {
      user_name: formData.get("user_name"),
      user_email: formData.get("user_email"),
      message: `Name: ${formData.get("user_name")}\nEmail: ${formData.get(
        "user_email"
      )}\n\nMessage:\n${formData.get("message")}`,
    };

    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast({
            title: "Message Sent",
            description:
              "Thank you for your interest- your Message is now in my orbit, and I will launch a reply to you very soon.",
          });
          e.target.reset();
          if (form.current) form.current.reset();
          setIsSending(false);
        },
        () => {
          toast({
            variant: "destructive",
            title: "Error",
            description:
              "Looks like our digital connection hit a black hole— let's switch to old-fashioned email for now. I will reach out to you soon that way.",
          });
          setIsSending(false);
        }
      );
  };

  // Define the slides
  const allSlides = [
    // Slide 1: Send a Message
    <div
      key="message"
      className="group bg-card gradient-border rounded-lg overflow-hidden shadow-sm card-hover flex flex-col relative z-20 h-full p-4"
    >
      <h3 className="text-2xl font-bold mb-4 text-center font-['Poppins']">
        Send a<span className="text-primary"> Message</span>
      </h3>
      <form
        className="space-y-3 text-left flex-1 flex flex-col"
        ref={form}
        onSubmit={sendEmail}
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-1 text-muted-foreground"
          >
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            required
            autoComplete="off"
            className="responsive-input"
            placeholder="your Name ..."
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-1 text-muted-foreground"
          >
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="email"
            required
            autoComplete="off"
            className="responsive-input"
            placeholder="your.Email@example.com ..."
          />
        </div>
        <div className="flex-1 flex flex-col">
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-1 text-muted-foreground"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows="4"
            autoComplete="off"
            className="responsive-input resize-none flex-1"
            placeholder="your Message here ..."
          />
        </div>
        <button
          type="submit"
          disabled={isSending}
          className="cosmic-button w-fit flex items-center justify-center gap-2 mt-2 mx-auto disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <span>{isSending ? "Sending ..." : "Send Message"}</span>
          <Send className="icon-sm" />
        </button>
      </form>
    </div>,

    // Slide 2: Chat with Me
    <div key="chat" className="h-full">
      <ChatWithMe />
    </div>,
  ];

  const visibleSlides = allSlides.slice(
    currentIndex * itemsPerSlide,
    (currentIndex + 1) * itemsPerSlide
  );

  return (
    <section
      id="Contact"
      className="relative min-h-screen flex flex-col justify-center items-center py-20 px-4 bg-secondary/30"
    >
      <div className="container mx-auto max-w-7xl pb-4 mt-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Connect</span> with Me
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I am actively seeking opportunities to contribute to innovative
          projects and grow with dynamic teams. Whether you have a role in mind
          or simply want to discuss technology, I would love to hear from you.
        </p>

        <div className="grid grid-cols-1 min-[600px]:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Static Column: Information and Socials */}
          <div className="min-[600px]:col-span-1 lg:col-span-1 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-left">
                Contact <span className="text-primary">Information</span>
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <a
                    href="mailto:saksham22sg@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail className="icon-lg" />
                  </a>
                  <div className="text-left">
                    <a
                      href="mailto:saksham22sg@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground"
                    >
                      <h4 className="font-semibold text-left text-sm">Email</h4>
                      <span className="hover:text-primary text-sm block">
                        Saksham22sg@gmail.com
                      </span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href="tel:+916358798314"
                    className="p-3 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                    aria-label="Phone"
                  >
                    <PhoneOutgoing className="icon-lg" />
                  </a>
                  <div className="text-left">
                    <a
                      href="tel:+916358798314"
                      className="text-muted-foreground"
                    >
                      <h4 className="font-semibold text-left text-sm">
                        Contact Number
                      </h4>
                      <span className="hover:text-primary text-sm block">
                        +91 635 879 8314
                      </span>
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary/20 transition-all duration-300"
                    aria-label="Location"
                  >
                    <MapPin className="icon-lg" />
                  </a>
                  <div className="text-left">
                    <a
                      href="https://www.google.com/maps/place/Bhopal,+Madhya+Pradesh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground"
                    >
                      <h4 className="font-semibold text-left text-sm">
                        Location
                      </h4>
                      <span className="text-sm block hover:text-primary">
                        Bhopal, Madhya Pradesh, India
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-6 text-left">
                <span className="text-primary">Social</span> Channels
              </h3>
              <div className="flex space-x-4 justify-start gap-4">
                <a
                  href="https://www.linkedin.com/in/saksham-gupta-ersa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary/20 transition-all duration-300 flex items-center justify-center"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin strokeWidth={2} className="icon-lg" />
                </a>
                <a
                  href="https://leetcode.com/u/ERSA-14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary/20 transition-all duration-300 flex items-center justify-center"
                  aria-label="LeetCode Profile"
                >
                  <SiLeetcode strokeWidth={0.5} className="icon-lg" />
                </a>
                <a
                  href="https://github.com/ERSA-14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border-2 border-primary text-primary hover:bg-primary/20 transition-all duration-300 flex items-center justify-center"
                  aria-label="GitHub Profile"
                >
                  <Github strokeWidth={2} className="icon-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Carousel Column: Message and Chat */}
          <div className="min-[600px]:col-span-1 lg:col-span-2">
            <div className="relative bg-background rounded-lg px-6 py-8 shadow-sm border-b border-border/50 transition-all duration-300 h-full flex flex-col">
              <div
                className={`grid gap-6 md:gap-8 transition-all duration-300 flex-1 ${
                  itemsPerSlide === 2 ? "grid-cols-2" : "grid-cols-1"
                }`}
              >
                {visibleSlides}
              </div>

              {/* Navigation */}
              {totalSlides > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                  <button
                    onClick={handlePrev}
                    className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 px-3 py-1.5"
                    aria-label="Previous section"
                  >
                    <MoveLeft strokeWidth={3} className="icon-md" />
                  </button>

                  <div className="flex gap-3 items-center">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "w-5 h-2 bg-primary shadow-lg"
                            : "w-2 h-2 bg-foreground dark:bg-foreground hover:bg-foreground/60 dark:hover:bg-foreground/70"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={handleNext}
                    className="rounded-full border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 px-3 py-1.5"
                    aria-label="Next section"
                  >
                    <MoveRight strokeWidth={3} className="icon-md" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <p className="flex items-center justify-center gap-3 text-center text-muted-foreground text-sm mt-10 pb-6 italic">
        <span>Crafted and Maintained</span>
        <GitCommitVertical strokeWidth={2} className="icon-md primary-text" />
        <span>
          by <span className="text-primary font-semibold">Saksham Gupta</span>{" "}
          since <span className="font-semibold">2025</span>
        </span>
      </p>
    </section>
  );
};
