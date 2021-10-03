import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../css/SlideShow.css";

import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
SwiperCore.use([Autoplay, EffectFade, Navigation]);

function SimpleSlider() {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      centeredSlides={true}
      effect={"fade"}
      loop={true}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      className="relative min-w-full"
      onInit={checkArrow}
      onResize={checkArrow}
    >
      <div className="swiper-button-prev"></div>
      <SwiperSlide className="relative lg:min-h-[695px] md:min-h-[430px] min-h-[380px] bg-4 bg-cover lg:bg-center bg-left bg-no-repeat">
        {({ isActive }) => (
          <React.Fragment>
            <div
              className={`absolute top-0 left-0 h-1.5 opacity-80 z-[4] bg-gray-700 bg-opacity-30 ${
                isActive ? "animate-timebar" : "animate-initial"
              }`}
            ></div>
            <div className="container">
              <div className="absolute top-1/2 left-auto -translate-y-1/2 slide-animation-01">
                <span
                  className={`block lg:text-lg text-sm pb-4 ${
                    isActive ? "animate-fadeInLeft" : ""
                  }`}
                >
                  Exclusive Offer -10% Off This Week
                </span>
                <h2
                  className={`block lg:text-6xl md:text-[40px] text-[30px] font-normal mb-[30px] leading-[1.2] ${
                    isActive ? "animate-fadeInLeft" : ""
                  }`}
                >
                  Stylist
                  <br />
                  Female Clothes
                </h2>
                <p
                  className={`block max-w-full lg:mb-[95px] mb-[30px] lg:text-base text-sm ${
                    isActive ? "animate-fadeInLeft" : ""
                  }`}
                >
                  Made from Soft, Durable, US-grown Supima cotton.
                </p>
                <div>
                  <a
                    href="javacsript:void(0)"
                    className={`inline-block text-base lg:px-8 px-6 lg:py-3 py-1 rounded-3xl text-center uppercase border border-primary bg-primary text-white hover:bg-prihover hover:border-prihover ${
                      isActive ? "animate-fadeInLeft" : ""
                    }`}
                  >
                    shop now
                  </a>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </SwiperSlide>
      <SwiperSlide className="relative lg:min-h-[695px] md:min-h-[430px] min-h-[380px] bg-5 bg-cover bg-center bg-no-repeat">
        {({ isActive }) => (
          <React.Fragment>
            <div
              className={`absolute top-0 left-0 h-1.5 opacity-80 z-[4] bg-gray-700 bg-opacity-30 ${
                isActive ? "animate-timebar" : "animate-initial"
              }`}
            ></div>
            <div className="container">
              <div className="absolute top-1/2 left-auto -translate-y-1/2 slide-animation-01">
                <span
                  className={`block lg:text-lg text-sm pb-4 ${
                    isActive ? "animate-fadeInLeft" : ""
                  }`}
                >
                  Exclusive Offer -10% Off This Week
                </span>
                <h2
                  className={`block lg:text-6xl md:text-[40px] text-[30px] font-normal mb-[30px] leading-[1.2] ${
                    isActive ? "animate-fadeInLeft" : ""
                  }`}
                >
                  Stylist
                  <br />
                  Female Clothes
                </h2>
                <p
                  className={`block max-w-full lg:mb-[95px] mb-[30px] lg:text-base text-sm ${
                    isActive ? "animate-fadeInLeft" : ""
                  }`}
                >
                  Made from Soft, Durable, US-grown Supima cotton.
                </p>
                <div>
                  <a
                    href="javacsript:void(0)"
                    className={`inline-block text-base lg:px-8 px-6 lg:py-3 py-1 rounded-3xl text-center uppercase border border-primary bg-primary text-white hover:bg-prihover hover:border-prihover ${
                      isActive ? "animate-fadeInLeft" : ""
                    }`}
                  >
                    shop now
                  </a>
                </div>
              </div>
            </div>
          </React.Fragment>
        )}
      </SwiperSlide>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
}

function checkArrow() {
  var swiperPrev = document.querySelector(".swiper-button-prev");
  var swiperNext = document.querySelector(".swiper-button-next");
  if (window.innerWidth < 1024) {
    swiperPrev.style.display = "none";
    swiperNext.style.display = "none";
  } else {
    swiperPrev.style.display = "flex";
    swiperNext.style.display = "flex";
  }
}

export default SimpleSlider;
