const BASE_URL = 'https://opentdb.com/api.php?amount=10&type=multiple';

export const getQuestions = async (category, difficulty) => {
  const response = await fetch(
    `${BASE_URL}&category=${category}&difficulty=${difficulty}`
  );

  const questions = response.json();
  return questions;
};
