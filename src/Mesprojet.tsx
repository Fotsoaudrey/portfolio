export default function Projets() {
  return (
    <section
      id="projets"
      className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
        Mes <span className="text-blue-500">Projets</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* --- PROJET 1 --- */}
        <a
          href="https://projet1-en-ligne.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/30 transition-all duration-500">
            <img
              src="/assets/projet1.jpg"
              alt="Projet 1"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition">
                Projet 1
              </h3>
              <p className="text-gray-400">
                Site web d'un hotel.
              </p>
            </div>
          </div>
        </a>

        {/* --- PROJET 2 --- */}
        <a
          href="https://projet2-en-ligne.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/30 transition-all duration-500">
            <img
              src="/assets/projet2.jpg"
              alt="Projet 2"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition">
                Projet 2
              </h3>
              <p className="text-gray-400">
                Site Web d'un Restaurant
              </p>
            </div>
          </div>
        </a>

        {/* --- PROJET 3 --- 
        <a
          href="https://projet3-en-ligne.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/30 transition-all duration-500">
            <img
              src="/assets/projet3.jpg"
              alt="Projet 3"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition">
                Projet 3
              </h3>
              <p className="text-gray-400">
                Formulaire
              </p>
            </div>
          </div>
        </a>
         */}

        {/* --- PROJET 4 --- 
        <a
          href="https://projet4-en-ligne.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <div className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden shadow-lg shadow-blue-500/10 group-hover:shadow-blue-500/30 transition-all duration-500">
            <img
              src="/assets/projet4.jpg"
              alt="Projet 4"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="p-5">
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition">
                Projet 4
              </h3>
              <p className="text-gray-400">
                Formulaire
              </p>
            </div>
          </div>
        </a>*/}
      </div>
    </section>
  );
}
