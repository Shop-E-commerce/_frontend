import React from "react";
import Logo from "../assets/img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
function AppFooter() {
  return (
    <footer className="bg-gray-100">
      <div className="py-24">
        <div className="container">
          <div className="flex flex-wrap items-end">
            <div className="lg:w-5/12 w-full px-4">
              <div className="lg:mb-0 mb-8">
                <div className="pb-6">
                  <a href="javacsript:void(0)" className="text-primary">
                    <img src={Logo} alt="" />
                  </a>
                </div>
                <p className="mb-4">
                  Subscribe to our newsleter, Enter your emil address
                </p>
                <div>
                  <form action="#">
                    <div className="relative">
                      <input
                        type="email"
                        className="border border-gray-200 h-12 w-full pr-[70px] pl-5 outline-none"
                        placeholder="Enter email address"
                        autoComplete="off"
                      />
                      <button className="absolute text-xl top-0 right-0 w-12 h-12 leading-[48px] text-center bg-red-500 hover:bg-gray-700">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="text-white"
                        />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="lg:w-6/12 w-full ml-auto px-4">
              <div className="flex flex-wrap">
                <div className="sm:w-1/3 w-full px-[15px] sm:mb-0 mb-5">
                  <div>
                    <h4 className="pb-10 text-[22px] text-primary font-medium">
                      Shopping
                    </h4>
                  </div>
                  <div>
                    <ul>
                      <li className="pb-2.5">
                        <a
                          href="javacsript:void(0)"
                          className="pl-0 text-sm hover:pl-2 hover:text-prihover capitalize"
                        >
                          Product
                        </a>
                      </li>
                      <li className="pb-2.5">
                        <a
                          href="javacsript:void(0)"
                          className="pl-0 text-sm hover:pl-2 hover:text-prihover capitalize"
                        >
                          My Cart
                        </a>
                      </li>
                      <li className="pb-2.5">
                        <a
                          href="javacsript:void(0)"
                          className="pl-0 text-sm hover:pl-2 hover:text-prihover capitalize"
                        >
                          Wishlist
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javacsript:void(0)"
                          className="pl-0 text-sm hover:pl-2 hover:text-prihover capitalize"
                        >
                          Cart
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sm:w-1/3 w-full px-[15px] sm:mb-0 mb-5">
                  <div>
                    <h4 className="pb-10 text-[22px] text-primary font-medium">
                      Account
                    </h4>
                  </div>
                  <div>
                    <ul>
                      <li className="pb-2.5">
                        <a
                          href="javacsript:void(0)"
                          className="pl-0 text-sm hover:pl-2 hover:text-prihover capitalize"
                        >
                          Login
                        </a>
                      </li>
                      <li className="pb-2.5">
                        <a
                          href="javacsript:void(0)"
                          className="pl-0 text-sm hover:pl-2 hover:text-prihover capitalize"
                        >
                          Register
                        </a>
                      </li>
                      <li className="pb-2.5">
                        <a
                          href="javacsript:void(0)"
                          className="pl-0 text-sm hover:pl-2 hover:text-prihover capitalize"
                        >
                          help
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javacsript:void(0)"
                          className="pl-0 text-sm hover:pl-2 hover:text-prihover capitalize"
                        >
                          support
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sm:w-1/3 w-full px-[15px]">
                  <div>
                    <h4 className="pb-10 text-[22px] text-primary font-medium">
                      Categories
                    </h4>
                  </div>
                  <div>
                    <ul>
                      <li className="pb-2.5">
                        <a
                          href="javacsript:void(0)"
                          className="pl-0 text-sm hover:pl-2 hover:text-prihover capitalize"
                        >
                          Men
                        </a>
                      </li>
                      <li className="pb-2.5">
                        <a
                          href="javacsript:void(0)"
                          className="pl-0 text-sm hover:pl-2 hover:text-prihover capitalize"
                        >
                          Women
                        </a>
                      </li>
                      <li className="pb-2.5">
                        <a
                          href="javacsript:void(0)"
                          className="pl-0 text-sm hover:pl-2 hover:text-prihover capitalize"
                        >
                          Jeans
                        </a>
                      </li>
                      <li className="">
                        <a
                          href="javacsript:void(0)"
                          className="pl-0 text-sm hover:pl-2 hover:text-prihover capitalize"
                        >
                          Shoes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 border-t border-gray-300">
        <div className="container lg:px-4 px-0">
          <div className="flex flex-wrap items-center">
            <div className="lg:w-1/2 w-full px-[15px]">
              <div className="text-sm leading-[30px] lg:text-left text-center">
                <span>
                  Copyright © {new Date().getFullYear()}{" "}
                  <a
                    href="javacsript:void(0)"
                    className="capitalize hover:text-prihover hover:underline"
                  >
                    met clothing.
                  </a>
                  &nbsp;All rights reserved.
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-[15px]">
              <div className="sm:mt-0 mt-2">
                <img
                  src="https://demo.hasthemes.com/kenne-preview/kenne/assets/images/footer/payment/1.png"
                  alt=""
                  className="lg:mr-0 mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default AppFooter;
