import GameCard from "./GameCard";
import { useGames } from "../../hooks/useGames";

export default function GameGrid() {
  const { games, loading, error } = useGames();

  if (loading) {
    return (
      <section className="py-8 px-4 bg-gradient-to-b from-slate-900 via-black to-slate-950 text-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
            Trending Games
          </h2>
          <p>Loading games...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-8 px-4 bg-gradient-to-b from-slate-900 via-black to-slate-950 text-slate-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
            Trending Games
          </h2>
          <p>{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 px-4 bg-gradient-to-b from-slate-900 via-black to-slate-950 text-slate-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
          Trending Games
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.slice(0, 8).map((game) => (
            <GameCard
              key={game.id}
              title={game.title}
              image={game.image}
              rating={game.rating}
              releaseDate={game.releaseDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}