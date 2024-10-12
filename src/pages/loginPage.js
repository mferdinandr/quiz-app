import React from 'react';
import { LoginForm } from '../components/Fragments/LoginForm';
import Layout from '../components/Layouts/Layout';

const LoginPage = () => {
  return (
    <Layout>
      <div className="flex flex-col text-center md:w-1/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <LoginForm />
      </div>
    </Layout>
  );
};

export default LoginPage;
