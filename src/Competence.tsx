import photoSkills from "./assets/test.jpg";

export default function Competence() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS / Tailwind", level: 85 },
    { name: "PHP", level: 60 },
    { name: "JavaScript", level: 40 },
    { name: "React", level: 30 },
    { name: "Python", level: 20 },
  ];

  return (
    <section
      id="competence"
      className="min-h-screen bg-gray-900 text-white px-6 md:px-20 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
        Mes <span className="text-blue-500">Compétences</span>
      </h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14">
        
        {/* Barres de compétences */}
        <div className="md:w-1/2 w-full space-y-8">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between mb-2">
                <span className="text-lg font-medium text-gray-300">
                  {skill.name}
                </span>
                <span className="text-lg font-medium text-blue-400">
                  {skill.level}%
                </span>
              </div>

              {/* Barre animée */}
              <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden border border-gray-700">
                <div
                  className="h-4 bg-blue-600 rounded-full shadow-lg shadow-blue-600/40 transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Image modernisée */}
        <div className="md:w-1/2 flex justify-center relative">
          {/* Halo lumineux */}
          <div className="absolute w-72 h-72 bg-blue-600 blur-3xl opacity-20 rounded-full animate-pulse"></div>

          <img
            src={photoSkills}
            alt="Compétences"
            className="relative rounded-3xl w-110 h-110 object-cover shadow-2xl border border-gray-700 hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
