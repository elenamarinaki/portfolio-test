import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home.jsx';
import About from './components/About.jsx';
import SinglePost from './components/SinglePost.jsx';
import Post from './components/Post.jsx';
import Project from './components/Project.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<SinglePost />} path='/post/:slag' />
        <Route element={<Post />} path='/post' />
        <Route element={<Project />} path='/project' />
        {/* <div className='font-mono h-screen bg-softBlack m-auto'>
          <header>
            <div className='text-3xl text-white p-8'>
              This is going to be a sample blog!
            </div>
          </header>
          <main>
            <div className='flex flex-col justify-center items-center p-8 w-1/3 space-y-4'>
              <p className='bg-mustard rounded-lg p-4'>This is a blog post</p>
              <p className='bg-darkVeraman rounded-lg p-4 text-white'>
                This is a blog post
              </p>
            </div>
          </main>
        </div> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
