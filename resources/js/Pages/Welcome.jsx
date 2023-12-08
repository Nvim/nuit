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
        

        {/* Bouton pour accéder au quiz */}
        <Link href="/bot">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Discuter environnement avec EcoloGPT ! &#129302;
          </button>
        </Link>
        <br />
        <br />
        <Link href="/simulateur">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Utilisez notre super simulateur d'empreinte carbone &#128640;
          </button>
        </Link>
        <br />
        <br />
        <Link href="/giec">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            C'est quoi le GIEC ? &#129299;
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;

