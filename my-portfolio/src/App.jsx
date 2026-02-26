import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#020817" }}>
        <Home />
        <Services />
        <Journey />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;