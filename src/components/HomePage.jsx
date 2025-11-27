import { ArrowDown } from "lucide-react"

export const HomePage = () => {
    return (
        <section id="Home" className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                        <span className="opacity-0 animate-fade-in">Hello, I am</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">{" "}Saksham</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">{""}Gupta</span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        As an aspiring software and web architect, I engineer stellar digital solutions with the precision of orbital mechanics. I'm committed to launching efficient, high-quality applications that explore the frontiers of open-source technology.
                    </p>

                    <div className="opacity-0 animate-fade-in-delay-4">
                        <a href="#Projects" className="cosmic-button font-bold uppercase tracking-widest text-base md:text-lg">
                            View my Projects
                        </a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex item-center animate-bounce">
                <ArrowDown className="h-5 w-5 text-primary animate-bounce" />
            </div>
        </section>
    )
}