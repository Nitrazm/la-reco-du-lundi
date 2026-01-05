import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function GenreCard({ genre, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-black/60 border border-primary/20 rounded-2xl p-4 flex flex-col items-center hover:border-primary transition relative overflow-hidden"
    >
      <p className="uppercase text-xs text-light/70 mb-2">Genre :</p>
      <h2 className="text-2xl font-bold text-primary">{genre.name}</h2>
      <p className="text-sm opacity-70 mt-1">{genre.description}</p>
      <Link
        to={`/detail/${genre.id}`}
        className="absolute inset-0"
        aria-label={genre.name}
      ></Link>
      <span className="text-6xl mt-6 opacity-50">?</span>
    </motion.div>
  );
}