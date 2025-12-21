import { NavBar } from "./NavBar";
import { ScrollProgress } from "./ScrollProgress";

export const NavBarWithProgress = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-40 flex flex-col">
      <NavBar />
      <div className="relative w-full">
        <ScrollProgress />
      </div>
    </div>
  );
};
