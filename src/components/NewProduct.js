import React from "react";
import StarProduct from "./StarProduct";
import { Swiper, SwiperSlide } from "swiper/react";

function NewProduct(props) {
  const products = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <div className="container">
        <div className="w-full">
          <div className="relative mb-[30px] flex justify-between items-center">
            <h3 className="text-primary text-[1.75rem] font-medium pr-6 z-[1] bg-white">
              New Product
            </h3>
            <div className="absolute h-[1px] w-full left-0 top-1/2 bg-gray-200 -translate-y-1/2"></div>
            <div className="pl-6 bg-white z-[1]">
              <button className="inline-block bg-gray-200 w-10 h-10 rounded-full mr-4 hover:bg-prihover hover:text-white swiper-new-product-prev disabled:cursor-not-allowed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="inline-block bg-gray-200 w-10 h-10 rounded-full hover:bg-prihover hover:text-white swiper-new-product-next disabled:cursor-not-allowed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            nextEl: ".swiper-new-product-next",
            prevEl: ".swiper-new-product-prev",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            580: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          className="w-full"
        >
          {products.map((product, index) => {
            return (
              <SwiperSlide
                className="my-2.5 border border-gray-200 p-5 hover:shadow-md"
                key={index}
              >
                <div className="relative text-center">
                  <a href="javacsript:void(0)" className="block text-primary">
                    <img
                      src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/1-1.jpg"
                      alt=""
                      className="w-full"
                    />
                    <img
                      src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/1-2.jpg"
                      alt=""
                      className="w-full absolute top-0 left-0 opacity-0 hover:opacity-100"
                    />
                  </a>
                  <span className="absolute top-0 left-auto right-0 text-white text-xs leading-6 px-2.5 text-center cursor-text uppercase bg-primary">
                    <span
                      className="absolute top-1/2 left-[-11px] right-auto -mt-1.5 border-[6px]"
                      style={{
                        borderColor:
                          "transparent #242424 transparent transparent ",
                      }}
                    ></span>
                    Hot
                  </span>
                </div>
                <div className="pt-[30px]">
                  <div>
                    <h3 className="text-base mb-2.5 text-primary">
                      <a href="javacsript:void(0)" className="text-primary">
                        Quibusdam ratione
                      </a>
                    </h3>
                    <div>
                      <span className="text-base text-red-500">$46.91</span>
                      <span className="text-sm ml-2.5 line-through text-gray-200">
                        $50.99
                      </span>
                    </div>
                    <div className="pt-2.5">
                      <StarProduct star={3.5} />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default NewProduct;
