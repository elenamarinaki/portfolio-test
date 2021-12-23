import React from 'react';
import { useLocation, useNavigate, useParams, NavLink } from 'react-router-dom';

const withRouter = (Component) => {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
};

const NavBar = () => {
  return (
    <header>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex flex-row justify-center items-center p-8 text-mustard space-x-4'>
          <NavLink
            exact
            to='/'
            className='hover:underline inline-flex items-center py-6 px-3 mr-4 text-2xl font-bold tracking-widest'
            activeClassName='text-golden'
          >
            Sanity
          </NavLink>
          <NavLink
            exact
            to='/post'
            className='hover:underline inline-flex items-center py-6 px-3 mr-4 text-2xl font-bold tracking-widest'
            activeClassName='text-golden'
          >
            Blog
          </NavLink>
          <NavLink
            exact
            to='/project'
            className='hover:underline inline-flex items-center py-6 px-3 mr-4 text-2xl font-bold tracking-widest'
            activeClassName='text-golden'
          >
            Projects
          </NavLink>
          <NavLink
            exact
            to='/about'
            className='hover:underline inline-flex items-center py-6 px-3 mr-4 text-2xl font-bold tracking-widest'
            activeClassName='text-golden'
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default withRouter(NavBar);
