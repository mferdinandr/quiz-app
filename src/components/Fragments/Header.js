import React, { useEffect, useState } from 'react';
import { auth } from '../../services/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import Button from '../Elements/Button';

const Header = () => {
  const [userInfo, setUserInfo] = useState('');
  const user = auth.currentUser;
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
        setUserInfo('');
        console.log('signed out');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserInfo(user);
      } else {
        console.log('user is logged out');
      }
    });
  }, [userInfo]);

  return (
    <ul className="flex py-3 px-5 justify-between items-center border-b border-text">
      <li className="font-bold">QUWIZZ APP</li>
      <li className="flex justify-end">
        {userInfo ? (
          <div className="flex items-center gap-2">
            <h3>Hai {userInfo.displayName}</h3>
            <Button onClick={handleSignOut}>SignOut</Button>
          </div>
        ) : (
          <div className="flex gap-3">
            <Button link={'/login'}>Login</Button>
            <Button link={'/register'}>Register</Button>
          </div>
        )}
      </li>
    </ul>
  );
};

export default Header;
