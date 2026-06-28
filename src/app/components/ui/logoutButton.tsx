'use client';
import { LogOutIcon } from 'lucide-react';
import React from 'react';

const onLogout = () => {
  console.log('logout');
  alert('Logged out');
};

export const LogoutButton = () => {
  return (
    <button
      onClick={onLogout}
      className='flex h-11 w-full items-center gap-3 rounded-md px-3 text-sm font-medium foreground-text transition-colors primary-active-hover background-hover'
    >
      <LogOutIcon className='h-5 w-5 shrink-0' />
      <span>Logout</span>
    </button>
  );
};

export default LogoutButton;
