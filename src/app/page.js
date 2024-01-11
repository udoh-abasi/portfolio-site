import About from "./components/about";
import Header from "./components/header";
import LandingUI from "./components/landingUI";

export default function Home() {
  return (
    <main className="mainWrapper min-h-screen h-[1700px] scroll-smooth">
      <Header />
      <LandingUI />
      <About />
    </main>
  );
}
