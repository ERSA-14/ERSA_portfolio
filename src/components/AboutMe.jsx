export const AboutMe = () => {
    return (
        <section id="About" className="relative px-4 py-24">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">
                    Saksham 
                    </span>

                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div id="AboutMe" className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                        Reliable <span className="text-primary">Software Engineer</span>
                        </h3>

                        <p className="text-muted-foreground">
                        Computer Science graduate from Vellore Institute of Technology with a CGPA of 8.58, offering a strong foundation in core CS concepts and modern software development. I enjoy working close to real-world problems and care deeply about writing clear, maintainable, and purposeful code. 
                        </p>

                        <p className="text-muted-foreground">
                        Python and automation are at the center of how I think and build. I like turning repetitive or fragile workflows into reliable scripts and systems, and I'm constantly looking for opportunities to make tasks faster, safer, and more efficient.
                        </p>


                        <p className="text-muted-foreground">
                        I like sharing my knowledge and helping others while constantly trying to learn new skills.Long term, I aim to climb the corporate ladder into roles that combine technical depth with ownership and leadership. I want to contribute to teams where engineering excellence, automation-driven thinking, and continuous improvement directly move the business forward.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Connect With Me</a>
                            <a href="src\assets\Resume3.pdf" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary/15 transition-colors duration-300 hover:scale-105 ease-in-out">View Resume</a>
                        </div>

                    </div>
                    <div id="skills" className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <h1> </h1>   
                    </div>

                </div>
            </div>

        </section>
    );
};