import React, { useState, useEffect } from 'react';
import sanityClient from '../client';

const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project']{title, date, place, description, projectType, link, tags}`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1 className='text-white text-xl'>Under construction ⚠ </h1>
    </div>
  );
};

export default Project;
