import React from 'react';
import DestinationCards from './Cards';
import { destinations } from '../Data/data';

const Destinations = () => {
  return (
    <section className="relative bg-green-900 flex items-center justify-center h-[100vh] rounded-[4rem] z-10">
      <div className="w-full h-full flex items-center justify-center">
        <DestinationCards
          slides={destinations}
          width="60rem" // Custom width
          height="50%" // Custom height
          initialSlide={1} // Set initial slide
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
