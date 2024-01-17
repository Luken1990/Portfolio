import React, { useContext } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import { WebContext } from './Home';
import { nanoid } from 'nanoid';

export const About = () => {
  const [webState, setWebState] = useContext(WebContext);

  const socials = [
    {
      icon: <GrIcons.GrDocumentPdf size={30} />,
      link: 'https://drive.google.com/file/d/1iS6659VhSkTj-jJUTv_C2go5F4aKb8iP/view?usp=sharing',
    },
    {
      icon: <AiIcons.AiOutlineLinkedin size={30} />,
      link: 'https://www.linkedin.com/in/luke-nguyen-81337132/',
    },
    {
      icon: <AiIcons.AiFillGithub size={30} />,
      link: 'https://github.com/Luken1990',
    },
  ];

  const softSkills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'TailwindCSS',
    'Git/GitHub',
  ];

  const designSkills = ['LightRoom', 'Photohop', 'InDesign', 'Illustrator'];

  return (
    <section id="about" className=" bg-primary">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col gap-20 sm:flex-row">
          <div className="flex-1">
            <h2 className="mb-10 text-3xl font-semibold leading-6 tracking-wide">
              My Journey
            </h2>
            {webState === 'develop' ? (
              <p>
                Designer turned Developer. As part of my previous job, I created
                digital assets for websites. Though I enjoyed my work, I always
                felt that I was missing out on the technical aspect of it. This
                is what drew me towards coding. As I began to explore coding, I
                became fascinated with the problem-solving aspect of it and how
                it allowed me to create things that were not previously
                possible.
              </p>
            ) : (
              <p>
                Graphic designer with over 5+ years of experience in the
                industry. Starting out as a junior designer, I found my passion
                in designing greeting cards that were sold in renowned stores
                across the UK. Since then, I have expanded my skills to include
                product photography, image retouching, and email marketing.
              </p>
            )}
          </div>

          <div className="flex-1 overflow-hidden rounded-lg ">
            <h2 className="mb-10 text-3xl font-semibold leading-6 tracking-wide">
              Skills
            </h2>
            <div className="mb-8 flex flex-row flex-wrap gap-3 text-sm">
              {webState === 'develop'
                ? softSkills.map((skill) => {
                    return (
                      <span
                        key={nanoid()}
                        className="rounded-md bg-accent px-3 py-1 text-primary "
                      >
                        {skill}
                      </span>
                    );
                  })
                : designSkills.map((skill) => {
                    return (
                      <span
                        key={nanoid()}
                        className="rounded-md bg-accent px-3 py-1 text-primary "
                      >
                        {skill}
                      </span>
                    );
                  })}
            </div>
            <div className="flex flex-row gap-4">
              {socials.map(({ icon, link }, index) => {
                return (
                  <a
                    key={nanoid()}
                    target="blank"
                    className="hover:text-accent"
                    href={link}
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
