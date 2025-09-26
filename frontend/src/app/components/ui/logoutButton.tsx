'use client';
import { LogOutIcon } from 'lucide-react';
import React from 'react';

const onLogout = () => {
  console.log('logout');
  alert('Logged out');
};

export const LogoutButton = () => {
  return (
    <div className='h-18 separator-top'>
      <div className='h-full flex background'>
        <button
          onClick={onLogout}
          className={
            'h-full w-full flex flex-row items-center justify-start mx-2 px-3 gap-2 primary-active-hover'
          }
        >
          <LogOutIcon className='w-6' />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
};

export default LogoutButton;
