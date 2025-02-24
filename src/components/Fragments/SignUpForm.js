import React, { useState } from 'react';
import InputForm from '../Elements/Input';
import { Heading, Text } from '../Elements/Text/index';
import Button from '../Elements/Button';
import { auth } from '../../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/login');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Tidak terdaftar');
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex flex-col gap-4">
      <Heading>Sign Up</Heading>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <InputForm
          label="Email"
          name="email"
          type="email"
          value={email}
          placeholder="nama@email.com"
          onChange={(e) => setEmail(e.target.value)}
        ></InputForm>
        <InputForm
          label="Nama"
          name="nama"
          type="text"
          value={nama}
          placeholder="Namamu"
          onChange={(e) => setNama(e.target.value)}
        ></InputForm>
        <InputForm
          label="Password"
          name="password"
          type="password"
          value={password}
          placeholder="*********"
          onChange={(e) => setPassword(e.target.value)}
        ></InputForm>
        <Button type={'submit'}>Sign Up</Button>
      </form>
      <Text>
        Already have a account?{' '}
        <a href="/login" className="text-secondary font-semibold">
          Login
        </a>
      </Text>
    </div>
  );
};
