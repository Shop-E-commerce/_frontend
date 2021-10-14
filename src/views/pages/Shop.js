import React from "react";
import { useState } from "react";
import bannerShop from "../../assets/img/shop-banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faThList } from "@fortawesome/free-solid-svg-icons";
import ProductShow from "../../components/ProductShow";

const lists = [
  "Default sorting",
  "Name, A to Z",
  "Name, Z to A",
  "Price, low to high",
  "Price, high to low",
  "Rating",
];
const products = [
  {
    id: 1,
    name: "A",
    newPrice: "10",
    oldPrice: "20",
    image: "https://via.placeholder.com/300x300",
    image2: "https://via.placeholder.com/300x300",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 2,
    name: "C",
    newPrice: "20",
    oldPrice: "30",
    image: "https://via.placeholder.com/300x300",
    image2: "https://via.placeholder.com/300x300",
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 3,
    name: "B",
    newPrice: "30",
    oldPrice: "40",
    image: "https://via.placeholder.com/300x300",
    image2: "https://via.placeholder.com/300x300",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 4,
    name: "E",
    newPrice: "40",
    oldPrice: "50",
    image: "https://via.placeholder.com/300x300",
    image2: "https://via.placeholder.com/300x300",
    rating: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: 5,
    name: "D",
    newPrice: "50",
    oldPrice: "60",
    image: "https://via.placeholder.com/300x300",
    image2: "https://via.placeholder.com/300x300",
    rating: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];
function Shop() {
  const [sort, setSort] = useState(lists[0]);

  const [optionSort, setOptionSort] = useState(false);

  const [list, setList] = useState(products);

  const [view, setView] = useState("grid");

  function handleSort(item) {
    setSort(item);
    const newList = [...list];
    switch (item) {
      case lists[1]:
        newList.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        break;
      case lists[2]:
        newList.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
        break;
      case lists[3]:
        newList.sort((a, b) => {
          if (a.newPrice > b.newPrice) return 1;
          if (a.newPrice < b.newPrice) return -1;
          return 0;
        });
        break;
      case lists[4]:
        newList.sort((a, b) => {
          if (a.newPrice < b.newPrice) return 1;
          if (a.newPrice > b.newPrice) return -1;
          return 0;
        });
        break;
      case lists[5]:
        newList.sort((a, b) => {
          if (a.rating > b.rating) return 1;
          if (a.rating < b.rating) return -1;
          return 0;
        });
        break;
      default:
        newList.sort((a, b) => {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        });
        break;
    }
    setList(newList);
  }

  return (
    <React.Fragment>
      <div
        className="relative bg-cover bg-center bg-no-repeat min-h-[225px]"
        style={{
          backgroundImage: `url(${bannerShop})`,
        }}
      >
        <div className="container">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <h2>
              <span className="font-bold text-4xl">Shop</span>
            </h2>
          </div>
        </div>
      </div>
      <section className="py-24">
        <div className="container">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full xl:w-9/12 lg:w-8/12 px-[15px]">
              <div className="md:flex justify-between pb-6">
                <div className="flex items-center md:justify-start justify-center">
                  <a
                    href="#!"
                    className={`inline-block cursor-pointer text-2xl pr-2.5 duration-150 ${
                      view === "grid" ? "text-[#a8741a]" : ""
                    }`}
                    onClick={() => setView("grid")}
                  >
                    <FontAwesomeIcon icon={faTh} />
                  </a>
                  <a
                    href="#!"
                    className={`inline-block cursor-pointer text-2xl duration-150 ${
                      view === "list" ? "text-[#a8741a]" : ""
                    }`}
                    onClick={() => setView("list")}
                  >
                    <FontAwesomeIcon icon={faThList} />
                  </a>
                </div>
                <div className="flex items-center md:justify-start justify-center md:pt-0 pt-6">
                  <p>Showing {list.length} results</p>
                </div>
                <div className="flex md:justify-start justify-center md:pt-0 pt-6">
                  <div className="flex items-center">
                    <label className="pr-6">Sort by:</label>
                    <select className="hidden">
                      {lists.map((item, index) => (
                        <option key={index} value={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                    <div className="w-auto whitespace-nowrap select-none text-left relative outline-none leading-10 float-left block cursor-pointer clear-both border border-gray-200 rounded bg-white min-w-[220px]">
                      <span
                        className="px-[60px] inline-block leading-10 h-10"
                        onClick={() => {
                          setOptionSort(!optionSort);
                        }}
                      >
                        {sort}
                      </span>
                      <ul
                        className={`absolute top-full left-0 origin-top-right p-0 overflow-hidden mt-1 shadow-md rounded bg-white w-full z-[999] duration-150 ${
                          optionSort
                            ? "opacity-100 scale-x-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 scale-75 -translate-y-[21px] pointer-events-none"
                        }`}
                      >
                        {lists.map((item, index) => (
                          <li
                            key={index}
                            data-value={index}
                            className="cursor-pointer leading-10 min-h-[40px] outline-none pl-4 pr-7 text-left duration-200 hover:bg-gray-300"
                            onClick={() => {
                              handleSort(item);
                              setOptionSort(false);
                            }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div
                        className={`absolute top-1/2 right-3 w-[5px] h-[5px] -mt-0.5 pointer-events-none origin-[66%] border-b-2 border-r-2 border-gray-500 ${
                          optionSort ? "rotate-[-135deg]" : "rotate-45"
                        }`}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${
                  view === "grid"
                    ? "grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1"
                    : "block"
                } mx-[-15px]`}
              >
                {list.map((item, index) => (
                  <ProductShow key={index} item={item} type={view} />
                ))}
              </div>
            </div>
            <div className="w-full xl:w-3/12 lg:w-4/12 px-[15px]">
              <h2 className="bg-red-200">b</h2>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Shop;
