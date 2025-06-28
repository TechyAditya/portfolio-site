import type { Route } from "./+types/home";
import Portfolio from "../components/portfolio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Aditya Sethi - Portfolio" },
    { name: "description", content: "Full Stack Developer & Computer Science Engineer passionate about creating innovative solutions with modern technologies." },
  ];
}

export default function Home() {
  return <Portfolio />;
}
