import React, { useState } from 'react';
import InputForm from '../Elements/Input';
import { Heading } from '../Elements/Text/Heading';
import Button from '../Elements/Button';
import Text from '../Elements/Text/Text';
import { auth } from '../../services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
      console.log('berhasil');
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Heading>Login</Heading>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="nama@email.com"
        ></InputForm>
        <InputForm
          label="Password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="*********"
        ></InputForm>
        <Button type={'submit'}>Login</Button>
      </form>
      <Text>
        Don't have a account? <a href="/register">Regsiter now</a>
      </Text>
    </div>
  );
};
