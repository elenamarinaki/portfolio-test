import React from 'react';

const Home = () => {
  return (
    <div className='font-mono h-screen bg-softBlack m-auto'>
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
    </div>
  );
};

export default Home;
