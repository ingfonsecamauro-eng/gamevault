type GameCardProps = {
  title: string;
  image: string;
  rating: number;
  releaseDate: string;
};

export default function GameCard({
  title,
  image,
  rating,
  releaseDate,
}: GameCardProps) {
  const safeRating = Number.isFinite(rating) ? Math.max(0, Math.min(5, rating)) : 0;
  const fullStars = Math.round(safeRating);
  return (
    <article className="group w-full max-w-sm bg-gradient-to-b from-slate-900 via-slate-950 to-black rounded-3xl overflow-hidden border border-slate-800 shadow-[0_12px_30px_rgba(2,6,23,0.7)] transition-transform duration-300 transform hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl">
      <div className="w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 sm:h-72 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="px-5 py-4 sm:px-6 sm:py-5">
        <h3 className="text-base sm:text-lg font-semibold text-white truncate">
          {title}
        </h3>

        <p className="mt-1 text-sm text-slate-400">{releaseDate}</p>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                viewBox="0 0 20 20"
                fill={i < fullStars ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth={i < fullStars ? 0 : 1.25}
                className={`h-4 w-4 ${
                  i < fullStars ? "text-amber-400" : "text-slate-700"
                } transition-colors duration-200`}
                aria-hidden="true"
              >
                <path d="M10 1.5l2.6 5.27 5.82.84-4.21 4.11.99 5.8L10 15.77l-5.2 2.72.99-5.8L1.59 7.61l5.82-.84L10 1.5z" />
              </svg>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/60 px-3 py-1 text-xs font-semibold text-slate-200">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4 text-amber-400"
              aria-hidden="true"
            >
              <path d="M10 1.5l2.6 5.27 5.82.84-4.21 4.11.99 5.8L10 15.77l-5.2 2.72.99-5.8L1.59 7.61l5.82-.84L10 1.5z" />
            </svg>
            <span>{safeRating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </article>
  );
}