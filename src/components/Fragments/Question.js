import React, { useContext, useEffect, useState } from 'react';
import quizContext from '../../services/quizContext';

const shuffleQuestions = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Question = ({ question, setIsAnswered, isAnswered }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const [score, scoreDispatch, options, optionsDispatch] =
    useContext(quizContext);

  useEffect(() => {
    const shuffledOptions = shuffleQuestions([
      question.correct_answer,
      ...question.incorrect_answers,
    ]);
    optionsDispatch({
      type: 'SET_OPTIONS',
      payload: shuffledOptions,
    });
  }, [question]);

  const selectOption = (opt) => {
    setSelectedOption(opt);
    if (opt === question.correct_answer) {
      scoreDispatch({
        type: 'SET_SCORE',
        payload: score + 1,
      });
    }
    setIsAnswered(true);
  };

  const displayedOptions = options;
  return (
    <div className="my-4">
      <div>
        <div className="fs-4 text-center font-semibold text-xl">
          <div dangerouslySetInnerHTML={{ __html: question.question }} />
        </div>

        <div className="list-group my-3 flex flex-col">
          {isAnswered
            ? displayedOptions.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  className={`list-group-item list-group-item-action my-1 rounded-pill disabled ${
                    opt === question.correct_answer &&
                    'bg-green-400 rounded-sm text-background'
                  } ${
                    opt === selectedOption &&
                    opt !== question.correct_answer &&
                    'bg-red-500  rounded-sm text-white'
                  }`}
                  disabled
                  onClick={() => selectOption(opt)}
                >
                  <div dangerouslySetInnerHTML={{ __html: opt }} />
                </button>
              ))
            : displayedOptions.map((opt, i) => (
                <button
                  key={i}
                  type="button"
                  className="list-group-item list-group-item-action my-1 rounded-pill"
                  onClick={() => selectOption(opt)}
                >
                  <div dangerouslySetInnerHTML={{ __html: opt }} />
                </button>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Question;
