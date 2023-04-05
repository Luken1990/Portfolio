import React, { useState } from 'react';
import { Aside } from './Aside';
import { designPortfolio } from './static Data/designPortfolio';

export const Design = () => {
  let [open, setOpen] = useState(false);
  const [content, setContent] = useState('');

  return (
    <>
      <section
        id="portfolio"
        className=" grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
      >
        {designPortfolio.map((item) => {
          return (
            <div
              onClick={() => {
                setOpen(true);
                setContent(item);
              }}
              key={item.id}
              style={{ backgroundImage: `url(${item.coverIMG})` }}
              className={`relative flex h-[50vh] flex-col items-center justify-center bg-cover bg-top text-white
               before:absolute before:h-full before:w-full before:bg-black before:opacity-60 before:duration-500 hover:before:opacity-0
              `}
            >
              <div className="z-10 text-center text-white">
                <p className="text-xs">{item.company}</p>
                <h1 className=" font-semibold">{item.title}</h1>
              </div>
            </div>
          );
        })}
      </section>
      <Aside content={content} open={open} setOpen={setOpen} />
    </>
  );
};
