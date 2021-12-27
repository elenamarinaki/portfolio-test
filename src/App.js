import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import SinglePost from './components/SinglePost.jsx';
import Post from './components/Post.jsx';
import Project from './components/Project.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div className='font-mono bg-softBlack min-h-screen min-w-max m-auto'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Home />} path='/' exact='true' />
          <Route element={<About />} path='/about' />
          <Route element={<SinglePost />} path='/post/:slug' />
          <Route element={<Post />} path='/post' />
          <Route element={<Project />} path='/project' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
