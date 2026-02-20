import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-slate-950">
      <Home />
      <Services />
      <Projects />
      <About />
    </main>
  );
}

export default App;