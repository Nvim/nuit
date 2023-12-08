import React from "react";
import { Inertia, useInertia } from "@inertiajs/inertia";
import { QuestionService } from "@inertiajs/inertia-laravel";

export default class Questions extends InertiaLink {
  constructor(props) {
    super(props);

    this.questions = useInertia(QuestionService.all());
  }

  render() {
    return (
      <ul>
        {this.questions.map((question) => (
          <li key={question.id}>
            <h3>{question.question}</h3>
            <ul>
              {question.options.map((option) => (
                <li key={option.id}>{option.label}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    );
  }
}
