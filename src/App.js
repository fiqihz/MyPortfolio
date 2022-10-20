import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-poppin">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
