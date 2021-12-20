import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <div className='text-3xl text-white p-8'>
        This is going to be a sample blog!
      </div>
      <div>
        <nav className='flex flex-row justify-center items-center p-8 text-mustard space-x-4'>
          <NavLink to='/' className='hover:underline'>
            Sanity
          </NavLink>
          <NavLink to='/post' className='hover:underline'>
            Blog Posts
          </NavLink>
          <NavLink to='/project' className='hover:underline'>
            Projects
          </NavLink>
          <NavLink to='/about' className='hover:underline'>
            About Me
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
