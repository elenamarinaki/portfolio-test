import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState();
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((res) => setSinglePost(res[0]))
      .catch(console.error);
  }, [slug]);

  return (
    <div className='flex flex-col items-center text-white max-w-3xl sm:max-w-2xl mx-auto'>
      {singlePost ? (
        <main>
          <article>
            <header>
              <div>
                <div className='my-8'>
                  <h1 className='text-3xl p-1 bg-gradient-to-r from-mustard to-darkVeraman rounded'>
                    {singlePost.title}
                  </h1>
                  {/* <div>
                    <img
                      src={urlFor(singlePost.authorImage.url())}
                      alt={singlePost.name}
                    />
                    <p>{singlePost.name}</p>
                  </div> */}
                </div>
                <img
                  src={singlePost.mainImage.asset.url}
                  alt={singlePost.title}
                  width='200'
                  height='200' className='mb-8'
                />
              </div>
            </header>
            <div>
              <BlockContent
                blocks={singlePost.body}
                projectId='rq4e9768'
                dataset='production'
              />
            </div>
          </article>
        </main>
      ) : (
        <div className='text-4xl mt-48'>Loading... 🍬</div>
      )}
    </div>
  );
};

export default SinglePost;
