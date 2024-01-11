import About from "./components/about";
import Header from "./components/header";
import LandingUI from "./components/landingUI";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="mainWrapper min-h-screen scroll-smooth">
      <Header />
      <LandingUI />
      <About />
      <Projects />
    </main>
  );
}
