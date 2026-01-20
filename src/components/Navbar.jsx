import { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import programmer from '/icon/programmer.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold flex items-center gap-1">
          <img className='h-8 md:h-10 lg:h-12' src={programmer} alt="" /> Tarun Upadhyay
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li className="text-sm md:text-lg lg:text-xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'
              }
            >
              Home
            </NavLink>
          </li>
          <li className="text-sm md:text-lg lg:text-xl">
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'
              }
            >
              Skills
            </NavLink>
          </li>
          <li className="text-sm md:text-lg lg:text-xl">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="text-sm md:text-lg lg:text-xl">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Mobile Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? <RxCross1 /> : <RxHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-4 font-medium shadow">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'
              }
              onClick={() => setOpen(false)}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'
              }
              onClick={() => setOpen(false)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'
              }
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
