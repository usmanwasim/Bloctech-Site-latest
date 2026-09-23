import Navbar from "./Navbar";
import Hero from "./Hero";
import BuildGrid from "./BuildGrid";
import Process from "./Process";
import WorkWithUs from "./WorkWithUs";
import BuildLast from "./BuildLast";
import Testimonials from "./Testimonials";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-linear-to-r from-black via-[#0d0f1c] to-black">
      <Navbar />
      <main>
        <Hero />
        <BuildGrid />
        <Process />
        <WorkWithUs />
        <BuildLast />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
