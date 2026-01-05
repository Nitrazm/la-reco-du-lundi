import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <motion.div
      className="relative flex flex-col items-center justify-center text-center h-[calc(100vh-4rem)] px-6 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Image de fond floutée */}
      <img
        src="/assets/gatew.JPG"
        alt="Fond d'accueil"
        className="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-75 scale-105"
      />

      {/* Contenu au-dessus */}
      <div className="relative z-10 bg-black/70 p-10 rounded-2xl backdrop-blur-sm max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          La reco du lundi <span className="text-primary">est là !</span>
        </h1>
        <p className="text-lg opacity-80 mb-8">
          Tu l’attendais, il est là, le nouveau format des recos du lundi.
          Révolutionnaire ! Régalons-nous — j’ai bossé très dur pour que ce
          merveilleux site voie le jour.
        </p>
        <Link
          to="/choisir"
          className="bg-light text-dark px-6 py-3 rounded-full font-semibold hover:bg-primary hover:text-light transition"
        >
          Choisir une reco
        </Link>
      </div>
    </motion.div>
  );
}