import type { Game } from "../types/game";
import { useEffect, useState } from "react";
import { getGames } from "../services/gameService";

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGames() {
      setLoading(true);
      setError(null);

      try {
        const data = await getGames();
        setGames(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    }

    fetchGames();
  }, []);

  return {
    games,
    loading,
    error,
  };
}