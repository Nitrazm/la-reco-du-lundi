import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navClass =
    "text-sm font-semibold px-3 py-2 rounded-xl transition-colors duration-200";
  const activeClass =
    "bg-primary text-dark";
  const inactiveClass =
    "text-light hover:text-primary";

  return (
    <nav className="w-full bg-black/90 text-light flex items-center justify-between px-8 py-3 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-primary" />
        <h1 className="font-bold text-base">
          La reco du lundi
        </h1>
        <p className="text-xs opacity-60 hidden sm:block">
          Non c'est pas pour te draguer
        </p>
      </div>
      <div className="flex gap-2">
        {["/", "/choisir", "/detail/1", "/historique"].map((path, i) => {
          const labels = ["Accueil", "Choisir", "Détail", "Historique"];
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `${navClass} ${isActive ? activeClass : inactiveClass}`
              }
            >
              {labels[i]}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}