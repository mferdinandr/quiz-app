import React, { useState } from 'react';
import { auth } from '../services/firebase';

import Layout from '../components/Layouts/Layout';
import Button from '../components/Elements/Button/index';
import { Heading } from '../components/Elements/Text';
import RobotInput from '../components/Elements/Input/Radio/index';
import { useNavigate } from 'react-router-dom';

export const CATEGORY = [
  { value: '9', label: 'General Knowledge' },
  { value: '17', label: 'Science & Nature' },
  { value: '21', label: 'Sports' },
  { value: '22', label: 'Geography' },
];

export const DIFFICULTY = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' },
];

const Play = () => {
  const [filter, setFilter] = useState({ category: '', difficulty: '' });
  const user = auth.currentUser;

  const navigate = useNavigate();

  const handleStartQuiz = (e) => {
    e.preventDefault();
    navigate(`/quiz/${filter.category}/${filter.difficulty}`);
  };

  const handleSelectCategory = (e) => {
    setFilter((prev) => ({
      ...prev,
      category: e.target.value,
    }));
  };

  const handleSelectDifficulty = (e) => {
    setFilter((prev) => ({
      ...prev,
      difficulty: e.target.value,
    }));
  };

  return (
    <Layout>
      <div className="flex flex-col text-center md:w-1/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <form onSubmit={handleStartQuiz} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 mb-5">
            <Heading>Select Category</Heading>
            {CATEGORY.map((data) => (
              <RobotInput
                key={data.value}
                type={'radio'}
                name={'category'}
                value={data.value}
                label={data.label}
                className={'flex'}
                onChange={handleSelectCategory}
              />
            ))}
          </div>

          <div className="flex flex-col gap-1 mb-3">
            <Heading>Select Difficulity</Heading>
            {DIFFICULTY.map((data) => (
              <RobotInput
                key={data.value}
                type={'radio'}
                name={'difficulty'}
                value={data.value}
                label={data.label}
                className={'flex'}
                onChange={handleSelectDifficulty}
              />
            ))}
          </div>
          <Button type="submit">Play!</Button>
        </form>
      </div>
    </Layout>
  );
};

export default Play;
