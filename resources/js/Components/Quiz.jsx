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
      <div className="quiz-container text-white">
        <div className="question mb-4">
          <h3 className="text-lg font-semibold">Question 1:</h3>
          <div className="mt-2 space-y-2">
            <button
              onClick={() => setAnswers({ ...answers, q1: 'option1' })}
              className={`w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded`}
            >
              Option 1
            </button>
            <button
              onClick={() => setAnswers({ ...answers, q1: 'option2' })}
              className={`w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded`}
            >
              Option 2
            </button>
            <button
              onClick={() => setAnswers({ ...answers, q1: 'option3' })}
              className={`w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded`}
            >
              Option 3
            </button>
            <button
              onClick={() => setAnswers({ ...answers, q1: 'option4' })}
              className={`w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded`}
            >
              Option 4
            </button>
            {/* Ajoutez d'autres options selon vos besoins */}
          </div>
        </div>
  
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
  
        {/* Affichage du score */}
        {/* <div className="score mt-4">
          <h3 className="text-lg font-semibold">Score: {score}</h3>
        </div> */}
      </div>
    );
  };
  
  export default Quiz;
  