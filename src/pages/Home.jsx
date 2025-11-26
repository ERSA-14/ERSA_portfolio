
import { StarBackground } from "../components/StarBackground"
import { NavBar } from "../components/NavBar"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">

            {/* BG Effects */}
            <StarBackground />

            {/* Navbar */}
            <NavBar />

            {/* Main Content */}
            <main className="flex-grow container mx-auto px-4 pt-24">
                {/* Content will go here */}
            </main>

            {/* Footer */}

        </div>
    )
}