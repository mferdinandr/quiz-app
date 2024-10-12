import React from 'react';
import Button from '../components/Elements/Button';
import Layout from '../components/Layouts/Layout';
import { Title, Text } from '../components/Elements/Text/index';
import Header from '../components/Fragments/Header';

const HomePage = () => {
  return (
    <Layout>
      <Header />
      <div className="flex flex-col text-center w-screen absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Text>Welcome to</Text>
        <Title>QUWIZ APP</Title>
        <div className="flex flex-col w-1/5 mx-auto justify-center gap-2 py-5">
          <Button link={'/play'}>Play</Button>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
