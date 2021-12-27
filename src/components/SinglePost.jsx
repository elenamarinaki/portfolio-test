import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);
const urlFor = (source) => builder.image(source);

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == '${slug}']{
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
        'name': author->name,
        'authorImage': author->image
    }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch(console.error);
  }, [slug]);

  return (
    <div className='flex flex-col items-center text-white'>
      {singlePost ? '' : <div className='text-4xl mt-48'>Loading... 🍬</div>}
    </div>
  );
};

export default SinglePost;
