import React from "react";

function SearchBar(props) {
  // get props from parent
  const { open, onClick } = props;
  return (
    // if open is true, display search bar
    <div>
      <div
        className={`fixed top-0 right-0 h-full w-full z-[9999] duration-500 origin-left visible bg-gray-800 ${
          open ? "opacity-100 scale-x-100 left-auto" : "opacity-[.97] scale-x-0"
        }`}
      >
        <div className="container">
          <a
            href="javacsript:void(0)"
            onClick={onClick}
            className="absolute top-4 right-4 left-auto bg-transparent text-white hover:rotate-90 hover:text-prihover"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-14 w-14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </a>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[9] w-3/4">
            <form action="#" className="relative">
              <input
                type="text"
                className={`w-full text-white ${
                  open ? "scale-y-100" : "scale-y-0"
                } duration-[1.3s] pl-6 pr-[100px] leading-[100px] bg-[#333] outline-none`}
                placeholder="Search item..."
              />
              <button
                className="absolute top-1/2 right-[30px] -translate-y-1/2 bg-transparent text-white text-5xl "
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
