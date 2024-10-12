import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getQuestions } from '../services/request';
import { useParams } from 'react-router-dom';

const Quiz = () => {
  const { category, difficulty } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['questions'],

    queryFn: async () => {
      const popularMovies = await getQuestions(category, difficulty);

      return popularMovies;
    },
  });

  if (isLoading) return <h1>Loading.....</h1>;
  if (error) return <h1>Cannot Load Popular Movie</h1>;

  console.log(data.results);

  return <div>Quiz</div>;
};

export default Quiz;
