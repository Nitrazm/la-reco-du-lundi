import { motion } from "framer-motion";

export default function History() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] text-center text-light"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <span className="text-6xl mb-4">🚧</span>
      <h1 className="text-3xl font-bold">En travaux...</h1>
      <p className="opacity-70 mt-2">Cette section arrive bientôt 🎧</p>
    </motion.div>
  );
}