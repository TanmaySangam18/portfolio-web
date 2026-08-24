import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import NowStrip from "./components/NowStrip";
import About from "./components/About";

import Products from "./components/Products";
import DesignPhilosophy from "./components/DesignPhilosophy";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Writing from "./components/Writing";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <NowStrip />
        <About />
<Products />
        <DesignPhilosophy />
        <Skills />
        <Experience />
        <Writing />
        <Contact />
      </main>
      <footer
        style={{
          padding: "1.5rem 2rem",
          borderTop: "1px solid #e5e5e5",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "0.65rem",
          fontWeight: 600,
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#999",
        }}
      >
        <span>© 2026 Tanmay Sangam</span>
        <span>Product Design · Engineering · Product Management</span>
      </footer>
    </>
  );
}
