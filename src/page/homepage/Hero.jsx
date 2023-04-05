import React, { useState, useContext } from 'react';
import img from '../../assets/images/Luke_circle.png';
import { WebContext } from './Home';

import { nanoid } from 'nanoid';

export const Hero = () => {
  const [showStack, setShowStack] = useState(false);
  const [webState, setWebState] = useContext(WebContext);

  const techStack = [
    {
      id: nanoid(),
      language: 'HTML',
      styles: `${
        showStack ? 'block' : 'hidden'
      } liquid absolute top-[-100px] left-1/2 border border-primary p-6`,
    },
    {
      id: nanoid(),
      language: 'CSS',
      styles: `${
        showStack ? 'block' : 'hidden'
      } liquid absolute top-[30px] right-[-110px] border border-primary p-8`,
    },
    {
      id: nanoid(),
      language: 'TailwindCSS',
      styles: `${
        showStack ? 'block' : 'hidden'
      } liquid absolute bottom-[65px] right-[-170px] border border-primary p-6`,
    },
    {
      id: nanoid(),
      language: 'JavaScript',
      styles: `${
        showStack ? 'block' : 'hidden'
      } liquid absolute bottom-[-70px] left-[280px] border border-primary p-6`,
    },
    {
      id: nanoid(),
      language: 'React',
      styles: `${
        showStack ? 'block' : 'hidden'
      } liquid absolute bottom-[-100px] left-[100px] border border-primary p-6`,
    },
  ];

  const handleDesign = () => {
    setWebState('design');
  };

  const handleDevelop = () => {
    setWebState('develop');
  };

  return (
    <section id="hero" className="relative">
      <div className=" absolute flex h-screen w-full items-center justify-between text-white">
        <button
          type="button"
          style={{ writingMode: 'vertical-rl' }}
          onClick={handleDevelop}
          className=" rounded-tr-md rounded-br-md bg-accent px-2 py-4"
        >
          Develop
        </button>
        <button
          type="button"
          style={{ writingMode: 'vertical-lr' }}
          onClick={handleDesign}
          className=" rotate-180 rounded-tr-md rounded-br-md bg-accent px-2 py-4"
        >
          Design
        </button>
      </div>

      <div className="flex h-screen w-full flex-col items-center justify-center gap-20 md:flex-row">
        <div className=" relative mb-10 md:mb-0">
          <h2 className="text-lg font-semibold capitalize leading-relaxed tracking-widest sm:text-2xl">
            Hi, my Name is <span className="text-accent">Luke Nguyen</span>
          </h2>
          <h1 className="text-blk text-2xl font-bold capitalize leading-relaxed tracking-wide sm:text-4xl">
            {`${
              webState === 'develop'
                ? 'Front end Developer'
                : 'Graphic Designer'
            }`}
          </h1>
          <span className="absolute bottom-[-85%] hidden h-2 w-full bg-gradient-to-r from-transparent via-black to-transparent opacity-75 blur-md md:block"></span>
        </div>

        <div
          className={`relative h-64 w-64 rounded-full bg-cover bg-center ${
            webState === 'develop'
              ? 'bg-gradient-to-r from-[#002f46] to-accent'
              : 'bg-gradient-to-r from-accent to-[#002f46]'
          }`}
        >
          <div className=" relative h-[334px] w-64">
            <img className="absolute inset-0  -top-[78px]" src={img} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

{
  /* <div
onClick={() => setShowStack(!showStack)}
// style={{ backgroundImage: `url(${img})` }}
className="liquid relative h-80 w-80 cursor-pointer border border-primary bg-cover text-sm font-semibold "
>
<div className=' relative'>
  <img className=' absolute top-0' src={img} alt="" />
</div>
{techStack.map(({ id, language, styles }) => {
  return (
    <span key={id} className={styles}>
      {language}
    </span>
  );
})}
</div> */
}
