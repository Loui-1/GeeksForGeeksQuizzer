import React, { useState } from 'react';
import { Menu, MenuButton, MenuItem } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [programme, setProgramme] = useState('');
  const [level, setLevel] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    try{
        const response = fetch('http://localhost:3000', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, level, programme }),
        });
        console.log(response);
    }
    catch(error){
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleRegister}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="programme" className="sr-only">Programme</label>
              <input
                id="programme"
                name="programme"
                type="text"
                autoComplete="programme"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Programme"
                value={programme}
                onChange={(e) => setProgramme(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="level" className="sr-only">Level</label>
              <input
                id="level"
                name="level"
                type="text"
                autoComplete="level"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 14a1 1 0 01-1-1V8a1 1 0 012 0v5a1 1 0 01-1 1zM5 14a1 1 0 01-1-1V5a1 1 0 011-1h4a1 1 0 110 2H6v7a1 1 0 01-1 1zM16 3a1 1 0 011 1v10a1 1 0 01-2 0V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const CourseMenu = () => (
  <Menu as="div" className="relative inline-block text-left">
    <div>
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        COURSES
        <ChevronDownIcon aria-hidden="true" className="-mr-1 h-5 w-5 text-gray-400" />
      </MenuButton>
    </div>

    <Menu.Items
      transition
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
    >
      <div className="py-1">
        <MenuItem>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            React Native
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            Database
          </a>
        </MenuItem>
      </div>
      <div className="py-1">
        <MenuItem>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            Open Source Operating System
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            Visual Basic
          </a>
        </MenuItem>
      </div>
      <div className="py-1">
        <MenuItem>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            Literature
          </a>
        </MenuItem>
        <MenuItem>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            Data Structures and Algorithms
          </a>
        </MenuItem>
      </div>
      <div className="py-1">
        <MenuItem>
          <a
            href="/"
            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
          >
            Human Computer Interaction
          </a>
        </MenuItem>
      </div>
    </Menu.Items>
  </Menu>
);

export default  RegisterForm ;
