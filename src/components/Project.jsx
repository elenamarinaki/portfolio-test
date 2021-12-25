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
              <article>
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
                <div>
                  <span>
                    Finished on: {new Date(project.date).toLocaleDateString()}
                  </span>
                  <span>Company: {project.place}</span>
                  <span>Type: {project.projectType}</span>
                  <p>{project.description}</p>
                  <a
                    href={project.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {' '}
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
