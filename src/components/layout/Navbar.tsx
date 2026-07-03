import { useState } from "react";

type NavbarProps = {
  logoText?: string;
  favoritesLabel?: string;
  onSearch?: (query: string) => void;
  onFavoritesClick?: () => void;
};

function Navbar({
  logoText = "GameVault",
  favoritesLabel = "Favorites",
  onSearch,
  onFavoritesClick,
}: NavbarProps) {
  const [query, setQuery] = useState("");

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  onSearch?.(query.trim());
};

  return (
    <header className="w-full bg-slate-950 text-slate-100 shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500 text-xl">
        🎮</div>
          <span className="text-lg font-semibold">{logoText}</span>
        </div>

        <form
          onSubmit={handleSubmit}
          className="order-3 sm:order-2 sm:flex-1"
          aria-label="Search games"
        >
          <label className="sr-only">Search games</label>
          <div className="flex w-full items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-3 py-2 shadow-inner focus-within:border-blue-500">
            <input
              type="text"
              value={query}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(event.target.value)
            }
              placeholder="Search games..."
              className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="rounded-full bg-blue-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-400"
            >
              Search
            </button>
          </div>
        </form>

        <button
          type="button"
          onClick={onFavoritesClick}
          className="order-2 rounded-full bg-slate-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700 sm:order-3"
        >
          {favoritesLabel}
        </button>
      </div>
    </header>
  );
}

export default Navbar;