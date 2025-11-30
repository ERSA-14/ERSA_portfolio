const projects = [
  {
    id: 1,
    title: "Secure Authentication System",
    description:
      "Full-stack authentication system built with Node.js, Express, and PostgreSQL. Implements user registration, login with bcrypt password hashing, session management, and server-side rendering using EJS templates.",
    image: "src/assets/ProjectSS/one.jpeg",
    tags: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "bcrypt",
      "EJS",
      "Session Management",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/ERSA-14/Authentication_frontend",
  },
  {
    id: 2,
    title: "Bill Receipt Automation",
    description:
      "Serverless bill receipt automation system using AWS Lambda functions written in Python. Automates invoice processing and receipt generation through event-driven cloud architecture.",
    image: "src/assets/ProjectSS/two.jpeg",
    tags: ["Python", "AWS Lambda", "Serverless", "Event-driven", "Automation"],
    demoUrl: "",
    githubUrl: "https://github.com/ERSA-14/AWS-lambda",
  },
  {
    id: 3,
    title: "Indian States Geography Quiz",
    description:
      "Interactive geography quiz game built with Python using Tkinter for GUI and Turtle graphics for map visualization. Features state name recognition and score tracking for Indian states.",
    image: "src/assets/ProjectSS/three.jpeg",
    tags: ["Python", "Tkinter", "Turtle Graphics", "GUI"],
    demoUrl: "",
    githubUrl: "https://github.com/ERSA-14/indian_states_trivia",
  },
];

export const Project = () => {
  return (
    <section>
      <h2>Project</h2>
    </section>
  );
};
