import React from 'react';
import { useLocation, useNavigate, useParams, NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

// const withRouter = (Component) => {
//   function ComponentWithRouterProp(props) {
//     let location = useLocation();
//     let navigate = useNavigate();
//     let params = useParams();
//     return <Component {...props} router={{ location, navigate, params }} />;
//   }

//   return ComponentWithRouterProp;
// };

const NavBar = () => {
  return (
    <header className='sticky top-0 bg-softBlack border-b-4 border-golden border-dashed shadow-lg'>
      <div className='container mx-auto flex justify-between'>
        <nav className='inline-flex justify-center items-center text-mustard space-x-4'>
          <NavLink
            exact
            to='/'
            className={({ isActive }) =>
              isActive
                ? 'underline inline-flex items-center py-6 px-3 mr-4 text-3xl font-bold tracking-widest'
                : 'hover:underline inline-flex items-center py-6 px-3 mr-4 text-2xl font-bold tracking-widest'
            }
            // className='hover:underline inline-flex items-center py-6 px-3 mr-4 text-2xl font-bold tracking-widest'
            // activeClassName='text-golden text-4xl'
          >
            Sanity
          </NavLink>
          <NavLink
            exact
            to='/post'
            className={({ isActive }) =>
              isActive
                ? 'underline inline-flex items-center py-6 px-3 mr-4 text-3xl font-bold tracking-widest'
                : 'hover:underline inline-flex items-center py-6 px-3 mr-4 text-2xl font-bold tracking-widest'
            }
          >
            Blog
          </NavLink>
          <NavLink
            exact
            to='/project'
            className={({ isActive }) =>
              isActive
                ? 'underline inline-flex items-center py-6 px-3 mr-4 text-3xl font-bold tracking-widest'
                : 'hover:underline inline-flex items-center py-6 px-3 mr-4 text-2xl font-bold tracking-widest'
            }
          >
            Projects
          </NavLink>
          <NavLink
            exact
            to='/about'
            className={({ isActive }) =>
              isActive
                ? 'underline inline-flex items-center py-6 px-3 mr-4 text-3xl font-bold tracking-widest'
                : 'hover:underline inline-flex items-center py-6 px-3 mr-4 text-2xl font-bold tracking-widest'
            }
          >
            About
          </NavLink>
        </nav>
        <div className='inline-flex p-4 my-4 space-x-2'>
          <SocialIcon
            url='https://www.youtube.com/channel/UCb-BPyGLnxMOESIFy3vkg_w'
            className=''
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url='https://twitter.com/rhuave'
            className=''
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
