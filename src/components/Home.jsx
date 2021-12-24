import React from 'react';

const Home = () => {
  return (
    <div>
      <main className='mx-auto'>
        <div className='flex flex-col justify-center items-center p-8 space-y-4'>
          <p className='text-white bg-mustard bg-opacity-30 border-2 border-mustard rounded-lg p-4'>
            This is a blog post
          </p>
          <p className='text-white bg-darkVeraman bg-opacity-30 border-2 border-darkVeraman rounded-lg p-4'>
            This is a blog post
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
