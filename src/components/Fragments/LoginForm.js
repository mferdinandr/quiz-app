import React, { useState } from 'react';
import InputForm from '../Elements/Input';
import { Heading, Text } from '../Elements/Text/index';
import Button from '../Elements/Button';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/play');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex flex-col gap-4">
      <Heading>Login</Heading>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputForm
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nama@email.com"
        />
        <InputForm
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*********"
        />
        <Button type={'submit'}>Login</Button>
      </form>
      <Text>
        Don't have a account?
        <a href="/register" className="text-secondary font-semibold">
          {' '}
          Regsiter
        </a>{' '}
        now
      </Text>
    </div>
  );
};
