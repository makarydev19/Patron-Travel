import React from 'react';
import { landingContent } from '../Data/data';
import Cover from '../assets/images/cover.jpg';
import Button from './Button';

const Landing = () => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={Cover}
        alt="Cover Background"
        className="absolute inset-0 w-full h-[120vh] object-cover -z-10"
      />
      {/* Top-to-Bottom Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-transparent h-3/4 z-0" />
      {/* Bottom-to-Top Overlay */}
      <div className="absolute w-full lg:h-[50vh] h-[90vh] bottom-[-20vh] bg-gradient-to-t from-black/70 to-transparent z-0" />
      {/* Content */}
      <main className="relative z-10 lg:py-40 py-48 lg:px-28 px-10 mx-auto h-full">
        <div className="flex flex-col gap-9 justify-start">
          <h1 className="lg:text-6xl text-5xl text-slate-100 font-bold">
            Explore the world with <br /> exciting people
          </h1>
          <h3 className="text-white text-xl tracking-wide">
            We help people to find ideal company for join trips
          </h3>
          <div className="self-start">
            <Button
              text="Start your trips"
              onClick={() => console.log('Button Clicked!')}
              icon={
                <svg
                  className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                  viewBox="0 0 16 19"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                    className="fill-gray-800 group-hover:fill-gray-800"
                  ></path>
                </svg>
              }
            />
          </div>
          <div className="relative z-10 pt-5 lg:block hidden">
            <hr />
            <ul className="flex lg:flex-row flex-col items-center justify-center gap-x-12">
              {landingContent.map((content) => (
                <li key={content.num} className="w-full space-y-2">
                  <span className="text-2xl font-bold text-white">
                    0{content.num}
                  </span>
                  <h2 className="text-white font-bold text-lg text-nowrap">
                    {content.title}
                  </h2>
                  <p className="line-clamp-2 text-white text-sm">
                    {content.subtitle}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Landing;
