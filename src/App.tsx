import Navbar from "./components/layout/Navbar";
import Hero from "./components/common/Hero";
import GameGrid from "./components/game/GameGrid";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <GameGrid />
    </div>
  );
}

export default App;