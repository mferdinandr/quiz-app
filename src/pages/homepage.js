import React from 'react';
import Button from '../components/Elements/Button';
import Layout from '../components/Layouts/Layout';
import { Heading } from '../components/Elements/Text/Heading';
import Text from '../components/Elements/Text/Text';
import { Link } from 'react-router-dom';
import { auth } from '../services/firebase';

const HomePage = () => {
  const user = auth.currentUser;

  return (
    <Layout>
      {user ? (
        <div className="text-text">Hallo {user.displayName}</div>
      ) : (
        <div className="flex flex-col text-center w-screen gap-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Heading>QUWIZ APP</Heading>
          <div className="flex justify-center gap-10">
            <Button>
              <Link to={'/login'}>Login</Link>
            </Button>
            <Button>
              <Link to={'/register'}>Register</Link>
            </Button>
          </div>
          <Text>Login to play</Text>
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
