import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    // If this main tag is missing h-screen, everything disappears
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-slate-950">
      <Home />
      <Services />
    </main>
  );
}

export default App;