import * as SiIcons from 'react-icons/si';

//Funny animal range
import halloween from '../../../assets/images/design/Halloween.jpg';
import pugBday from '../../../assets/images/design/WATERPARK-PUG_Final.jpg';
import pugChristmas from '../../../assets/images/design/XS288-ARTWORK.jpg';
import pugCupcake from '../../../assets/images/design/PUG-CUPCAKE.jpg';
import penguinCarol from '../../../assets/images/design/PENGUIN-CAROL.jpg';
import dalmatian from '../../../assets/images/design/DALMATIAN-DOG.jpg';
import christmasCat from '../../../assets/images/design/Christmas_fireplace.jpg';
import meerKat from '../../../assets/images/design/Meerkats_taking_off.jpg';
import pizzaCat from '../../../assets/images/design/Pizza_cake_Cat.jpg';

// Welcome Leaflet
import hovLeaflet1 from '../../../assets/images/design/HOV_Leaflet_01.jpg';
import hovLeaflet2 from '../../../assets/images/design/HOV_Leaflet_02.jpg';
import mod from '../../../assets/images/design/mod.jpg';
import pen from '../../../assets/images/design/pen.jpg';
import pod from '../../../assets/images/design/pod.jpg';
import stepByStep from '../../../assets/images/design/StepbyStep.jpg';

//Photo Retouching
import nautilus from '../../../assets/images/design/Aspire_Nautilus.jpg';
import vaporessoMod from '../../../assets/images/design/Vaporesso_Mod.jpg';
import eleaf from '../../../assets/images/design/Eleaf.jpg';
import fuuLiquid from '../../../assets/images/design/Fuu_banner_1000x-1.jpg';
import aspireK1 from '../../../assets/images/design/Apire_K1_Stealth.jpg';

//Foil and Glitter Range
import christmasFoil from '../../../assets/images/design/christmas-card.jpg';
import mothersdayFoil from '../../../assets/images/design/mothersday-card.jpg';
import leavingFoil from '../../../assets/images/design/Sorry-You-are-Leaving.jpg';
import leavingBallonsFoil from "../../../assets/images/design/Sorry-You're-Leaving.jpg";
import weddingFoil from '../../../assets/images/design/On-Your-Wedding-02.jpg';
import congratulationFoil from '../../../assets/images/design/Congratulation-Card.jpg';

//Product Photography
import baristaBrew from '../../../assets/images/design/DSC02156.jpg';
import vaporessoDevice from '../../../assets/images/design/DSC06478-Edit.jpg';
import dodoLiquids from '../../../assets/images/design/DSC07841.jpg';
import ohmBoy from '../../../assets/images/design/DSC03161.jpg';
import vapeDevice from '../../../assets/images/design/DSC03461.jpg';
import cbd from '../../../assets/images/design/CBD.jpg';
import eLiquid from '../../../assets/images/design/E-Liquid.jpg';

//Intro Video
import inStore from '../../../assets/images/design/In-Store.jpg';

//Email Marketing
import shatteredGif from '../../../assets/images/design/MAY_WICK_HOV_001_EN.gif';
import attitudeGif from '../../../assets/images/design/JUNE_ATTITUDE_HOV_003_EN.gif';
import ruthlessGif from '../../../assets/images/design/JUNE_15_06_RUTHLESS_003_EN.gif';
import puffGif from '../../../assets/images/design/JUNE_15_06_PUFF_CREAM_003_EN.gif';

//Promo Material
import roomox from '../../../assets/images/design/ROOMOX-Lifestyle-Retouched.jpg';
import dyh1583 from '../../../assets/images/design/HERO2-DYH-1583_EN.jpg';
import dyh1608 from '../../../assets/images/design/DECEMBER_POST-PURCHASE-DYH-1608_EN.jpg';
import dyh1557 from '../../../assets/images/design/HERO-DYH-1557_EN.jpg';
import dyh466 from '../../../assets/images/design/HERO-RX-466-BANNER_EN.jpg';
import dyh492 from '../../../assets/images/design/HERO2-RX-492_EN.jpg';

export const designPortfolio = [
  {
    title: 'Funny Animal Range',
    coverIMG: pizzaCat,
    images: [
      pugChristmas,
      pugBday,
      pugCupcake,
      penguinCarol,
      dalmatian,
      meerKat,
      christmasCat,
      halloween,
    ],
    description: `A series of amusing animal-themed greeting cards using Photoshop manipulation. These cards are designed to be eye-catching and humorous, featuring animal images that have been creatively altered to make them appear comical and quirky. My greeting card designs have been published in several popular stores across the country, including Clinton Cards, Scribbler, and Card Galore.  `,
    company: 'Tracks Publishing Ltd',
    role: 'Junior Graphic Designer',
    software: [
      <SiIcons.SiAdobephotoshop size={30} />,
      <SiIcons.SiAdobeindesign size={30} />,
    ],
  },
  {
    title: 'Foil and Glitter Range',
    coverIMG: christmasFoil,
    images: [
      mothersdayFoil,
      leavingFoil,
      weddingFoil,
      congratulationFoil,
      leavingBallonsFoil,
    ],
    description:
      'A range of visually appealing greeting cards for different occasions using Illustrator vectors and InDesign that feature a variety of finishes such as cold foiling, glitter, and embossing. These distinctive greeting cards have been successfully published in several prominent stores across the nation, including renowned establishments such as Clinton Cards, Scribbler, and Card Galore.',
    company: 'Tracks Publishing Ltd',
    role: 'Junior Graphic Designer',
    software: [
      <SiIcons.SiAdobeillustrator size={30} />,
      <SiIcons.SiAdobephotoshop size={30} />,
    ],
  },
  {
    title: 'Welcome Leaflet',
    coverIMG: hovLeaflet1,
    images: [hovLeaflet2, mod, pen, pod, stepByStep],
    description:
      'The leaflet was designed to attract new users to the vaping community by providing clear and concise step-by-step instructions for getting started. In addition, the leaflet featured a loyalty card to encourage repeat business.',
    company: 'House of Vapes London',
    role: 'Graphic Designer, Photographer, Retoucher',
    software: [
      <SiIcons.SiAdobelightroom size={30} />,
      <SiIcons.SiAdobephotoshop size={30} />,
      <SiIcons.SiAdobeillustrator size={30} />,
      <SiIcons.SiAdobeindesign size={30} />,
    ],
  },
  {
    title: 'Photo Retouching',
    coverIMG: vaporessoMod,
    images: [nautilus, eleaf, fuuLiquid, aspireK1],
    description:
      'Product photography using DSLR cameras and Photoshop to capture and enhance high-quality images for web banners and email marketing campaigns. The retouching process includes adjusting brightness, contrast, and color balance, removing distractions, and adding text or graphics for a compelling final product. The result is a collection of optimized images that increase your online visibility and attract more customers.',
    company: 'House of Vapes London',
    role: 'Graphic Designer, Photographer, Retoucher',
    software: [
      <SiIcons.SiAdobelightroom size={30} />,
      <SiIcons.SiAdobephotoshop size={30} />,
    ],
  },
  {
    title: 'Introduction Video',
    coverIMG: inStore,
    videos: [
      'https://vimeo.com/814558192',
      'https://vimeo.com/814558216',
      'https://vimeo.com/814558232',
    ],
    description:
      'The objective of this project was to create three motion graphic videos using Adobe Illustrator and After Effects to showcase different vaping devices and tanks. The videos were designed to deconstruct each device, label different parts, and show how to use them. The project was aimed at attracting new users to vaping and was intended to be displayed in stores as part of a larger campaign.',
    company: 'House of Vapes London',
    role: 'Graphic Designer, Photographer, Retoucher',
    software: [
      <SiIcons.SiAdobeillustrator size={30} />,
      <SiIcons.SiAdobeaftereffects size={30} />,
    ],
  },
  {
    title: 'Email Marketing Campaign',
    coverIMG: shatteredGif,
    images: [attitudeGif, ruthlessGif, puffGif],
    description:
      'A series of visually engaging GIF images for weekly email marketing campaigns. The objective of the project was to promote new and upcoming product releases to a substantial customer base comprising tens of thousands of individuals.',
    company: 'House of Vapes London',
    role: 'Graphic Designer, Photographer, Retoucher',
    software: [
      <SiIcons.SiAdobeillustrator size={30} />,
      <SiIcons.SiAdobeaftereffects size={30} />,
    ],
  },
  {
    title: 'Product Photography',
    coverIMG: baristaBrew,
    images: [vapeDevice, vaporessoDevice, dodoLiquids, ohmBoy, cbd, eLiquid],
    description:
      'Weekly lifestyle pictures to promote new product releases on social media platforms, website banners, and email marketing campaign.',
    company: 'House of Vapes London',
    role: 'Graphic Designer, Photographer, Retoucher',
    software: [
      <SiIcons.SiAdobelightroom size={30} />,
      <SiIcons.SiAdobephotoshop size={30} />,
    ],
  },
  {
    title: 'Promotional Materials',
    coverIMG: roomox,
    images: [dyh1557, dyh1608, dyh466, dyh492, dyh1583],
    description:
      'Series of promotional images using Photoshop for social media, website banners, and email marketing campaign. The goal of the project was to increase brand awareness and drive engagement with their target audience. Each image was designed to be eye-catching and engaging, with a consistent color scheme and layout that maintained the brand identity.',
    company: 'Design Your Home',
    role: 'Digital Designer',
    software: [
      <SiIcons.SiAdobelightroom size={30} />,
      <SiIcons.SiAdobephotoshop size={30} />,
    ],
  },
];
