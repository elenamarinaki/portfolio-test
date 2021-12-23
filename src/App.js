import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import SinglePost from './components/SinglePost.jsx';
import Post from './components/Post.jsx';
import Project from './components/Project.jsx';
import NavBar from './components/NavBar.jsx';

function App() {
  return (
    <div className='font-mono bg-softBlack min-h-screen m-auto'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<Home />} path='/' exact />
          <Route element={<About />} path='/about' exact />
          <Route element={<SinglePost />} path='/post/:slag' exact />
          <Route element={<Post />} path='/post' exact />
          <Route element={<Project />} path='/project' exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
