import React from 'react';
import { Link } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';

const Home = () => {
  return (
    <>
      <NavBar />
      <style>
        {`
          body {
            background-color: #a8d5ba; /* Couleur pastel-green */
          }
        `}
      </style>
      <div className="container mx-auto mt-8">
        {/* Section du chatbot */}
        <div className="mb-8">
          <h2>Chatbot Section</h2>
          <p>Ici se trouverait le chatbot.</p>
          {/* Insérez votre composant de chatbot ici */}
          {/* Exemple : */}
          {/* <Chatbot /> */}
        </div>

        {/* Bouton pour accéder au quiz */}
        <Link href="/quiz">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Quiz
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;

