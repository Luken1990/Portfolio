import bloggin from '../../../assets/images/development/bloggin.png';
import MFJ from '../../../assets/images/development/MFJ.png';
import NF from '../../../assets/images/development/NF.png';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

export const portfolio = [
  {
    project: 'Bloggin.',
    img: bloggin,
    gitHub: 'https://github.com/Luken1990/bloggIn',
    site: 'https://bloggin-ncif.onrender.com/',
    description: `Fullstack MERN (MongoDB, Express, React, Node.js) blog application that allows users to create, read, update, and delete blog posts.`,
    stack: [
      <AiIcons.AiOutlineHtml5 size={30} />,
      <FaIcons.FaCss3Alt size={30} />,
      <SiIcons.SiTailwindcss size={30} />,
      <FaIcons.FaReact size={30} />,
      <FaIcons.FaNodeJs size={30} />,
      <SiIcons.SiMongodb size={30} />,
    ],
  },
  {
    project: 'MFJ',
    img: MFJ,
    gitHub: 'https://github.com/Luken1990/MyFirstJob.com/tree/master',
    site: '',
    description: `My first Job site provides real-time job listings, which are displayed on the app's interface, allowing users to filter their search results based on various parameters such as location, job title, salary, and more.`,
    stack: [
      <AiIcons.AiOutlineHtml5 size={30} />,
      <FaIcons.FaCss3Alt size={30} />,
      <SiIcons.SiTailwindcss size={30} />,
      <FaIcons.FaReact size={30} />,
    ],
  },
  {
    project: 'WeightLifers',
    img: NF,
    gitHub: 'https://github.com/Luken1990/Fitness-Site',
    site: '',
    description: `Weightlifting hobby website designed to showcase frontend skills using HTML, CSS, and JavaScript. The website allows users to browse through different sections such as blog articles, workout routines, and links to important lifting techniques. Users can click on an article and save it for later using session storage. The focus of this project is to demonstrate a visually appealing, responsive, and easy-to-use frontend design.`,
    stack: [
      <AiIcons.AiOutlineHtml5 size={30} />,
      <FaIcons.FaCss3Alt size={30} />,
      <SiIcons.SiJavascript size={30} />,
    ],
  },
];

// {
//   project: 'NeverFold',
//   img: NF,
//   gitHub: 'https://github.com/Luken1990/Fitness-Site',
//   site: '',
//   description: `Built with React and TailwindCSS is a platform designed to provide users with an engaging and intuitive experience for booking personal training sessions and keeping up to date with the latest exercise trends. Users can browse a library of blog articles and get valuable insights into fitness topics, as well as search for personal trainers and book sessions that fit their schedule.`,
//   stack: [
//     <AiIcons.AiOutlineHtml5 size={30} />,
//     <FaIcons.FaCss3Alt size={30} />,
//     <SiIcons.SiTailwindcss size={30} />,
//     <FaIcons.FaReact size={30} />,
//   ],
// },
