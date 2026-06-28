'use client';
import { ScissorsIcon } from 'lucide-react';
import React from 'react';

export const Login = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center gap-4'>
      <div className='flex flex-row background  items-center justify-center '>
        <ScissorsIcon className='h-11 w-11 foreground-primary mr-2' />
        <h1 className='font-brand text-5xl font-bold'>Tailor Portal</h1>
      </div>
      <div className='w-[484px] gradient-background rounded-md border-strong py-8 px-4'>
        <form
          className='space-y-6'
          onSubmit={() => {
            // handleSubmit
            alert('Logging in...');
          }}
        >
          <div>
            <label
              htmlFor='username'
              className='block text-sm font-medium text-gray-700'
            >
              Username / Email
            </label>
            <div className='mt-1'>
              <input
                id='username'
                name='username'
                type='text'
                autoComplete='username'
                // value={username}
                // onChange={(e) => setUsername(e.target.value)}
                className='appearance-none block w-full background-light px-3 py-2 border-strong rounded-md input-focus'
              />
            </div>
          </div>
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Password
            </label>
            <div className='mt-1'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
                className='appearance-none block w-full background-light px-3 py-2 border-strong rounded-md input-focus'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              // disabled={isLoading}
              className={`w-full btn-primary`}
              // className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
              //   isLoading ? 'opacity-70 cursor-not-allowed' : ''
              // }`}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
