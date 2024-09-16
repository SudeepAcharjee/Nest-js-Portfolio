"use client"
import { useEffect } from "react";
import { HoverEffect } from "../../../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Languages :",
    description: "JavaScript,C++,Python,C Language ,TypeScript, SQL",
  },
  {
    title: "Frontend Technology :",
    description: " Next-JS, HTML, CSS, ReactJS, Tailwind CSS",
  },
  {
    title: "Libraries / Frameworks :",
    description: "Bootstrap, MUI, AceternityUI, NextUI, Framer Motion",
  },
  {
    title: "Backend Technology :",
    description: "NodeJS, ExpressJS, MongoDB, REST API, SQL, APPWRITE, Next-Auth",
  },
  {
    title: "Other Tools / Techonolgy",
    description: "Git, GitHUB, VS Code, Vercel, Netlify,SQLite, Work bench, Docker",
  },
];
