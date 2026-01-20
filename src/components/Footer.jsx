import { FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Left */}
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Tarun Upadhyay. All rights reserved.
          </p>

          {/* Right - Social Links */}
          <div className="flex gap-6 text-xl">
            <Link
              to="https://github.com/metarun97"
              target="_blank"
              className="text-gray-600 hover:text-black transition"
            >
              <FaGithub />
            </Link>
            <Link
              to="mailto:metarun97@email.com"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
