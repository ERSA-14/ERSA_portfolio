import { StarBackground } from "../components/StarBackground";
import { NavBar } from "../components/NavBar";
import { HomePage } from "../components/HomePage";
import { AboutMe } from "../components/AboutMe";
import { Skills } from "../components/Skills";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <StarBackground />

      <NavBar />

      <main className="flex-grow container mx-auto px-4 pt-24">
        <HomePage />
        <AboutMe />
        <Skills />
      </main>
    </div>
  );
};
