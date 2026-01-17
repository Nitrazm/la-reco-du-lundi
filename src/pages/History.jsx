import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import weeks from "../data/weeksList.js";

export default function History() {
  console.log("Weeks list:", weeks);
  return (
    <motion.div
      className="px-8 py-16 max-w-4xl mx-auto text-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-extrabold mb-10">Historique des recos</h2>

      <ul className="space-y-4">
        {weeks.map((week) => (
          <li
            key={week.id}
            className="flex justify-between items-center bg-black/40 p-4 rounded-xl border border-white/10 hover:border-primary transition"
          >
            <span className="font-semibold">{week.title}</span>
            <Link
              to={`/semaine/${week.id}`}
              className="text-primary hover:underline font-medium"
            >
              Voir la semaine →
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}