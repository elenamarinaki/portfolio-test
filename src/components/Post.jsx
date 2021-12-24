import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';

const Post = () => {
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'post']{title, slug, mainImage{asset->{_id, url}, alt}}`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  });

  return (
    <main>
      <section>
        <h1 className='flex justify-center text-white text-4xl my-8'>
          Welcome! 👋
        </h1>
        <h2 className='flex justify-center mx-auto w-5/6 text-white text-lg my-4'>
          Here you will find some of my random thoughts in the form of posts 💭
        </h2>
        <div className='flex flex-col justify-center items-center space-y-4'>
          {postData &&
            postData.map((post, index) => (
              <article
                className={
                  index % 2 === 0
                    ? 'text-white bg-mustard bg-opacity-30 border-2 border-mustard rounded-lg p-4'
                    : 'text-white bg-darkVeraman bg-opacity-30 border-2 border-darkVeraman rounded-lg p-4'
                }
              >
                <Link to={'/post/' + post.slug.current} key={post.slug.current}>
                  <span>
                    <img
                      className='w-12'
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                    />
                    <span>
                      <h3>{post.title}</h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Post;
