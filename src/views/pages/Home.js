import React from "react";
import Slider from "../../components/SlideShow";
import NewProduct from "../../components/NewProduct";
import "../../css/Home.css";

function Home() {
  return (
    <div>
      <Slider />
      <section className="py-24">
        <div className="container">
          <div className="flex flex-wrap -mx-[15px]">
            <div className="lg:w-1/3 sm:w-1/2 w-full px-[15px] pb-[15px]">
              <div className="relative img-hover_effect cursor-pointer">
                <div>
                  <a href="javacsript:void(0)">
                    <img
                      src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/banner/2-1.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 w-full px-[15px] pb-[15px]">
              <div className="relative img-hover_effect cursor-pointer">
                <div>
                  <a href="javacsript:void(0)">
                    <img
                      src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/banner/2-2.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 w-full px-[15px] pb-[15px]">
              <div className="relative img-hover_effect cursor-pointer">
                <div>
                  <a href="javacsript:void(0)">
                    <img
                      src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/banner/2-3.jpg"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <NewProduct />
      <section className="py-24">
        <div className="container">
          <div className="relative img-hover_effect">
            <div
              className="min-h-[330px] bg-cover lg:bg-center bg-left bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://demo.hasthemes.com/kenne-preview/kenne/assets/images/banner/2-6.jpg)",
              }}
            ></div>
            <div className="absolute top-1/2 sm:left-[20%] left-1/2 -translate-y-1/2 sm:-translate-x-0 -translate-x-1/2 text-center lg:w-auto w-full">
              <span className="text-red-500 font-medium pb-2.5 block tracking-[4px] uppercase">
                In-Store &amp; Online
              </span>
              <h3 className="lg:text-[28px] text-xl font-medium text-primary mb-6 tracking-[4px] leading-[1.2]">
                Men's Backpack
                <br />
                Wallets &amp; More!
              </h3>
              <div className="flex justify-center items-center">
                <a
                  href="javacsript:void(0)"
                  className="text-sm text-black lg:py-3 py-1 lg:px-8 px-6 uppercase block shadow bg-transparent border border-gray-400 hover:text-white hover:border-prihover hover:bg-prihover"
                >
                  Discover Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
