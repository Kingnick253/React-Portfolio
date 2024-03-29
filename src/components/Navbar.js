import React, { useState } from "react";
// font awesome icons
import { FaBars, FaTimes } from "react-icons/fa";
import Links from "./NavBarData";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

 
  

  return (
    <div className="flex justify-between items-center w-full h-20 text-white  px-4 bg-black  fixed">
      <div>
        {/* name in the top right subject to be changed */}
        <h1 className=" text-5xl font-signature ml-2">Nicholas Webb</h1>
      </div>

      <ul className="hidden md:flex">
        {/* This will map through the array and auto fill the information */}
        {Links.map(({ id, link }) => (
          <a href={link}>
          <li
            key={id}
            className="px-4 cursor-pointer font-medium text-white-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
          </a>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-FrostOne to-FrostTwo text-gray-500">
                {Links.map(({ id, link }) => (
                    
                    <li
                    
                        key ={id}
                        className="px-4 cursor-pointer capitalize py-6 text-4xl" >
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                    </li>
             ))}
        </ul>
        )}
      </div>
    
  );
};

export default Navbar;
