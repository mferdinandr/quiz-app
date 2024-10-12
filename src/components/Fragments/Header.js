import React from 'react';
import { auth } from '../../services/firebase';

import Button from '../Elements/Button';

const Header = () => {
  const user = auth.currentUser;

  return (
    <ul className="flex py-3 px-5 justify-between items-center border-b border-text">
      <li className="font-bold">QUWIZZ APP</li>
      <li className="flex justify-end">
        {user ? (
          <h3>Hai {user.displayName}</h3>
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
