import {
  Linkedin,
  Mail,
  MapPin,
  PhoneOutgoing,
  Github,
  GitCommitVertical,
} from "lucide-react";
import { SiLeetcode } from "react-icons/si";

export const Contact = () => {
  return (
    <section id="Contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl pb-2">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Connect</span> with me
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I am actively seeking opportunities to contribute to innovative
          projects and grow with dynamic teams. Whether you have a role in mind
          or simply want to discuss technology, I would love to hear from you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/30">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <a
                    href="mailto:saksham22sg@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground"
                  >
                    <h4 className="font-semibold text-left">Email</h4>
                    <span className="hover:text-primary transition-colors duration-300">
                      Saksham22sg@gmail.com
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/30">
                  <PhoneOutgoing className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <a href="tel:+916358798314" className="text-muted-foreground">
                    <h4 className="font-semibold text-left">Contact Number</h4>
                    <span className="hover:text-primary transition-colors duration-300">
                      +91 635 879 8314
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/30">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-left">Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors duration-300">
                    <span>Bhopal, Madhya Pradesh, India</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-8 pb-2 mt-20">
        <h4 className="font-semibold mb-4 text-primary text-center text-xl">
          Social Channels
        </h4>
        <div className="flex space-x-4 justify-center gap-4">
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
      <p className="flex items-center justify-center gap-1 text-center text-muted-foreground text-sm mt-12 pb-4 italic">
        <span>Crafted and Maintained</span>
        <GitCommitVertical strokeWidth={1} size={20} className="primary-text" />
        <span>
          by Saksham Gupta since <span className="font-semibold">2025</span>
        </span>
      </p>
    </section>
  );
};
