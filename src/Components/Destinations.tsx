import React from 'react';
import DestinationCards from './Cards';
import { destinations } from '../Data/data';

const Destinations = () => {
  return (
    <section className="lg:py-20 py-10 relative bg-green-950 flex flex-col items-center justify-center lg:h-[110vh] h-[95vh] rounded-[4rem] z-10 lg:pt-20 pt-0">
      <main className="w-full h-full flex flex-col items-center justify-center gap-y-10">
        <h1 className="text-5xl text-center text-white">
          Recommended <span className="text-lime-200">Popular</span> <br />
          Destinations
        </h1>
        <DestinationCards
          slides={destinations}
          initialSlide={2} // Set initial slide
          effect="coverflow"
          rotate={0} // Set custom rotate for coverflow effect
          stretch={20} // Set custom stretch
          depth={150} // Set custom depth
          modifier={1.5} // Set custom modifier
          slideShadows={true} // Enable slide shadows
        />
      </main>
    </section>
  );
};

export default Destinations;
