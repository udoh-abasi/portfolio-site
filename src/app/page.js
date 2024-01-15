import About from "./components/about";
import Certifications from "./components/certifications";
import Header from "./components/header";
import LandingUI from "./components/landingUI";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
  return (
    <main className="mainWrapper">
      <Header />
      <LandingUI />
      <About />
      <Projects />
      <Skills />
      <Certifications />
    </main>
  );
}
