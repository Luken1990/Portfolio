import React from 'react';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi';
import * as FaIcons from 'react-icons/fa';

export const Contact = () => {
  return (
    <section id="contact" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-semibold leading-6 tracking-wide text-white">
          Get in touch
        </h2>

        <div className="flex flex-col justify-center items-center gap-8 text-sm text-white sm:flex-row">
          <div className="mb-3 flex flex-row items-center gap-3 ">
            <span className="text-accent">
              <HiIcons.HiOutlineLocationMarker size={30} />
            </span>
            <p>London, United Kingdom</p>
          </div>
          <div className="mb-3 flex flex-row items-center gap-3  hover:text-accent">
            <span className="text-accent">
              <HiIcons.HiOutlineMail size={30} />
            </span>
            <a href={`mailto:'l.nguyen_1990@yahoo.com'`}>
              l.nguyen_1990@yahoo.com
            </a>
          </div>
          <div className="mb-3 flex flex-row items-center gap-3  hover:text-accent">
            <span className="text-accent">
              <FaIcons.FaLinkedinIn size={30} />
            </span>
            <a
              target="blank"
              href="https://www.linkedin.com/in/luke-nguyen-81337132/"
            >
              luke-nguyen-8133713
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
