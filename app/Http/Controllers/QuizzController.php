<?php

namespace App\Http\Controllers;

use App\Models\Quizz;
use App\Models\Question;
use Illuminate\Http\Request;

class QuizzController extends Controller
{
    public function show(Question $question){

        $questionWithOptions = Question::with('options')->find($question->id);
        $questions = Question::all();
        return view('quizzindex', [
            'questions'=> $questions
        ]);
    }

    public function submit(Request $request)
    {
        // Traitement des réponses du quizz
        $responses = $request->input('responses');

        // Faites ce que vous devez faire avec les réponses (enregistrement en base de données, évaluation, etc.)

        // Redirigez l'utilisateur ou renvoyez une réponse appropriée
        return redirect('/')->with('success', 'Quizz soumis avec succès!');
    }
}

