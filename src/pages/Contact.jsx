import { FaEnvelope, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact" className="py-15 md:py-20 lg:py-20">
      <div className="max-w-7xl mx-auto px-3 md:px-5 lg:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold">Contact Me</h2>
          <p className="mt-3 md:text-lg lg:text-xl text-gray-600">
            Feel free to reach out for opportunities or collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Info */}
          <div>
            <h3 className="text-2xl md:text-3xl lg:4xl font-semibold">Let's connect</h3>
            <p className="mt-3 text-gray-600 max-w-md md:text-lg lg:text-xl">
              I'm open to frontend developer roles, internships and freelance
              projects. You can contact me via email or social platforms.
            </p>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 md:text-lg lg:text-xl" />
                <span className='md:text-lg lg:text-xl'>metarun97@email.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaGithub className="text-gray-800 md:text-lg lg:text-xl" />
                <Link
                  to="https://github.com/metarun97"
                  target="_blank"
                  className="hover:underline md:text-lg lg:text-xl"
                >
                  github.com/metarun97
                </Link>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form className="bg-white p-4 md:p-6 lg:p-8 rounded-xl shadow-sm">
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter your Name..."
                className="w-full border-0 px-4 py-3 rounded-lg outline-1 outline-slate-300 focus:outline-none focus:ring-1 ring-slate-200
                 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Enter your Email..."
                className="w-full border-0 px-4 py-3 rounded-lg outline-1 outline-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />

              <textarea
                placeholder="Enter your Message..."
                rows="4"
                className="w-full  border-0 px-4 py-3 rounded-lg outline-1 outline-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg outline-1 outline-slate-300 cursor-pointer hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
