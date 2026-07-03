export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#030307] via-[#070712] to-[#000000] text-white">
      <div className="absolute inset-0 -skew-y-2 transform-gpu bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#0f172a]/30 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 md:py-32 lg:py-40">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-500 to-amber-400 drop-shadow-[0_8px_32px_rgba(99,102,241,0.18)]">
                Discover Your Next
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-400">
                Favorite Game
              </span>
            </h1>

            <p className="mt-5 text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl">
              Browse thousands of games across genres, platforms, and eras—find
              reviews, trending picks, and hidden gems curated for avid gamers.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href="#explore"
                aria-label="Explore Games"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold shadow-lg hover:scale-[1.02] transform transition duration-200 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-500/40"
              >
                Explore Games
              </a>

              <a
                href="#trending"
                aria-label="Trending games"
                className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-indigo-700 text-indigo-200 bg-black/30 backdrop-blur-sm hover:bg-black/40 transition duration-200 font-medium focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/30"
              >
                Trending
              </a>
            </div>

            <ul className="mt-6 flex flex-wrap gap-3 text-sm text-gray-400">
              <li className="px-3 py-1 bg-white/3 rounded-md">Cross-platform</li>
              <li className="px-3 py-1 bg-white/3 rounded-md">Curated Lists</li>
              <li className="px-3 py-1 bg-white/3 rounded-md">User Reviews</li>
            </ul>
          </div>

          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl bg-gradient-to-tr from-[#0b1020] to-[#050509] border border-white/6 p-6 shadow-[0_20px_60px_rgba(99,102,241,0.08)]">
              <div className="absolute inset-0 rounded-2xl -z-10 blur-3xl opacity-60 bg-gradient-to-br from-indigo-600 to-fuchsia-500/60 mix-blend-screen" />
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                aria-hidden
              >
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0" stopColor="#7c3aed" />
                    <stop offset="1" stopColor="#ec4899" />
                  </linearGradient>
                </defs>

                <rect
                  x="2"
                  y="16"
                  width="60"
                  height="32"
                  rx="6"
                  stroke="url(#g1)"
                  strokeWidth="1.5"
                  opacity="0.18"
                />
                <g transform="translate(8,20)" stroke="url(#g1)" strokeWidth="1.6">
                  <circle cx="12" cy="10" r="6" fill="rgba(124,58,237,0.06)" />
                  <path d="M36 6h6v8h-6z" fill="rgba(236,72,153,0.06)" />
                </g>

                <g transform="translate(16,30)">
                  <circle cx="4" cy="2" r="1.6" fill="#a78bfa" />
                  <circle cx="8" cy="2" r="1.6" fill="#f472b6" />
                  <circle cx="12" cy="2" r="1.6" fill="#60a5fa" />
                </g>

                <path
                  d="M22 38c3-4 8-4 11 0"
                  stroke="#94a3b8"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              </svg>

              <div className="absolute left-4 bottom-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/6 border border-white/8 text-white/90">
                New Releases
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}