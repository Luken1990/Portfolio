import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import hangman from '../../../assets/images/development/OtherProject/Hangman.jpg';
import instaClone from '../../../assets/images/development/OtherProject/InstaClone.jpg';
import unjumble from '../../../assets/images/development/OtherProject/unjumble.jpg';
import TodoLi from '../../../assets/images/development/OtherProject/todoLi_login.jpg';

export const otherProjects = [
  {
    project: 'Unjumble',
    img: unjumble,
    gitHub: 'https://github.com/Luken1990/unJumble',
    site: 'https://unjumble.netlify.app/',
    description: `Frontend project that utilizes React functional components to create a responsive clone of the Instagram interface. `,
    stack: [
      <AiIcons.AiOutlineHtml5 size={30} />,
      <FaIcons.FaCss3Alt size={30} />,
      <FaIcons.FaReact size={30} />,
    ],
  },
  {
    project: 'TodoLi',
    img: TodoLi,
    gitHub: 'https://github.com/Luken1990/bloggIn',
    site: '',
    description: `Full-stack web application designed to help users manage their daily tasks efficiently. The application allows users to create an account, log in, and create, edit, and delete tasks. JWT authentication is used to ensure secure user authentication and access control to the application`,
    stack: [
      <AiIcons.AiOutlineHtml5 size={30} />,
      <FaIcons.FaCss3Alt size={30} />,
      <FaIcons.FaReact size={30} />,
      <FaIcons.FaNodeJs size={30} />,
      <SiIcons.SiMongodb size={30} />,
    ],
  },
  {
    project: 'Hangman',
    img: hangman,
    gitHub: 'https://github.com/Luken1990/Hangman',
    site: 'https://hangman-2rqo.onrender.com/',
    description: `The application is built using React and Redux to manage state and user interactions. Upon opening the application, the user is presented with a blank word and a set of buttons representing each letter of the alphabet. The user can click on a button to guess a letter, and if the letter is present in the word, it will be revealed in the correct position(s). If the letter is not present, the user will lose a life and a part of the hangman will be drawn on the screen.`,
    stack: [
      <AiIcons.AiOutlineHtml5 size={30} />,
      <FaIcons.FaCss3Alt size={30} />,
      <FaIcons.FaReact size={30} />,
      <SiIcons.SiRedux size={30} />,
    ],
  },
  // {
  //   project: 'Instagram Clone',
  //   img: instaClone,
  //   gitHub: 'https://github.com/Luken1990/bloggIn',
  //   site: '',
  //   description: `Frontend project that utilizes React functional components to create a responsive clone of the Instagram interface. `,
  //   stack: [
  //     <AiIcons.AiOutlineHtml5 size={30} />,
  //     <FaIcons.FaCss3Alt size={30} />,
  //     <FaIcons.FaReact size={30} />,
  //   ],
  // },
];
