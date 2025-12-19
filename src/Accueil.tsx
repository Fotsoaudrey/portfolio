import { useState, useEffect } from "react";
import photo from "./assets/photo.jpg";

export default function Accueil() {
  const titles = ["Développeur Web ", "Développeur Mobile "];
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(titles[index].slice(0, i));
      i++;
      if (i > titles[index].length) {
        clearInterval(interval);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % titles.length);
          setDisplayText("");
        }, 1500);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      id="accueil"
      className="
        min-h-screen 
        flex flex-col md:flex-row 
        items-center justify-center 
        bg-gray-900 
        px-6 pt-24 md:pt-0
      "
    >
      {/* Texte à gauche */}
      <div className="md:w-152 w-full text-left space-y-6">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
          Bonjour, je suis <br />
          <span className="text-blue-500 text-3xl md:text-4xl">
            FOTSO NOUMSI CARELLE AUDREY
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 h-10">
          {displayText}
          <span className="animate-pulse">|</span>
        </h2>

        <p className="text-gray-400 max-w-md">
          Développeur passionné, créatif et motivé. 
          Je transforme des idées en projets modernes, élégants et performants.
        </p>

        <a
          href="/audrey.pdf"
          download="CV_FOTSO_CARELLE.pdf"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-white font-medium shadow-lg shadow-blue-600/30 transition-all"
        >
          Télécharger CV
        </a>

      </div>

      {/* Photo à droite */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <div className="relative w-52 h-52 md:w-110 md:h-110">
          <div className="absolute inset-0 rounded-full bg-blue-600 blur-3xl opacity-20 animate-pulse"></div>

          <img
            src={photo}
            alt="Moi"
            className="w-full h-full rounded-full object-cover border-4 border-gray-700 shadow-[0_0_40px_#1d4ed8]"
          />
        </div>
      </div>
    </section>
  );
}
