import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import recos from "../data/recos";
import Tag from "../components/Tag";

export default function Detail() {
  const { id } = useParams();
  const genre = recos.find((g) => g.id === parseInt(id));

  if (!genre) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-4rem)] text-light">
        <p>Aucune reco trouvée 😢</p>
      </div>
    );
  }

  return (
    <motion.div
      className="px-8 py-16 flex flex-col md:flex-row gap-12 max-w-6xl mx-auto items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Pochette + lecteur */}
      <div className="flex-1 flex justify-center">
        <div className="bg-black/60 rounded-3xl p-6 shadow-xl w-[340px] md:w-[400px] text-center">
          {/* Pochette */}
          <img
            src={genre.track.coverDetail || genre.track.cover}
            alt={genre.track.title}
            className="rounded-2xl w-full h-[360px] object-cover mb-5 shadow-md"
          />

          {/* Titre & Artiste */}
          <h2 className="text-xl md:text-2xl font-extrabold text-light leading-snug mb-2">
            {genre.track.title}
          </h2>
          <p className="text-base text-light/80 mb-4">{genre.track.artist}</p>

          {/* Lecteur audio */}
          <audio controls className="w-full mt-1 mb-4">
            <source src={genre.track.audio} type="audio/mp3" />
          </audio>

          {/* Bouton Spotify */}
          <a
            href={genre.track.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#1DB954] text-white px-5 py-2.5 rounded-full font-semibold text-base hover:bg-[#1ed760] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.354 17.457a.733.733 0 0 1-.997.27c-2.73-1.672-6.175-2.052-10.217-1.13a.735.735 0 0 1-.324-1.436c4.38-.989 8.186-.56 11.208 1.296.344.211.452.66.27.997zm1.422-3.17a.917.917 0 0 1-1.246.338c-3.124-1.91-7.886-2.463-11.57-1.355a.92.92 0 0 1-.522-1.758c4.126-1.226 9.303-.615 12.851 1.526.436.266.575.834.338 1.25zm.123-3.334c-3.643-2.166-9.662-2.367-13.157-1.3a1.1 1.1 0 0 1-.63-2.1c3.978-1.19 10.562-.95 14.713 1.512a1.098 1.098 0 0 1-1.113 1.888z" />
            </svg>
            Voir sur Spotify
          </a>
        </div>
      </div>

      {/* Texte descriptif */}
      <div className="flex-1">
        <h2 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
          <span className="text-light">Genre choisi :</span>{" "}
          <span className="text-primary">{genre.name}</span>
        </h2>
        <h3 className="text-lg font-semibold opacity-70 mb-4">
          Présentation très poussée et intéressante
        </h3>
        <p className="text-light/80 leading-relaxed mb-6 bg-white/5 rounded-2xl p-6">
          {genre.description}
        </p>

       

        <div className="flex gap-4">
          <Link
            to="/choisir"
            className="bg-light text-dark px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-light transition"
          >
            Changer de genre
          </Link>
          <Link
            to="/"
            className="bg-transparent border border-light/50 px-4 py-2 rounded-lg font-semibold hover:border-primary transition"
          >
            Retour accueil
          </Link>
        </div>
      </div>
    </motion.div>
  );
}