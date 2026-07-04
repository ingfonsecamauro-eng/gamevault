const BASE_URL = "https://www.freetogame.com/api";

export async function getGames() {
  const response = await fetch(`${BASE_URL}/games`);

  if (!response.ok) {
    throw new Error("Failed to fetch games.");
  }

  const data = await response.json();

  return data.map((game: any) => ({
    id: game.id,
    title: game.title,
    image: game.thumbnail,
    rating: 4.5,
    releaseDate: game.release_date,
  }));
}