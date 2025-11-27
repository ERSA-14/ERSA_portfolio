export const AboutMe = () => {
    return (
        <section id="About" className="relative px-4 py-24">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">
                        Me
                    </span>

                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div id="AboutMe" className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            passionate web developer
                        </h3>

                        <p className="text-muted-foreground">
                            Studied at vit college 
                        </p>

                        <p className="text-muted-foreground">
                            did scored 8.58
                        </p>

                    </div>

                    <div id="skills">

                    </div>

                </div>
            </div>

        </section>
    );
};