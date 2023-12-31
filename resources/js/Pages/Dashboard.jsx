import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import NavBar from '@/Components/NavBar';
import { Link } from '@inertiajs/react'; // Assurez-vous d'importer le composant Link depuis le bon emplacement

export default function Dashboard({ auth }) {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head>
        <title>Dashboard</title>
      </Head>

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
        <br />
        <br />
        <Link href="/chatbot">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Chatbot
          </button>
        </Link>
      </div>
    </AuthenticatedLayout>
  );
}
