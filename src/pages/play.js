import React from 'react';
import { auth } from '../services/firebase';

import Layout from '../components/Layouts/Layout';
import Button from '../components/Elements/Button/index';
import { SubHeading } from '../components/Elements/Text';

const Play = () => {
  const user = auth.currentUser;

  return (
    <Layout>
      {user ? (
        <h1>Hai</h1>
      ) : (
        <div className="flex flex-col text-center md:w-1/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-3">
          <SubHeading>u need login first, before playing</SubHeading>
          <Button link={'/login'}>Login</Button>
        </div>
      )}{' '}
    </Layout>
  );
};

export default Play;
