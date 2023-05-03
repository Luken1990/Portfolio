import React from 'react';
import { portfolio } from './static Data/developmentProjects';
import * as BsIcons from 'react-icons/bs';
import { nanoid } from 'nanoid';
import { OtherProject } from './OtherProject';

export const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container mx-auto px-4 py-20">
        <p className="text-center text-sm text-slate-400">Browse my recent</p>
        <h2 className="text-center text-3xl font-semibold">Projects</h2>

        {portfolio.map(
          ({ project, img, gitHub, site, description, stack }, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project}
                className="my-16 flex flex-col items-center justify-between gap-20 sm:flex-row"
              >
                <div
                  className={`${
                    isEven ? 'order-first' : 'order-first sm:order-last '
                  } basis-1/2`}
                >
                  <h3 className=" mb-4 text-lg font-semibold">{project}</h3>
                  <p className="mb-4 text-base">{description}</p>

                  <div className="mb-8 flex flex-row gap-4">
                    {stack.map((item) => {
                      return <span key={nanoid()}>{item}</span>;
                    })}
                  </div>

                  <div className="flex gap-4 text-accent">
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

                <figure className={`basis-1/2`}>
                  <img src={img} alt="" />
                </figure>
              </div>
            );
          }
        )}
      </div>
      <OtherProject />
    </section>
  );
};
