import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import Contact from "./components/Contact";

// icons
import Rocket from "../src/components/icons/Rocket";
import ThunderboltFill from "../src/components/icons/Thunder";
import Mobile from "./components/icons/Phone";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <section className="flex justify-center px-24 py-20 gap-6 max-md:flex-col max-md:items-center max-md:justify-center max-md:px-10">
        <Card icon={<Rocket />} />
        <Card icon={<ThunderboltFill />} />
        <Card icon={<Mobile />} />
      </section>
      <Contact />
    </>
  );
}

export default App;
