import Image from "next/image";
import Project from "./project";
import About from "./about";
import Contact from "./contact";
import Navbar from "./navbar";

export default function Home() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/coffee_banner.jpg)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hi! I'm Anjaraniaina</h1>
            <p className="mb-5 text-3xl">
              I'm excited to work with you.
            </p>
    </div>
  </div>
</div>
    <About></About>
    <Project></Project>
    <Contact></Contact>
    </main>
  );
}
