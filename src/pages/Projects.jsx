import { Link } from 'react-router-dom';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      title: 'Notes App',
      description:
        'A notes application where users can add, edit, delete notes with data stored in localStorage.',
      tech: ['JavaScript', 'HTML', 'CSS', 'Toastify JS'],
      live: 'https://notes-app-metarun.vercel.app/',
      code: 'https://github.com/metarun97/Notes_App',
    },
    {
      title: 'Weather App',
      description:
        'Weather forecast application using OpenWeather API with real-time search functionality.',
      tech: ['JavaScript', 'API', 'CSS'],
      live: 'https://weather-app-metarun.vercel.app/',
      code: 'https://github.com/metarun97/Weather_App',
    },

    {
      title: 'E-Commerce Website',
      description:
        'A responsive e-commerce web app with product listing, cart functionality and category filtering.',
      tech: ['React', 'Tailwind CSS', 'Context API','Redux Toolkit', 'React Router'],
      live: '#',
      code: '#',
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio website to showcase projects, skills and contact details.',
      tech: ['React', 'Tailwind CSS', 'React Router'],
      live: '#',
      code: '#',
    },
  ];
  return (
    <section id="projects" className="py-15 md:py-25">
      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">
            Projects
          </h2>
          <p className="mt-3 text-gray-600 text-xl md:text-xl lg:text-2xl ">
            Some of the projects I have built using modern web technologies
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] rounded-xl p-6 shadow-sm hover:shadow-lg transition"
            >
              <h3 className="text-xl md:text-2xl lg:3xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm md:text-lg lg:text-xl">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="text-xs sm:text-sm lg:text-l px-3 py-1 bg-gray-200 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <Link
                  to={project.live}
                  target="_blank"
                  className="text-sm flex items-center gap-x-1 sm:text-lg lg:text-xl font-medium text-blue-600 hover:underline"
                >
                  Live Demo <FiExternalLink />
                </Link>
                <Link
                  to={project.code}
                  target="_blank"
                  className="text-sm flex items-center gap-x-1 sm:text-lg lg:text-xl font-medium text-gray-700 hover:underline"
                >
                  GitHub <FiExternalLink />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
