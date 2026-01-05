export default function MusicPlayer({ track }) {
  if (!track) return null;

  return (
    <div className="bg-primary/10 rounded-xl p-4 flex flex-col items-center shadow-lg">
      <img
        src={track.cover}
        alt={track.title}
        className="rounded-lg w-48 h-48 object-cover"
      />
      <h2 className="font-semibold mt-3 text-lg">{track.title}</h2>
      <p className="text-sm opacity-80">{track.artist}</p>
      <audio controls className="w-full mt-3">
        <source src={track.audio} type="audio/mp3" />
      </audio>
      <a
        href={track.link}
        target="_blank"
        className="mt-3 bg-light text-dark px-4 py-2 rounded-lg font-semibold hover:bg-primary hover:text-light transition"
      >
        Ajouter sur Deezer
      </a>
    </div>
  );
}