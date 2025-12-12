//import { useState } from 'react'
//import reactLogo from './assets/react.svg' 
//import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import Accueil from './Accueil'
import Apropos from './Apropos'
import Competence from './Competence'
import Mesprojet from './Mesprojet'
import Contact from './Contact'
function App() {
  return (
    <div className="">
    <>
      <Navbar />
      <Accueil/>
      <Apropos/>
      <Competence/>
      <Mesprojet/>
      <Contact/>

      <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    
    {/* Logo ou nom */}
    <div className="mb-4 md:mb-0">
      <h1 className="text-2xl font-bold text-blue-500">MonSite</h1>
    </div>

    {/* Liens rapides */}
    <div className="flex space-x-6 mb-4 md:mb-0">
      <a href="#accueil" className="hover:text-blue-500 transition">Accueil</a>
      <a href="#apropos" className="hover:text-blue-500 transition">À propos</a>
      <a href="#projets" className="hover:text-blue-500 transition">Projets</a>
      <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
    </div>
  </div>

  <div className="text-center mt-6 text-gray-400 text-sm">
    &copy; {new Date().getFullYear()} MonSite. Tous droits réservés.
  </div>
</footer>


    </>
    </div>
  )
}

export default App
 