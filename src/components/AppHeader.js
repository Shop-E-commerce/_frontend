import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../css/AppHeader.css";
import Logo from "../assets/img/logo.png";
import SearchBar from "./SearchBar";
const AppHeader = () => {
  // set state
  const [search, setSearch] = React.useState(false);

  window.addEventListener("scroll", checkpageYOffset);
  window.addEventListener("onload", checkpageYOffset);
  // add class flex to class menu-sticky when window scroll or window offset > 300
  function checkpageYOffset() {
    let menu_sticky = document.querySelector(".menu-sticky");
    if (window.pageYOffset > 200) {
      menu_sticky.classList.add("animate-slideInDown");
    } else {
      menu_sticky.classList.remove("animate-slideInDown");
    }
  }

  function setSearchBar(e) {
    setSearch(e);
    if (e === false) {
      document.querySelector("body").classList.remove("overflow-hidden");
    } else {
      document.querySelector("body").classList.add("overflow-hidden");
    }
  }

  return (
    <header>
      <div className="container">
        <div className="lg:flex hidden items-center justify-between border-b border-gray-200">
          <div className="flex">
            <div className="relative py-3 pr-5 flex items-center hover:text-prihover cursor-pointer dr-currency">
              <span className="uppercase text-xs mr-2">currency</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <ul className="absolute top-full left-0 p-2.5 border border-gray-200 bg-white z-[99] scale-y-0 origin-top duration-200 w-36">
                <li className="text-xs text-primary pb-2.5 hover:text-prihover border-b border-gray-200">
                  <a
                    href="javacsript:void(0)"
                    className="px-[5px] whitespace-nowrap"
                  >
                    đ <span className="capitalize">VND</span>
                  </a>
                </li>
                <li className="text-xs text-primary pt-2.5 hover:text-prihover">
                  <a
                    href="javacsript:void(0)"
                    className="px-[5px] whitespace-nowrap"
                  >
                    $ <span className="capitalize">us dollar</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="relative py-3 pr-5 flex items-center hover:text-prihover cursor-pointer dr-language">
              <span className="uppercase text-xs mr-2">language</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <ul className="absolute top-full left-0 p-2.5 border border-gray-200 bg-white z-[99] scale-y-0 origin-top duration-200 w-36">
                <li className="text-xs text-primary pb-2.5 hover:text-prihover border-b border-gray-200">
                  <a
                    href="javacsript:void(0)"
                    className="px-[5px] whitespace-nowrap"
                  >
                    <span className="capitalize">English</span>
                  </a>
                </li>
                <li className="text-xs text-primary pt-2.5 hover:text-prihover">
                  <a
                    href="javacsript:void(0)"
                    className="px-[5px] whitespace-nowrap"
                  >
                    <span className="capitalize">Vietnamese</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <nav>
            <ul className="flex items-center justify-end text-xs">
              <li className="px-4 py-2 hover:text-prihover">
                <a href="javacsript:void(0)" className="capitalize">
                  wishlist
                </a>
              </li>
              <li className="px-4 py-2 hover:text-prihover">
                <a href="javacsript:void(0)" className="capitalize">
                  register or sign in
                </a>
              </li>
              <li className="px-4 py-2 hover:text-prihover">
                <a href="javacsript:void(0)" className="capitalize">
                  checkout
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex justify-between items-center py-[30px]">
          <div>
            <a href="javacsript:void(0)" className="text-primary">
              <img src={Logo} alt="Met Clothing" className="w-40" />
            </a>
          </div>
          <div className="md:flex hidden items-center">
            <div className="flex-shrink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <p className="text-sm text-primary">
                Call us
                <br />
                Free Support: +84 344 786 376
              </p>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-200 py-2.5 pr-10 pl-4 text-sm outline-none"
            />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer px-3 text-primary hover:text-prihover">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <div className="">
            <a
              href="#miniCart"
              className="relative border border-gray-200 pt-2.5 pb-2 px-3 flex items-center text-red-600"
            >
              <div className="lg:pr-2.5 lg:mr-2.5 lg:border-r border-gray-200">
                <span className="absolute -top-2.5 -left-2.5 w-6 h-6 leading-6 text-center rounded-full text-xs bg-red-600 text-white">
                  03
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <div className="lg:block hidden text-sm text-primary">
                <span className="capitalize mr-1">cart:</span>
                <span className="total-price">251.2</span>
              </div>
            </a>
          </div>
        </div>
        <nav className="lg:block hidden">
          <ul className="flex justify-center items-center text-sm">
            <li className="mr-10 text-primary hover:text-prihover">
              <Link className="py-5 uppercase flex items-center" to="/">
                Home
              </Link>
            </li>
            <li className="mr-10 text-primary hover:text-prihover">
              <Link className="py-5 uppercase flex items-center" to="/shop">
                Shop
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-[14px] w-[14px] ml-[5px]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
            </li>
            <li className="mr-10 text-primary hover:text-prihover">
              <Link className="py-5 uppercase flex items-center" to="/blog">
                Blog
              </Link>
            </li>
            <li className="mr-10 text-primary hover:text-prihover">
              <Link className="py-5 uppercase flex items-center" to="/about">
                About Us
              </Link>
            </li>
            <li className="mr-10 text-primary hover:text-prihover">
              <Link className="py-5 uppercase flex items-center" to="/contact">
                Contact us
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden fixed top-0 left-0 right-0 menu-sticky shadow-sm duration-300 z-[99] bg-white py-2">
          <div className="flex justify-between items-center container">
            <div className="px-4">
              <Link to="/">
                <img src={Logo} alt="Met Clothing" className="w-[120px]" />
              </Link>
            </div>
            <nav className="px-4 lg:block hidden">
              <ul className="flex justify-center items-center text-sm">
                <li className="mr-10 text-primary hover:text-prihover">
                  <Link to="/" className="py-5 uppercase flex items-center">
                    Home
                  </Link>
                </li>
                <li className="mr-10 text-primary hover:text-prihover">
                  <Link to="/shop" className="py-5 uppercase flex items-center">
                    shop
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-[14px] w-[14px] ml-[5px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </Link>
                </li>
                <li className="mr-10 text-primary hover:text-prihover">
                  <Link to="/blog" className="py-5 uppercase flex items-center">
                    Blog
                  </Link>
                </li>
                <li className="mr-10 text-primary hover:text-prihover">
                  <Link
                    to="/about"
                    className="py-5 uppercase flex items-center"
                  >
                    About us
                  </Link>
                </li>
                <li className="mr-10 text-primary hover:text-prihover">
                  <Link
                    to="/contact"
                    className="py-5 uppercase flex items-center"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="px-4 lg:w-1/4">
              <div className="flex justify-end items-center">
                <ul>
                  <li className="relative inline-block mr-4">
                    <a
                      href="#miniCart"
                      className="relative pt-2.5 pb-2 pl-3 flex items-center text-red-600"
                    >
                      <div>
                        <span className="absolute -top-1 -left-1 w-6 h-6 leading-6 text-center rounded-full text-xs bg-red-600 text-white">
                          03
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                          />
                        </svg>
                      </div>
                    </a>
                  </li>
                  <li className="inline-block mr-4 text-primary hover:text-prihover">
                    <a
                      href="#searhBar"
                      className=""
                      onClick={() => setSearchBar(!search)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <SearchBar open={search} onClick={() => setSearchBar(!search)} />
      </div>
    </header>
  );
};

export default AppHeader;
