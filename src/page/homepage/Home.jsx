import { createContext, useState } from 'react';
import { Portfolio } from './Portfolio';
import { Hero } from './Hero';
import { About } from './About';
import { Design } from './Design';
import { Contact } from './Contact';

export const WebContext = createContext();

export const Home = () => {
  const [webState, setWebState] = useState('design');

  return (
    <main>
      <WebContext.Provider value={[webState, setWebState]}>
        <Hero />
        <About />
        {webState === 'develop' ? <Portfolio /> : <Design />}
      </WebContext.Provider>
      <Contact />
    </main>
  );
};
