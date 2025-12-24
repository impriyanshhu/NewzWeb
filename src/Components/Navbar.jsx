import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { LuAlignRight } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import logo from '/logo.png';

const Navbar = ({ setCategory }) => {

  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const getCategory = (e) => {
    if (e.key === "Enter") {
      navigate(`/${e.target.value.toLowerCase()}`);
      setCategory(e.target.value);
    }
  }

  return (
    <nav className="flex  sticky top-0 z-100 items-center justify-between mb-10 px-6 md:px-16 lg:px-24 xl:px-32 py-1 sm:py-3 border-b border-gray-300 bg-white shadow-[0_2px_6px_rgba(0,0,0,0.15)]">

      <Link to={"/"} onClick={() => { setOpen(false); setCategory("general") }} className="flex items-center text-2xl font-bold text-sky-900">
        <img src={logo} alt="NewzWeb Logo" className='w-10' />
        NewzWeb
      </Link>

      <div className='hidden sm:flex items-center justify-around gap-4 lg:gap-10'>
        <ul className="flex items-center gap-4 lg:gap-10 text-sm lg:text-base">
          <li>
            <NavLink
              to={"/sports"}
              onClick={() => setCategory("sports")}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-500 font-medium"
                  : "text-gray-600 hover:text-black"
              }
            >
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/business"}
              onClick={() => setCategory("business")}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-500 font-medium"
                  : "text-gray-600 hover:text-black"
              }
            >
              Business
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/technology"}
              onClick={() => setCategory("technology")}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 border-b-2 border-blue-500 font-medium"
                  : "text-gray-600 hover:text-black"
              }
            >
              Technology
            </NavLink>
          </li>
        </ul>

        <div className='hidden sm:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full h-9'>
          <input
            type="text"
            placeholder='Search'
            className='py-1.5 w-full bg-transparent outline-none placeholder-gray-500'
            onKeyDown={getCategory}
          />
          <CiSearch className='text-gray-500 text-lg' />
        </div>
      </div>

      <button
        onClick={() => setOpen(!open)}
        className='sm:hidden'
      >
        {open ? <RxCross2 className='text-2xl' /> : <LuAlignRight className='text-2xl' />}
      </button>

      <div className={`${open ? 'flex' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-md pb-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
        <div className='flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full h-8 '>
          <input
            type="text"
            placeholder='Search'
            className='py-1.5 w-full bg-transparent outline-none placeholder-gray-500'
            onKeyDown={getCategory}
          />
          <CiSearch className='text-gray-500 text-lg' />
        </div>
        <NavLink to={"/sports"} onClick={() => setOpen(false)}>Sports</NavLink>
        <NavLink to={"/business"} onClick={() => setOpen(false)}>Business</NavLink>
        <NavLink to={"/technology"} onClick={() => setOpen(false)}>Technology</NavLink>

      </div>

    </nav>
  );
}

export default Navbar;
