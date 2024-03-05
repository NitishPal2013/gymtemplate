"use client";
import React from 'react'
import Navigation from './navigation';
import Link from 'next/link';

export function HomePage() {
  return (
    <>
      <div
        className="relative h-screen pt-16 pb-32 flex content-center items-center justify-center"
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover bg-[url('../../public/close-up-barbell-gym.jpg')]"
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto" data-aos="fade-in">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <h1 className="text-white font-semibold text-5xl">
                Welcome to <span className="text-orange-500">Us Gynasium</span>
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Welcome to the Us Gynasium. We are a fitness and training center that focuses on pushing you to your absolute limit. Get in touch with us Today!
              </p>
              <Link href="#contact" className="bg-transparent hover:bg-orange-500 text-orange-500 font-semibold hover:text-white p-4 border border-orange-500 hover:border-transparent rounded inline-block mt-10 cursor-pointer transition">Contact Us</Link>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]"
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>
    </>
  );
}

export default HomePage