import {
  Linkedin,
  Mail,
  MapPin,
  PhoneOutgoing,
  Github,
  GitCommitVertical,
  Send,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";

import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ChatWithMe } from "./ChatWithMe";

export const Contact = () => {
  const { toast } = useToast();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
          form.current.reset();
        },
        (error) => {
          toast({
            variant: "destructive",
            title: "Error",
            description:
              "Looks like our digital connection hit a black hole— lets switch to old-fashioned email for now. I will reach out to you soon that way.",
          });
        }
      );
  };

  return (
    <section id="Contact" className="py-20 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-6xl pb-4 mt-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Connect</span> with me
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I am actively seeking opportunities to contribute to innovative
          projects and grow with dynamic teams. Whether you have a role in mind
          or simply want to discuss technology, I would love to hear from you.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="space-y-8">
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                Contact information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/30">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <a
                      href="mailto:saksham22sg@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground"
                    >
                      <h4 className="font-semibold text-left text-sm">Email</h4>
                      <span className="hover:text-primary transition-colors duration-300 text-sm block">
                        Saksham22sg@gmail.com
                      </span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/30">
                    <PhoneOutgoing className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <a
                      href="tel:+916358798314"
                      className="text-muted-foreground"
                    >
                      <h4 className="font-semibold text-left text-sm">
                        Contact Number
                      </h4>
                      <span className="hover:text-primary transition-colors duration-300 text-sm block">
                        +91 635 879 8314
                      </span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-primary/30">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-left text-sm">
                      Location
                    </h4>
                    <a className="text-muted-foreground hover:text-primary transition-colors duration-300">
                      <span className="text-sm block">
                        Bhopal, Madhya Pradesh, India
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="pb-6">
              <h3 className="text-2xl font-semibold mb-6 text-center lg:text-left">
                Social Channels
              </h3>
              <div className="flex space-x-4 justify-center lg:justify-start gap-4">
                <a
                  href="https://www.linkedin.com/in/saksham-gupta-ersa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <Linkedin strokeWidth={2} size={28} />
                </a>
                <a
                  href="https://leetcode.com/u/ERSA-14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <SiLeetcode strokeWidth={0.5} size={24} />
                </a>
                <a
                  href="https://github.com/ERSA-14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <Github strokeWidth={2} size={28} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-5 rounded-lg shadow-sm border-2 border-transparent transition-all duration-300 hover:border-primary hover:shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:scale-[1.02] w-full h-full flex flex-col">
            <h4 className="font-semibold text-xl mb-3 text-center">
              Send a message
            </h4>
            <form
              className="space-y-2.5 text-left flex-1 flex flex-col"
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
                  className="w-full px-3 py-1 text-sm rounded-lg border border-input bg-background focus:ring-1 focus:ring-primary focus:border-primary focus:outline-hidden transition-all"
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
                  className="w-full px-3 py-1 text-sm rounded-lg border border-input bg-background focus:ring-1 focus:ring-primary focus:border-primary focus:outline-hidden transition-all"
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
                  rows="3"
                  autoComplete="off"
                  className="w-full px-3 py-1 text-sm rounded-lg border border-input bg-background focus:ring-1 focus:ring-primary focus:border-primary focus:outline-hidden resize-none transition-all flex-1"
                  placeholder="your Message here ..."
                />
              </div>
              <button
                type="submit"
                className="cosmic-button w-fit flex items-center justify-center gap-2 mt-auto mx-auto !py-1"
              >
                <span>Send Message</span>
                <Send size={16} />
              </button>
            </form>
          </div>

          <ChatWithMe />
        </div>
      </div>

      <p className="flex items-center justify-center gap-3 text-center text-muted-foreground text-sm mt-10 pb-6 italic">
        <span>Crafted and Maintained</span>
        <GitCommitVertical strokeWidth={2} size={20} className="primary-text" />
        <span>
          by <span className="text-primary font-semibold">Saksham Gupta</span>{" "}
          since <span className="font-semibold">2025</span>
        </span>
      </p>
    </section>
  );
};
