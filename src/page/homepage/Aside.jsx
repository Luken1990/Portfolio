import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import * as AiIcons from 'react-icons/ai';
import ReactPlayer from 'react-player/vimeo';

export const Aside = ({ content, open, setOpen }) => {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#000] bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-3xl">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4"></div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                    <div className="relative px-4 sm:px-6">
                      <Dialog.Title className="text-darkestGrey mb-6 text-3xl font-semibold leading-6">
                        {content.title}
                      </Dialog.Title>
                      <button
                        type="button"
                        className="text-darkestGrey hover:text-midGrey absolute right-5 top-0 focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <AiIcons.AiOutlineClose
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      <div className="mb-6 flex flex-col gap-y-6 sm:flex-row">
                        <p className="text-textGrey w-full pr-6 text-sm leading-6 sm:w-4/6">
                          {content.description}
                        </p>
                        <ul className="text-lightGrey text-xs leading-6">
                          <li>
                            <span className=" font-semibold">Role:</span>{' '}
                            {content.role}
                          </li>
                          <li>
                            <span className=" font-semibold">Company:</span>{' '}
                            {content.company}
                          </li>
                        </ul>
                      </div>

                      <div id="tech-stack">
                        <h3 className="text-darkestGrey mb-3">Softwares:</h3>
                        <div className="mb-6 flex gap-3">
                          {content.software
                            ? content.software.map((item, index) => {
                                return (
                                  <span
                                    className="text-lightGrey hover:text-darkestGrey text-2xl"
                                    key={index}
                                  >
                                    {item}
                                  </span>
                                );
                              })
                            : null}
                        </div>
                      </div>

                      <div className="mb-3 w-full">
                        {content.coverIMG ? (
                          <img src={content.coverIMG} alt="" />
                        ) : null}
                      </div>

                      <div className="grid grid-cols-6 gap-3">
                        {content.images ? (
                          <>
                            {content.images.map((image, index) => {
                              const last = content.images.length - 1;
                              return (
                                <div
                                  className={`${
                                    last % 2 === 0 && index === last
                                      ? 'col-span-6'
                                      : 'col-span-3'
                                  } `}
                                >
                                  <img
                                    className="h-full w-full object-cover"
                                    src={image}
                                    alt=""
                                  />
                                </div>
                              );
                            })}
                          </>
                        ) : content.videos ? (
                          <>
                            {content.videos.map((video) => {
                              console.log(video);
                              return (
                                <div className="col-span-3 flex bg-black">
                                  <ReactPlayer
                                    url={video}
                                    className="h-full w-full"
                                    controls
                                  />
                                  '
                                </div>
                              );
                            })}
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
