import React, { useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getQuestions } from '../services/request';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layouts/Layout';
import { CATEGORY } from './play';
import Question from '../components/Fragments/Question';
import quizContext from '../services/quizContext';
import Button from '../components/Elements/Button';

const Quiz = () => {
  const { category, difficulty } = useParams();
  const [isAnswered, setIsAnswered] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, scoreDispatch] = useContext(quizContext);

  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ['questions'],

    queryFn: async () => {
      const questions = await getQuestions(category, difficulty);

      return questions.results;
    },
  });

  const nextQuestion = () => {
    setCurrentQuestion((prev) => prev + 1);
    setIsAnswered(false);
  };

  const finishQuiz = () => {
    if (score === null) {
      scoreDispatch({
        type: 'SET_SCORE',
        payload: 0,
      });
    }
    setIsAnswered(false);
    navigate('/result');
  };

  if (isLoading)
    return (
      <Layout>
        <div className="flex flex-col items-center justify-between w-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 py-3">
          <div className="loader"></div>
        </div>
      </Layout>
    );
  if (error)
    return (
      <Layout>
        <div className="flex flex-col justify-between w-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 py-3">
          <h1>Cannot load the question</h1>
        </div>
      </Layout>
    );

  const categoryData = CATEGORY.find((data) => data.value === category);

  return (
    <Layout>
      <div className="flex flex-col justify-between w-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 py-3">
        <div className="flex justify-between">
          <h1>{categoryData.label}</h1>
          <h1>{difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</h1>
        </div>
        <h1>
          {currentQuestion + 1}/{data.length}
        </h1>
        <div>
          <Question
            question={data[currentQuestion]}
            setIsAnswered={setIsAnswered}
            isAnswered={isAnswered}
          ></Question>
        </div>
        {data.length === currentQuestion + 1 ? (
          <Button
            className={`btn btn-primary align-self-end ${
              isAnswered === false && 'disabled'
            }`}
            onClick={finishQuiz}
          >
            Finish
          </Button>
        ) : (
          <Button
            className={`btn btn-primary align-self-end ${
              isAnswered === false && 'disabled'
            }`}
            onClick={nextQuestion}
          >
            Next
          </Button>
        )}
      </div>
    </Layout>
  );
};

export default Quiz;
