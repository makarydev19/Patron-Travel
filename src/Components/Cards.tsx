import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

interface CardsProps {
  slides: {
    image: string;
    title: string;
  }[];
  initialSlide?: number;
  effect?: string;
  rotate?: number;
  stretch?: number;
  depth?: number;
  modifier?: number;
  slideShadows?: boolean;
}

const Cards: React.FC<CardsProps> = ({
  slides,
  initialSlide = 2,
  effect = 'coverflow',
  rotate = 50,
  stretch = 0,
  depth = 100,
  modifier = 1,
  slideShadows = true,
}) => {
  return (
    <div className="w-full flex items-center justify-center">
      <Swiper
        effect={effect}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={initialSlide}
        coverflowEffect={{
          rotate,
          stretch,
          depth,
          modifier,
          slideShadows,
        }}
        modules={[EffectCoverflow, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        className="
          w-[100vw] h-[40vh]
          md:w-[80vw] md:h-[70vh]
          lg:w-[80vw] lg:h-[70vh]
        "
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i} className="rounded-xl shadow-lg overflow-hidden">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute w-full h-[80vh] bottom-[-20vh] bg-gradient-to-t from-black/70 to-transparent z-0" />
            <div className="absolute bottom-0 left-0 right-0 text-white text-center p-4 font-bold">
              {slide.title}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Cards;
