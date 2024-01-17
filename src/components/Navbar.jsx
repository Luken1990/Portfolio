import React, { useState } from 'react';
import { Link } from 'react-scroll';
import * as RxIcons from 'react-icons/rx';
import { nanoid } from 'nanoid';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navMenu = [
    {
      menu: 'About',
      link: 'about',
    },
    {
      menu: 'Portfolio',
      link: 'portfolio',
    },
    {
      menu: 'Contact',
      link: 'contact',
    },
    // {
    //   menu: 'Blog',
    //   link: '/blog',
    // },
  ];

  return (
    <nav className="fixed z-10 w-full bg-white">
      <div className=" relative mx-auto sm:container sm:px-4">
        <div className="flex flex-col justify-between sm:flex-row sm:py-4">
          <div className="flex justify-between border border-b-[1px] p-4 font-bold sm:border-none sm:p-0">
            <Link to="hero">
              <h3 className=" cursor-pointer">Luke.D</h3>
            </Link>
            <span onClick={() => setOpen(!open)} className="sm:hidden">
              <RxIcons.RxHamburgerMenu size={20} />
            </span>
          </div>
          <ul
            className={`mt-0 hidden w-auto flex-row gap-6 gap-y-6 overflow-hidden sm:flex`}
          >
            {navMenu.map(({ menu, link }) => {
              return (
                <li
                  key={nanoid()}
                  className=" cursor-pointer text-center hover:border-b-2 hover:border-b-accent"
                >
                  <Link to={link} smooth={true} duration={300} offset={-56}>
                    {menu}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div
          id="mobile-nav"
          className={`absolute top-0 flex w-full flex-col justify-between bg-white sm:hidden sm:py-4 ${
            open ? ' -translate-x-0' : ' -translate-x-full'
          } duration-300`}
        >
          <div className="text flex justify-end p-4 font-bold sm:border-none sm:p-0">
            <span onClick={() => setOpen(!open)} className="sm:hidden">
              <RxIcons.RxCross1 size={20} />
            </span>
          </div>
          <ul>
            {navMenu.map(({ menu, link }) => {
              return (
                <li key={menu} className=" py-6 text-center">
                  <Link to={link}>{menu}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
