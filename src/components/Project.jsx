import React, { useState, useEffect } from 'react';
import sanityClient from '../client';

const Project = () => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == 'project']{title, date, company, description, projectType, link, tags}`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main>
      <section>
        <h1 className='flex justify-center text-white text-4xl my-8'>
          My Projects 🪜
        </h1>
        <h2 className='flex justify-center mx-auto w-5/6 text-white text-lg my-4'>
          Have a look on what I have been working on recently or not so recently
          😉
        </h2>
        <section>
          {projectData &&
            projectData.map((project, index) => (
              <article className=' mx-auto my-6 text-white bg-orange bg-opacity-30 border-2 border-orange rounded-lg p-4 w-96'>
                {/* --------------------------- PROJECT TITLE */}
                <div className='flex flex-row justify-between items-baseline border-b-2 border-orange'>
                  <h3>
                    <a
                      href={project.link}
                      alt={project.title}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className='text-xs p-1 mb-1 bg-golden rounded-xl'>
                    {project.projectType}
                  </p>
                </div>

                {/* --------------------------- PROJECT DETAILS */}
                <div className='flex flex-col mt-2'>
                  <span>
                    Finished on: {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>Company: {project.company}</span>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View the project!
                    <span role='img' aria-label='right-arrow'>
                      ⇢
                    </span>
                  </a>
                </div>
              </article>
            ))}
        </section>
      </section>
    </main>
  );
};

export default Project;
