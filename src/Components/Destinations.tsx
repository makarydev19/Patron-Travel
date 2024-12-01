import React from 'react';
import DestinationCards from './Cards';
import { destinations } from '../Data/data';

const Destinations = () => {
  return (
    <section className="relative bg-green-950 flex flex-col items-center justify-center h-[110vh] rounded-[4rem] z-10 pt-20">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-5xl text-center text-white">
          Recommended <span className="text-lime-200">Popular</span> <br />{' '}
          Destinations
        </h1>
        <DestinationCards
          slides={destinations}
          width="70vw" // Custom width
          height="60vh" // Custom height
          initialSlide={2} // Set initial slide
          slidesPerView={3} // Display 3 slides at once
          effect="coverflow"
          rotate={20} // Set custom rotate for coverflow effect
          stretch={20} // Set custom stretch
          depth={150} // Set custom depth
          modifier={1.5} // Set custom modifier
          slideShadows={true} // Enable slide shadows
        />
      </div>
    </section>
  );
};

export default Destinations;
