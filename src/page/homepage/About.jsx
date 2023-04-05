import React from 'react';
import * as AiIcons from 'react-icons/ai';

export const About = () => {
  const socials = [
    // {
    //   icon: <AiIcons.AiOutlineGlobal size={30} />,
    //   link: '',
    // },
    {
      icon: <AiIcons.AiOutlineLinkedin size={30} />,
      link: 'https://www.linkedin.com/in/luke-nguyen-81337132/',
    },
    {
      icon: <AiIcons.AiFillGithub size={30} />,
      link: 'https://github.com/Luken1990',
    },
  ];

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'TailwindCSS',
    'Git/GitHub',
  ];

  return (
    <section id="about" className=" bg-primary">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col gap-20 sm:flex-row">
          <div className="flex-1">
            <h2 className="mb-10 text-3xl font-semibold leading-6 tracking-wide">
              My Journey
            </h2>
            <p>
              Designer turned Developer. As part of my previous job, I created
              digital assets for websites. Though I enjoyed my work, I always
              felt that I was missing out on the technical aspect of it. This is
              what drew me towards coding. As I began to explore coding, I
              became fascinated with the problem-solving aspect of it and how it
              allowed me to create things that were not previously possible.
            </p>
          </div>

          <div className="flex-1 overflow-hidden rounded-lg ">
            <h2 className="mb-10 text-3xl font-semibold leading-6 tracking-wide">
              Skills
            </h2>
            <div className="mb-8 flex flex-row flex-wrap gap-3 text-sm">
              {skills.map((skill, index) => {
                return (
                  <span
                    key={index}
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
                  <a target="blank" className="hover:text-accent" href={link}>
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
