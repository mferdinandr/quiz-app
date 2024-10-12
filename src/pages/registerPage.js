import React from 'react';
import { SignUpForm } from '../components/Fragments/SignUpForm';
import Layout from '../components/Layouts/Layout';

const SingUpPage = () => {
  return (
    <Layout>
      <div className="flex flex-col text-center md:w-1/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <SignUpForm />
      </div>
    </Layout>
  );
};

export default SingUpPage;
