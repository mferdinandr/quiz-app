import React, { useState } from 'react';
import InputForm from '../Elements/Input';
import { Heading } from '../Elements/Text/Heading';
import Button from '../Elements/Button';
import Text from '../Elements/Text/Text';
import { auth } from '../../services/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await updateProfile(user, { displayName: nama });

      setEmail('');
      setPassword('');
      setNama('');
      console.log('berhasil');

      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Heading>Sign Up</Heading>
      <form onSubmit={handleSubmit}>
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
        <Text>
          Already have a account? <a href="/login">Login</a>
        </Text>
      </form>
    </div>
  );
};
