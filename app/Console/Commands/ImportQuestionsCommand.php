<?php

namespace App\Console\Commands;

use ImportQuestionsJson;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class ImportQuestionsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:questions {filename}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    protected function import_questions_json(string $filename)
    {
        // Ouvre le fichier
        $file = fopen($filename, 'r');

        // Crée un tableau pour stocker les questions
        $questions = [];

        // Lit le fichier ligne par ligne
        while (!feof($file)) {
            // Lit la ligne actuelle
            $line = fgets($file);

            // Ignore les lignes vides et les sauts de ligne
            if ($line == '' || $line == "\n") {
                continue;
            }

            // Lit le JSON
            $question = json_decode($line);

            // Ajoute la question au tableau
            $questions[] = $question;
        }

        // Ferme le fichier
        fclose($file);

        // Retourne le tableau des questions
        return $questions;
    }

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $filename = $this->argument('filename');

        // Convertissez le fichier JSON en un tableau PHP
        $json = file_get_contents('quizz.json');
        $quiz = json_decode($json);

        // Parcourez le tableau et insérez les données
        foreach ($quiz as $question) {
            // Insérez la question
            $questionId = DB::table('questions')->insertGetId([
                'question' => $question->question,
                'answer' => $question->answer,
            ]);

            // Insérez les options de réponse
            foreach ($question->options as $option) {
                DB::table('options')->insert([
                    'question_id' => $questionId,
                    'text' => $option->text,
                    'score' => $option->score,
                ]);
            }
        }
    }
}
