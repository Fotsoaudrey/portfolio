import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",   // Remplace par ton Service ID
        "YOUR_TEMPLATE_ID",  // Remplace par ton Template ID
        formRef.current,
        "YOUR_PUBLIC_KEY"    // Remplace par ta Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Message envoyé avec succès !");
          formRef.current?.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Une erreur est survenue. Réessaie plus tard.");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white py-20 px-6 flex flex-col justify-center items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Me <span className="text-blue-500">Contacter</span>
      </h2>

      <p className="text-gray-400 text-center mb-6 max-w-xl">
        Remplis le formulaire ci-dessous et je te répondrai dès que possible.
      </p>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="
          w-full max-w-xl 
          bg-gray-800/40 backdrop-blur-xl 
          p-10 rounded-2xl shadow-xl border border-gray-700/50
          shadow-blue-500/10
        "
      >
        {/* Nom */}
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            placeholder="Ton nom"
            required
            className="
              w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 
              text-white placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              transition
            "
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            placeholder="tonemail@example.com"
            required
            className="
              w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 
              text-white placeholder-gray-500
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              transition
            "
          />
        </div>

        {/* Message */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Écris ton message ici..."
            required
            className="
              w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 
              text-white placeholder-gray-500 resize-none
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              transition
            "
          />
        </div>

        <button
          type="submit"
          className="
            w-full bg-blue-600 hover:bg-blue-700 
            text-white font-bold py-3 px-6 rounded-lg text-lg transition
            transform hover:scale-105 shadow-lg shadow-blue-500/20
          "
        >
          Envoyer
        </button>

        {successMessage && (
          <p className="mt-4 text-center text-green-400 font-medium">
            {successMessage}
          </p>
        )}
      </form>
    </section>
  );
}
