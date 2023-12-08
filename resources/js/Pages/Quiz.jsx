import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import Quiz from '@/Components/Quiz';
import NavBar from '@/Components/NavBar';

function EnhancedNavbar({ auth }) {
  const { route } = usePage();

  return (
    <>
    <div>
    
      <NavBar />
      <style>
        {`
          body {
            background-color: #a8d5ba; /* Couleur pastel-green */
          }
        `}
      </style>
      <Quiz />
      </div>
    </>
  );
}

export default EnhancedNavbar;
