import React, { useState } from 'react';

const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    let newScore = 0;
    // Logique pour calculer le score...
    setScore(newScore);
  };

  return (
    <div className="relative quiz-container text-gray-800 flex flex-col items-center justify-center h-screen space-y-6 w-2/4 mx-auto">
      <div className="flex items-center justify-between w-full">
        <h3 className="text-xl font-semibold mb-2">Question 1:</h3>
      </div>
      <div className="flex flex-col space-y-3 w-full">
        <button
          onClick={() => setAnswers({ ...answers, q1: 'option1' })}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Option 1
        </button>
        <button
          onClick={() => setAnswers({ ...answers, q1: 'option2' })}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Option 2
        </button>
        <button
          onClick={() => setAnswers({ ...answers, q1: 'option3' })}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Option 3
        </button>
        <button
          onClick={() => setAnswers({ ...answers, q1: 'option4' })}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Option 4
        </button>
        {/* Bouton "Submit" en dessous des autres boutons */}
        <button
          onClick={handleSubmit}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline self-end "
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
