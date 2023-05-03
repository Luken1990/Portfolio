import { useState, useRef, useEffect } from 'react';
import { otherProjects } from './static Data/OtherProjects';
import * as BsIcons from 'react-icons/bs';
import { motion } from 'framer-motion';
import { nanoid } from 'nanoid';

export const OtherProject = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className="bg-black py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-slate-400">Other </p>
          <h2 className="text-3xl font-semibold">Projects / Apps</h2>
        </div>

        <motion.div
          ref={carousel}
          whileTap={{ cursor: 'grabbing' }}
          className=" my-16 cursor-grab overflow-hidden"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className=" flex flex-row flex-nowrap gap-8 "
          >
            {otherProjects.map(({ img, gitHub, site, project }) => {
              return (
                <motion.div
                  key={nanoid()}
                  className="h-full min-w-[100%]  sm:min-w-[calc(50%-16px)]  md:min-w-[calc(33.33%-32px)] "
                >
                  <figure className="overflow-hidden rounded-xl">
                    <img
                      className="pointer-events-none h-full w-full object-cover"
                      src={img}
                      alt=""
                    />
                  </figure>

                  <div className=" my-4">
                    <h3 className="mb-4 text-center text-lg font-semibold">
                      {project}
                    </h3>
                    <div className="flex justify-center gap-4 text-accent">
                      {gitHub ? (
                        <a
                          href={gitHub}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-md border-2 border-accent py-2 px-4 hover:bg-accent hover:text-white"
                        >
                          <BsIcons.BsGithub />
                          Code
                        </a>
                      ) : null}
                      {site ? (
                        <a
                          href={site}
                          target="_blank"
                          className="inline-flex items-center gap-2 rounded-md border-2 border-accent py-2 px-4 hover:bg-accent hover:text-white"
                        >
                          <BsIcons.BsGlobe />
                          Live
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

{
  /* <div className="grid grid-cols-3 gap-8 py-16 px-4">
{otherProjects.map(
  ({ project, img, gitHub, site, description, stack }) => {
    return (
      <div className=" rounded-md border border-white p-4">
        <figure className="h-80 w-full">
          <img
            className=" h-full w-full object-cover"
            src={img}
            alt=""
          />
        </figure>
        <div className=" my-4">
          <h3 className="mb-4 text-center text-lg font-semibold">
            {project}
          </h3>
          <div className="flex justify-center gap-4 text-accent">
            {gitHub ? (
              <a
                href={gitHub}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-md border-2 border-accent py-2 px-4 hover:bg-accent hover:text-white"
              >
                <BsIcons.BsGithub />
                Code
              </a>
            ) : null}
            {site ? (
              <a
                href={site}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-md border-2 border-accent py-2 px-4 hover:bg-accent hover:text-white"
              >
                <BsIcons.BsGlobe />
                Live
              </a>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
)}
</div> */
}
