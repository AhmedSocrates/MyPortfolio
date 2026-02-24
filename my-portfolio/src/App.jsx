import "./styles/global.css";
import Home from "./components/Home";
import Services from "./components/Services";

function App() {
  return (
    <>
      {/* ADDED: w-full and overflow-x-hidden */}
       <main className="w-full h-screen overflow-x-hidden overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-slate-950">
        <Home />
        <Services />
      </main>
    </>
  );
}

export default App;