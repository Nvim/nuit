<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Question;

class QuestionImporter extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        function import_questions($filename)
        {
            // Ouvre le fichier
            $file = fopen($filename, "r");

            // Crée un tableau pour stocker les questions
            $questions = [];

            // Lit le fichier ligne par ligne
            while (!feof($file)) {
                // Lit la ligne actuelle
                $line = fgets($file);

                // Ignore les lignes vides et les sauts de ligne
                if ($line == "" || $line == "\n") {
                    continue;
                }

                // Si la ligne commence par '*', c'est une question
                if (substr($line, 0, 2) == "*") {
                    // Récupère la question
                    $question = trim(substr($line, 2));

                    // Lit la ligne suivante
                    $line = fgets($file);

                    // Si la ligne commence par '->', c'est la réponse
                    if (substr($line, 0, 2) == "->") {
                        // Récupère la réponse
                        $answer = trim(substr($line, 2));

                        // Crée un nouvel objet Question
                        $question = new Question();

                        // Définit les propriétés de l'objet
                        $question->question = $question;
                        $question->answer = $answer;

                        // Ajoute l'objet au tableau
                        $questions[] = $question;}
                }
            }

            // Ferme le fichier
            fclose($file);

            // Retourne le tableau des questions
            foreach($questions as $question){
                $question->save();
            }
        }

    }
}
