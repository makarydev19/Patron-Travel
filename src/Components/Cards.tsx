import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow'; // Import styles for Coverflow
import 'swiper/css/navigation'; // Import navigation styles

// Define the type for the props
interface CardsProps {
  slides: {
    image: any; // The image URL should be a string
    title: string;
  }[];
  width?: string; // Custom width
  height?: string; // Custom height
  initialSlide?: number; // Initial slide index
  slidesPerView?: number | 'auto'; // Number of slides per view
  effect?: string; // Effect type (e.g., 'coverflow')
  rotate?: number; // Rotate value for coverflow effect
  stretch?: number; // Stretch value for coverflow effect
  depth?: number; // Depth for coverflow effect
  modifier?: number; // Effect modifier
  slideShadows?: boolean; // Enable slide shadows
}

const Cards: React.FC<CardsProps> = ({
  slides,
  width = '80%', // Default width is 80%
  height = '80%', // Default height is 80%
  initialSlide = 2, // Default initial slide is 2 (centered)
  slidesPerView = 'auto', // Default slidesPerView is auto
  effect = 'coverflow', // Default effect is coverflow
  rotate = 50, // Default rotate for coverflow effect
  stretch = 0, // Default stretch for coverflow effect
  depth = 100, // Default depth for coverflow effect
  modifier = 1, // Default modifier for coverflow effect
  slideShadows = true, // Default to show slide shadows
}) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Swiper
        effect={effect}
        grabCursor={true}
        centeredSlides={true} // Ensures the middle card is always centered
        slidesPerView={slidesPerView}
        initialSlide={initialSlide}
        coverflowEffect={{
          rotate, // Slide rotate in degrees
          stretch, // Stretch space between slides in px
          depth, // Depth offset in px (Z axis)
          modifier, // Effect multiplier
          slideShadows, // Enable slide shadows
        }}
        modules={[EffectCoverflow, Navigation]}
        className="w-full h-full"
        style={{ width, height }} // Apply custom width and height
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="rounded-xl shadow-lg overflow-hidden">
            <img src={slide.image} alt={slide.title} className="img" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center p-4 font-bold">
              {slide.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
