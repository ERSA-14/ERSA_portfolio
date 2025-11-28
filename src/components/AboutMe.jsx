import { Code, User, Award } from "lucide-react";

export const AboutMe = () => {
  return (
    <section id="About" className="relative px-4 py-24">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Saksham</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div id="AboutMe" className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Reliable <span className="text-primary">Software Engineer</span>
            </h3>

            <p className="text-muted-foreground">
              Computer Science graduate from Vellore Institute of Technology
              with a CGPA of 8.58, offering a strong foundation in core CS
              concepts and modern software development. I enjoy working close to
              real-world problems and care deeply about writing clear,
              maintainable, and purposeful code.
            </p>

            <p className="text-muted-foreground">
              Python and automation are at the center of how I think and build.
              I like turning repetitive or fragile workflows into reliable
              scripts and systems, and I'm constantly looking for opportunities
              to make tasks faster, safer, and more efficient.
            </p>

            <p className="text-muted-foreground">
              I like sharing my knowledge and helping others while constantly
              trying to learn new skills.Long term, I aim to climb the corporate
              ladder into roles that combine technical depth with ownership and
              leadership. I want to contribute to teams where engineering
              excellence, automation-driven thinking, and continuous improvement
              directly move the business forward.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Connect With Me
              </a>
              <a
                href="src\assets\Resume3.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/15 transition-colors duration-300 hover:scale-105 ease-in-out"
              >
                View Resume
              </a>
            </div>
          </div>
          <div id="skills" className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <div className="text-left">
                    <h4 className="font-semibold text-lg mb-2 flex items-center gap-2 text-primary">
                      <Code className="w-6 h-6 " />
                      What I Build With
                    </h4>
                    <p className="text-muted-foreground">
                      Working primarily with Python, React, Node.js/Express, and
                      AWS to build secure, scalable applications; comfortable
                      with AI, REST APIs (CRUD operations), Flask, MySQL, and
                      serverless patterns on AWS for automation and data
                      processing, with additional experience in Oracle Cloud and
                      Oracle databases.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-left">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2 text-primary">
                    <Award className="w-6 h-6" />
                    Certifications
                  </h4>

                  <p className="text-muted-foreground">
                    <ul className="hollow-circle">
                      <li>
                        <a
                          href="https://www.credly.com/badges/e3bf58f5-7a58-4847-a234-fa6d2814fa61/linked_in_profile"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors whitespace-nowrap"
                        >
                          AWS Certified Cloud Practitioner
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=7712CB35AAD0B31FDE3154077E3F7D29EDAF1DA70C7F51969EE97CACF32A0C49"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          Oracle OCI Certified Generative AI Professional
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=91CBB24852A192D2E793E6D8616BDF73D0BCF982B98FDFEAB8240C9DD25304E4"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          Oracle OCI Certified Data Science Professional
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=42B248756A96C0E862B8CA7AAB6BD7443E85CA8EF0C0CD29EC2CBBBCCA1996CD"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          Oracle AI Vector Search Certified Professional
                        </a>
                      </li>
                    </ul>
                  </p>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
