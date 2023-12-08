    <h1>Liste des questions</h1>
{{--
    <ul>
        @foreach ($questions as $question)
            <li>
                <div class="text-lg"> {{ $question->question }} </div>
                <ul>
                    @foreach ($question->options as $answer )
                       <li>
                            <div class="text-sm"> {{ $answer->text }} </div>
                        </li>
                    @endforeach
                </ul>
            </li>
        @endforeach
    </ul> --}}

    <form action="{{ route('quizz.process') }}" method="post">
        @csrf

        <div>
            @foreach ($questions as $question)
                <label for="question{{ $question->id }}" class="text-lg">{{ $question->question }}!</label>
                <br>
                <select name="{{ $question->id }}" id="{{ $question->id }}">
                @foreach ($question->options as $answer )
                    <option value="{{ $answer->id }}">{{ $answer->text }}</option>
                @endforeach
                </select>
                <br>
            @endforeach
        </div>

        <button type="submit" class="btn btn-primary">Sélectionner</button>
      </form>
