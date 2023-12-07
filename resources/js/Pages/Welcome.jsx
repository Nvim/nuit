import React from 'react';
import { Link } from '@inertiajs/react'; // Si vous utilisez Inertia.js pour la navigation
import NavBar from '@/Components/NavBar';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto mt-8">
        {/* Espace pour le chatbot */}
        <div className="mb-8">
          {/* Insérez votre composant de chatbot ici */}
          {/* Exemple : */}
          <h2>Chatbot Section</h2>
          <p>Ce serait l'espace pour le chatbot.</p>
        </div>

        {/* Bouton pour accéder au quiz */}
        <Link href="/quiz">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Quiz
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
