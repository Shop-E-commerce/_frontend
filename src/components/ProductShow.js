import React from "react";
import StarProduct from "./StarProduct";

function ProductShow({ item, type = "grid" }) {
  return (
    <div className="px-[15px]">
      {type === "grid" ? (
        <div className="my-2.5">
          <div className="p-5 border border-gray-200 text-center overflow-hidden hover:shadow-md">
            <div className="relative text-center">
              <a href="#!" className="block text-primary">
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
                    borderColor: "transparent #242424 transparent transparent ",
                  }}
                ></span>
                Hot
              </span>
            </div>
            {item && (
              <div className="pt-[30px]">
                <div>
                  <h3 className="mb-2.5 text-base font-normal hover:text-secondary transition-none">
                    <a href="#!">{item.name}</a>
                  </h3>
                  <div>
                    <span className="text-secondary text-base">
                      ${item.newPrice}
                    </span>
                    <span className="text-gray-300 line-through text-sm ml-2.5">
                      ${item.oldPrice}
                    </span>
                  </div>
                  <div className="pt-2.5">
                    <StarProduct star={item.rating} color={"text-secondary"} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <div className="flex overflow-hidden px-[25px] pt-[25px] pb-[5px] border border-gray-300 bg-white mb-8 hover:shadow-md">
            <div className="relative w-[270px] flex-shrink">
              <a href="#!" className="block text-primary">
                <img
                  src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/product/medium-size/1-1.jpg"
                  alt=""
                  className="w-full"
                />
              </a>
            </div>
            <div className="pl-[15px] w-[calc(100%-270px)]">
              <div>
                <div className="pb-[5px]">
                  <span className="text-secondary text-base">
                    ${item.newPrice}
                  </span>
                  <span className="text-gray-300 line-through text-sm ml-2.5">
                    ${item.oldPrice}
                  </span>
                </div>
                <div className="mb-0 pb-2.5">
                  <a href="#!">{item.name}</a>
                </div>
                <div className="pb-[5px]">
                  <StarProduct star={item.rating} color={"text-secondary"} />
                </div>
                <div>
                  <p className="mb-0 pb-6">{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductShow;
