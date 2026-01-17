import { useParams, Link } from "react-router-dom";
import weeks from "../data/weeksList.js";

export default function Week() {
  const { id } = useParams();
  const week = weeks.find((w) => w.id === parseInt(id));

  if (!week)
    return (
      <div className="text-center p-10 text-light text-2xl">
        Semaine introuvable 😢
      </div>
    );

  return (
    <div className="px-8 py-16 max-w-6xl mx-auto text-light">
      <h2 className="text-4xl font-extrabold mb-10">{week.title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {week.recos.map((genre) => (
          <div
            key={genre.id}
            className="bg-black/60 rounded-2xl p-5 shadow-lg flex flex-col items-center text-center hover:bg-black/80 transition"
          >
            <img
              src={genre.track.coverDetail || genre.track.cover}
              alt={genre.track.title}
              className="rounded-xl w-64 h-64 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold mb-2">{genre.track.title}</h3>
            <p className="text-base opacity-80 mb-1">{genre.track.artist}</p>
            <p className="text-sm opacity-70 mb-4 px-4">
              {genre.track.description || genre.description}
            </p>
            <audio controls className="w-full mb-4">
              <source src={genre.track.audio} type="audio/mp3" />
            </audio>
            {genre.track.spotify && (
              <a
                href={genre.track.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1DB954] text-white px-4 py-2 rounded-full font-semibold hover:bg-[#1ed760] transition"
              >
                Voir sur Spotify
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/historique"
          className="bg-light text-dark px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-light transition"
        >
          ← Retour à l’historique
        </Link>
      </div>
    </div>
  );
}