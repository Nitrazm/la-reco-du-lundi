import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const genres = [
  {
    id: 1,
    name: "Classique",
    artist: "En tant que pianiste reconnu, je me devais de te proposer du classique.",
    cover: "/assets/piano.jpg",
    color: "from-purple-700 to-indigo-900",
  },
  {
    id: 2,
    name: "Hip-Hop",
    artist: "En mode Old School aujourd'hui.",
    cover: "/assets/hiphop.jpg",
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: 3,
    name: "Tech-House",
    artist: "Genre très sous-coté à mon goût.",
    cover: "/assets/cover3.jpg",
    color: "from-red-600 to-pink-700",
  },
  {
    id: 4,
    name: "Mystère",
    artist: "Mystère et boule de gomme.",
    cover: "/assets/cover4.jpg",
    color: "from-gray-600 to-black",
  },
];

export default function Choose() {
  return (
    <motion.div
      className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-dark px-6 py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-extrabold mb-10 text-light">
        Choisis ton ambiance musicale
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {genres.map((genre, i) => (
          <motion.div
            key={genre.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-2xl overflow-hidden shadow-xl bg-dark/70 backdrop-blur-md p-5 border border-white/5 transition-all hover:shadow-2xl hover:bg-dark/90"
          >
            <div className="flex flex-col items-center">
              <div className="relative w-56 h-56 rounded-xl overflow-hidden shadow-lg mb-5 bg-black flex items-center justify-center">
                {genre.name === "Mystère" ? (
                  <span className="text-7xl text-light font-extrabold">?</span>
                ) : (
                  <>
                    <img
                      src={genre.cover}
                      alt={genre.name}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-12 h-12 text-white"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </>
                )}
              </div>

              <div className="w-full text-center bg-black/30 rounded-xl p-4 backdrop-blur-sm border border-white/5">
                <h3 className="text-2xl font-bold text-light mb-1">{genre.name}</h3>
                <p className="text-sm text-light/70">{genre.artist}</p>
              </div>

              <Link
                to={`/detail/${genre.id}`}
                className="mt-4 bg-light text-dark font-semibold px-4 py-2 rounded-full hover:bg-primary hover:text-light transition"
              >
                Voir les détails
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}