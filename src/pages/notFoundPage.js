import React from 'react';
import { Heading, Text } from '../components/Elements/Text';
import Button from '../components/Elements/Button';
import Layout from '../components/Layouts/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="flex flex-col text-center w-1/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-4">
        <div className="space-y-1">
          <Heading>404 ERROR</Heading>
          <Text>Kejauhan mainnya, balik aja</Text>
        </div>
        <Button link={'/'}>Home</Button>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
