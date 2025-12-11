export default function Apropos() {
  return (
    <section
      id="apropos"
      className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-15 md:py-5
                 flex flex-col justify-center items-center text-center"
    >

      <div className="max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          À propos de <span className="text-blue-500">moi</span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
          Je suis <span className="text-blue-400 font-semibold">FOTSO NOUMSI CARELLE AUDREY</span>, 
          étudiante en 3ᵉ année de licence en Génie Logiciel à l’Institut Universitaire des technologie de Douala, titulaire d’un BTS
          en Génie Logiciel obtenu à l’Institut Supérieur de Management et de l’Entrepreneuriat. Passionnée par le
          <span className="text-blue-300"> développement web</span>, l’
          <span className="text-blue-300"> intelligence artificielle</span> et l' 
          <span className="text-blue-300"> analyse de données </span>
          je m’épanouis dans la création de solutions innovantes et modernes. Curieuse et persévérante, 
          j’aime apprendre, expérimenter et transformer des idées en projets concrets, élégants et impactants.
        </p>

        {/* Ligne décorative */}
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-10 mb-12 rounded-full"></div>

        {/* Bouton */}
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl 
                     text-lg font-medium transition-all shadow-lg hover:shadow-blue-600/40"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
