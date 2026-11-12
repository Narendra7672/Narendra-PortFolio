import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Writing from "./components/Writing";
import Speaking from "./components/Speaking";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <Writing />
      <Projects />

      <Speaking />

      <About />

      <Newsletter />

<Footer />
    </>
  );
}

export default App;