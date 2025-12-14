import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 text-center">
      <h1 className="text-9xl font-black text-primary text-glow mb-4">404</h1>
      <h2 className="text-3xl font-bold mb-4">Lost in Space ?</h2>
      <p className="text-muted-foreground mb-8 text-lg max-w-md">
        The page you are looking for seems to have drifted into a black hole.
        <br />
        Let's chart you back on main course.
      </p>
      <Link to="/" className="cosmic-button inline-flex items-center gap-2">
        <MoveLeft size={20} />
        Return Home
      </Link>
    </div>
  );
};
