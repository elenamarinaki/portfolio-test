import React, { useEffect, useState } from 'react';
import sanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

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
    <div className='flex flex-col items-center text-white max-w-3xl sm:max-w-2xl mx-auto'>
      {author ? (
        // <p className='bg-red w-1/3 text-white bg-opacity-30 border-2 border-red rounded-lg p-4 hover:shadow-redGlow cursor-pointer'>
        //   This is About page!
        // </p>
        <main>
          <div>
            <section>
              {/* <img src={urlFor(author.authorImage).url()} alt='' /> */}
              <div>
                <h1></h1>
                <div>BLOCK CONTENT</div>
              </div>
            </section>
          </div>
        </main>
      ) : (
        <div className='text-4xl mt-48'>Loading... 🍬</div>
      )}
    </div>
  );
};

export default About;
