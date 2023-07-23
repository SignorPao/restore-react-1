import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper";

import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: "Your luxury hotel for vacation",
    bg: Img1,
    btnText: "See our rooms",
  },
  {
    title: "Your luxury hotel for vacation",
    bg: Img2,
    btnText: "See our rooms",
  },
  {
    title: "Your luxury hotel for vacation",
    bg: Img3,
    btnText: "See our rooms",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      className="heroSlider h-[500px] lg:h-[800px]"
    >
      {slides.map((slide, index) => {
        const { title, bg, btnText } = slide;

        return (
          <SwiperSlide
            key={index}
            className="h-full relative flex justify-center items-center"
          >
            <div className="z-20 text-white text-center">
              <div className="uppercase font-tertiary tracking-[6px] mb-5">
                Just enjoy and relax
              </div>
              <h1 className="text-3xl lg:text-6xl font-primary uppercase tracking-[1px] lg:tracking-[2px] max-w-[920px] leading-tight mb-6">
                {title}
              </h1>
              <button className="btn btn-lg btn-primary mx-auto">
                <a href="#rooms">{btnText}</a>
              </button>
            </div>

            <div className="absolute top-0 w-full h-full">
              <img
                src={bg}
                alt="hero image"
                className="object-cover w-full h-full"
              />
            </div>

            <div className="absolute w-full h-full bg-black/50" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
