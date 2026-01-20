import { Link } from 'react-router-dom';
import halfProfile from '/images/half-profile.png';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-8 lg:px-10 pt-20">
      {/* Text */}
      <div className="md:w-1/2 flex flex-col items-center text-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-600">Tarun</span>
        </h1>

        <h2 className="text-2xl md:text-4xl mt-2 font-medium text">
          Frontend Developer
        </h2>

        <p className="mt-4 text-gray-700 max-w-md">
          I build responsive, user-friendly web applications using React,
          Tailwind CSS and modern JavaScript.
        </p>
        <div className="mt-6 flex justify-center md:justify-start gap-4">
          <Link
            to="https://github.com/metarun97"
            target="_blank"
            className="px-4 py-1.5 md:px-6 md:py-3 lg:py-4 lg:px-8 border-2 border-black text-black hover:bg-black transition-all duration-200 hover:text-white rounded-lg cursor-pointer"
          >
            Github
          </Link>
          <Link
            to=""
            target="_blank"
            download
            className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 transition-all duration-200 text-white rounded-lg"
          >
            <FaDownload />
            Download CV
          </Link>
        </div>
      </div>

      {/* Illustration */}
      <div className="md:w-1/2 flex justify-center mt-8  md:mt-0">
        <img
          src={halfProfile}
          alt="hero illustration"
          className="w-86 md:w-96 lg:w-106"
        />
      </div>
    </section>
  );
};

export default Hero;
