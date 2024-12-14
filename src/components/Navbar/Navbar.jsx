import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navv, setNavv] = useState(false);

  const links = [
    {
      id: 1,
      list: "home",
    },
    {
      id: 2,
      list: "about",
    },
    {
      id: 3,
      list: "projects",
    },
    {
      id: 4,
      list: "experience",
    },
    {
      id: 5,
      list: "education",
    },
    {
      id: 6,
      list: "contact me",
    },
  ];

  return (
    <header className="w-full h-20 bg-slate-900 relative z-10">
      <nav className="flex justify-between px-16 py-5 text-slate-400 text-lg ">
        <div>
          <h1 className="font-signature text-3xl cursor-pointer">Rishi</h1>
        </div>
        <div>
          <ul className="hidden md:flex capitalize gap-x-8 ">
            {links.map(({ id, list }) => (
              <li
                key={id}
                className="hover:scale-110 hover:border-b-2 hover:border-slate-300 
                     cursor-pointer"
              >
                <Link
                  to={list}
                  smooth
                  duration={500}
                  offset={-150}
                  activeClass="active"
                  spy
                >
                  {list}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div
          className="cursor-pointer z-10 md:hidden "
          onClick={() => setNavv(!navv)}
        >
          {navv ? <MdCancel size={30} /> : <TiThMenu size={30} />}
        </div>
      </nav>
      {navv && (
        <ul className="flex flex-col  justify-center items-center absolute top-0 left-0  w-full h-screen bg-gradient-to-r from-slate-900 to-slate-700 text-slate-400 capitalize text-xl gap-y-4">
          {links.map(({ id, list }) => (
            <li
              key={id}
              className="hover:scale-110 hover:border-b-2 hover:border-slate-300 
                    cursor-pointer"
            >
              <Link
                onClick={() => setNavv(!navv)}
                to={list}
                smooth
                duration={500}
                offset={-110}
                activeClass="active"
                spy
              >
                {list}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
