import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex flex-row justify-center items-center p-8 text-mustard space-x-4'>
          <NavLink
            to='/'
            className='hover:underline inline-flex items-center py-6 px-3 mr-4 text-2xl font-bold tracking-widest'
          >
            Sanity
          </NavLink>
          <NavLink
            to='/post'
            className='hover:underline inline-flex items-center py-6 px-3 mr-4 text-2xl font-bold tracking-widest'
          >
            Blog
          </NavLink>
          <NavLink
            to='/project'
            className='hover:underline inline-flex items-center py-6 px-3 mr-4 text-2xl font-bold tracking-widest'
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            className='hover:underline inline-flex items-center py-6 px-3 mr-4 text-2xl font-bold tracking-widest'
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
