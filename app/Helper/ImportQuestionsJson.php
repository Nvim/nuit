<?php

/**
 * Importe les questions d'un fichier JSON.
 *
 * @param string $filename
 *
 * @return array
 */
function import_questions_json(string $filename)
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
