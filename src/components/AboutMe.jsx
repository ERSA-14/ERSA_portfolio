import { Code, Award, FileDown } from "lucide-react";

export const AboutMe = () => {
  return (
    <section
      id="About"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20"
    >
      {" "}
      <div className="container mx-auto max-w-5xl p-6">
        <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-8 md:mb-12 text-center ">
          About <span className="text-primary">Myself</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <div
            id="AboutMe"
            className="flex flex-col justify-center items-center text-center space-y-6 px-4 py-3 rounded-md"
          >
            <h3 className="text-xl md:text-2xl font-semibold">
              CS Engineer <span className="text-primary">| Developer</span>
            </h3>

            <p className="text-muted-foreground text-sm md:text-base">
              I am a Computer Science and Engineering graduate from{" "}
              <span className="font-bold">Vellore Institute of Technology</span>{" "}
              (8.58 CGPA) with a strong foundation in core CS fundamentals and
              software development. I am passionate about solving real-world
              problems and automating daily tasks through scripting.
            </p>

            <p className="text-muted-foreground text-sm md:text-base">
              I am a team-oriented professional who prioritizes continuous
              learning and precision. My goal is to drive business growth by
              delivering high-quality results that consistently meet SLAs and
              SLOs without compromise.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto py-2 px-2">
              <a href="#Contact" className="cosmic-button w-full">
                Connect With Me
              </a>
              <a
                href="/Resume4.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="view-resume-button rounded-full w-full border-2 border-primary text-primary font-semibold hover:bg-primary/20 ease-in-out font-medium tracking-wide"
              >
                View Resume <FileDown className="icon-sm" />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border px-6 py-4 card-hover">
              <div className="text-left">
                <h4 className="font-semibold text-base md:text-lg mb-2 flex items-center gap-2 text-primary">
                  <Code className="icon-md" />
                  What I Build With
                </h4>
                <p className="text-muted-foreground text-sm md:text-base">
                  I specialize in building secure and scalable applications
                  using Python, React, Node/Express, MySQL, and AWS Cloud. My
                  expertise extends to AI, REST APIs, Django, and PostgreSQL,
                  with additional proficiency in Oracle Cloud and databases.
                  <br />
                </p>
              </div>
            </div>
            <div className="gradient-border px-6 py-4 card-hover">
              <div className="text-left">
                <h4 className="font-semibold text-base md:text-lg mb-2 flex items-center gap-2 text-primary">
                  <Award className="icon-md" />
                  Certifications
                </h4>

                <div className="text-muted-foreground font-medium text-sm md:text-base">
                  <ul className="hollow-circle">
                    <li>
                      <a
                        href="https://www.credly.com/badges/e3bf58f5-7a58-4847-a234-fa6d2814fa61/linked_in_profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors duration-200 inline-flex items-center gap-1"
                      >
                        AWS Certified Cloud Practitioner
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=7712CB35AAD0B31FDE3154077E3F7D29EDAF1DA70C7F51969EE97CACF32A0C49"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        Oracle Generative AI Certified Professional
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=91CBB24852A192D2E793E6D8616BDF73D0BCF982B98FDFEAB8240C9DD25304E4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        Oracle Data Science Certified Professional
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=42B248756A96C0E862B8CA7AAB6BD7443E85CA8EF0C0CD29EC2CBBBCCA1996CD"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        Oracle AI Vector Search Certified Professional
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=0ED43A978E6DFC8DCA7115B8747740CCC3782EC6161B0BDF943E525CAD89FCA2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors inline-flex items-center gap-1"
                      >
                        Oracle Migration Architect Certified Professional
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
