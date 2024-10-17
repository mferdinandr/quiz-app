import { useContext, useEffect, useState } from 'react';
import quizContext from '../services/quizContext';
import { useNavigate } from 'react-router-dom';
import { SubHeading, Title } from '../components/Elements/Text';
import Layout from '../components/Layouts/Layout';
import Button from '../components/Elements/Button';
import { auth } from '../services/firebase';
import Resistance from '../components/Fragments/Resistance';

const Result = () => {
  const [highscore, setHighScore] = useState(localStorage.getItem('highScore'));
  const [score, scoreDispatch] = useContext(quizContext);

  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (score === null) {
      navigate('/');
    } else if (score > highscore) {
      setHighScore(score);
      localStorage.setItem('highScore', JSON.stringify(score));
    }
  }, []);

  const goToMainMenu = () => {
    scoreDispatch({
      type: 'RESET_SCORE',
    });
    navigate('/');
  };

  const retakeQuiz = () => {
    scoreDispatch({
      type: 'RESET_SCORE',
    });
    navigate(-1);
  };

  const scorePercentage = Math.round((score / 10) * 100);
  const highScorePercentage =
    highscore === null ? 0 : Math.round((highscore / 10) * 100);

  return (
    <Layout>
      {user ? (
        <div className="container flex flex-col text-center w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Title>Result</Title>
          <SubHeading
            className={`${
              scorePercentage > 40 ? 'bg-success' : 'bg-danger'
            } my-2 w-100 p-3 rounded-pill text-center`}
          >
            You scored {score} out of {10} ({scorePercentage}%)
          </SubHeading>
          <div className="my-2">
            Highscore: {highscore || 0} ({highScorePercentage}%)
          </div>
          <div className="flex flex-row align-items-center justify-center my-3 w-100 gap-5">
            <Button className="" onClick={goToMainMenu}>
              Main Menu
            </Button>
            <Button className="" onClick={retakeQuiz}>
              Retake Quiz
            </Button>
          </div>
        </div>
      ) : (
        <Resistance></Resistance>
      )}
    </Layout>
  );
};

export default Result;
