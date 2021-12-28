import React, { useEffect, useState } from 'react';
import sanityClient from '../client';

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'author']{
      name,
      bio,
      'authorImage': image.asset->url
    }`
      )
      .then((res) => {
        console.log(res);
        setAuthor(res[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <div className='font-mono h-screen bg-softBlack m-2'>
      <p className='bg-red w-1/3 text-white bg-opacity-30 border-2 border-red rounded-lg p-4 hover:shadow-redGlow cursor-pointer'>
        This is About page!
      </p>
    </div>
  );
};

export default About;
