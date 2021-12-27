import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  // let singlePost = {};
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
      .then((data) => {
        let query = data[0];
        return query;
      })
      .then(console.log)
      .then((query) => setSinglePost(query))
      .then(() => console.log(singlePost))
      .catch(console.error);
  }, [slug]);

  return (
    <div className='flex flex-col items-center text-white'>
      {singlePost ? (
        <main>
          <article>
            <header>
              <div>
                <div>
                  <h1>{singlePost.title}</h1>
                  <div>
                    <img
                      src={urlFor(singlePost.authorImage.url())}
                      alt={singlePost.name}
                    />
                    <p>{singlePost.name}</p>
                  </div>
                </div>
                <img
                  src={singlePost.mainImage.asset.url}
                  alt={singlePost.title}
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
        <div className='text-4xl mt-48'>
          Loading...{console.log(singlePost)} 🍬
        </div>
      )}
    </div>
  );
};

export default SinglePost;
