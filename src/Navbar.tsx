import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // fonction pour fermer le menu mobile
  const handleCloseMenu = () => setOpen(false);

  return (
    <nav className="bg-gray-900 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <h1 className="text-2xl font-bold text-blue-500">MonPortfolio</h1>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-8 text-gray-200 font-medium">
            <li>
              <a href="#accueil" className="hover:text-blue-500 transition-colors">Accueil</a>
            </li>
            <li>
              <a href="#apropos" className="hover:text-blue-500 transition-colors">À propos</a>
            </li>
            <li>
              <a href="#competence" className="hover:text-blue-500 transition-colors">Compétences</a>
            </li>
            <li>
              <a href="#projets" className="hover:text-blue-500 transition-colors">Projets</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-500 transition-colors">Contact</a>
            </li>
          </ul>

          {/* Hamburger Mobile */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            <div className="space-y-1.5">
              <span className="block w-6 h-0.5 bg-gray-200"></span>
              <span className="block w-6 h-0.5 bg-gray-200"></span>
              <span className="block w-6 h-0.5 bg-gray-200"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {open && (
        <ul className="md:hidden bg-gray-800 px-4 pb-4 space-y-2 shadow-md text-gray-200 font-medium rounded-b-lg">
          <li>
            <a href="#accueil" onClick={handleCloseMenu} className="block py-2 px-3 hover:text-blue-500 transition-colors rounded">
              Accueil
            </a>
          </li>
          <li>
            <a href="#apropos" onClick={handleCloseMenu} className="block py-2 px-3 hover:text-blue-500 transition-colors rounded">
              À propos
            </a>
          </li>
          <li>
            <a href="#competence" onClick={handleCloseMenu} className="block py-2 px-3 hover:text-blue-500 transition-colors rounded">
              Compétences
            </a>
          </li>
          <li>
            <a href="#projets" onClick={handleCloseMenu} className="block py-2 px-3 hover:text-blue-500 transition-colors rounded">
              Projets
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleCloseMenu} className="block py-2 px-3 hover:text-blue-500 transition-colors rounded">
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
