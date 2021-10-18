import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faThList } from "@fortawesome/free-solid-svg-icons";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import "../../css/InputRange.css";
import ProductShow from "../../components/ProductShow";
import bannerShop from "../../assets/img/shop-banner.jpg";

const listOptionSort = [
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
    name: "Expedita excepturi",
    newPrice: "10",
    oldPrice: "20",
    image: "https://via.placeholder.com/300x300",
    image2: "https://via.placeholder.com/300x300",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    id_color: 1,
  },
  {
    id: 2,
    name: "Quibusdam ratione",
    newPrice: "20",
    oldPrice: "30",
    image: "https://via.placeholder.com/300x300",
    image2: "https://via.placeholder.com/300x300",
    rating: 3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    id_color: 2,
  },
  {
    id: 3,
    name: "Quibusdam ratione",
    newPrice: "30",
    oldPrice: "40",
    image: "https://via.placeholder.com/300x300",
    image2: "https://via.placeholder.com/300x300",
    rating: 5,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    id_color: 3,
  },
  {
    id: 4,
    name: "Facere molestias",
    newPrice: "40",
    oldPrice: "50",
    image: "https://via.placeholder.com/300x300",
    image2: "https://via.placeholder.com/300x300",
    rating: 2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    id_color: 4,
  },
  {
    id: 5,
    name: "Rem voluptate",
    newPrice: "50",
    oldPrice: "60",
    image: "https://via.placeholder.com/300x300",
    image2: "https://via.placeholder.com/300x300",
    rating: 1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    id_color: 1,
  },
];
const categories = [
  {
    id: 1,
    name: "Fashion",
    subCategories: [
      {
        id: 1,
        name: "Sub-Fashion 1",
      },
      {
        id: 2,
        name: "Sub-Fashion 2",
      },
    ],
  },
  {
    id: 2,
    name: "Electronics",
  },
  {
    id: 3,
    name: "Home & Garden",
    subCategories: [
      {
        id: 1,
        name: "Sub-Home & Garden 1",
      },
      {
        id: 2,
        name: "Sub-Home & Garden 2",
      },
    ],
  },
];
const colors = [
  {
    id: 1,
    name: "Red",
  },
  {
    id: 2,
    name: "Blue",
  },
  {
    id: 3,
    name: "Green",
  },
  {
    id: 4,
    name: "Yellow",
  },
];
function Shop() {
  const [sort, setSort] = useState(listOptionSort[0]);

  const [optionSort, setOptionSort] = useState(false);

  const [listProduct, setListProduct] = useState(products);

  const [view, setView] = useState("grid");

  const [range, setRange] = useState({
    min: 0,
    max: 50,
  });

  const [price, setPrice] = useState(() => `$${range.min} - $${range.max}`);

  const [showSubCat, setShowSubCat] = useState({ show: false });

  const [fieldFilter, setFieldFilter] = useState({
    price: {
      min: 0,
      max: 50,
    },
    color: null,
    category: [],
  });
  function handleSort(item) {
    setSort(item);
    const newList = [...listProduct];
    switch (item) {
      case listOptionSort[1]:
        newList.sort((a, b) => {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        });
        break;
      case listOptionSort[2]:
        newList.sort((a, b) => {
          if (a.name < b.name) return 1;
          if (a.name > b.name) return -1;
          return 0;
        });
        break;
      case listOptionSort[3]:
        newList.sort((a, b) => {
          if (a.newPrice > b.newPrice) return 1;
          if (a.newPrice < b.newPrice) return -1;
          return 0;
        });
        break;
      case listOptionSort[4]:
        newList.sort((a, b) => {
          if (a.newPrice < b.newPrice) return 1;
          if (a.newPrice > b.newPrice) return -1;
          return 0;
        });
        break;
      case listOptionSort[5]:
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
    setListProduct(newList);
  }

  function handleShowSubCat(val, index) {
    setShowSubCat({
      show: val,
      id: index,
    });
  }

  useEffect(() => {
    const newList = [...products];
    const fieldPrice = newList.filter(
      (item) =>
        item.newPrice >= fieldFilter.price.min &&
        item.newPrice <= fieldFilter.price.max
    );
    const fieldColor = fieldPrice.filter(
      (item) =>
        item.id_color === fieldFilter.color || fieldFilter.color === null
    );

    const result = fieldColor;
    setListProduct(result);
  }, [fieldFilter.price, fieldFilter.color]);

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
                  <p>Showing {listProduct.length} results</p>
                </div>
                <div className="flex md:justify-start justify-center md:pt-0 pt-6">
                  <div className="flex items-center">
                    <label className="pr-6">Sort by:</label>
                    <select className="hidden">
                      {listOptionSort.map((item, index) => (
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
                        {listOptionSort.map((item, index) => (
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
                {listProduct.map((item, index) => (
                  <ProductShow key={index} item={item} type={view} />
                ))}
              </div>
            </div>
            <div className="w-full xl:w-3/12 lg:w-4/12 px-[15px]">
              <div>
                <div className="border-b border-gray-300 mb-8">
                  <h5 className="text-xl font-medium pb-8">Filter by price</h5>
                </div>
                <div className="mb-8">
                  <div className="relative w-full">
                    <div className="mb-8">
                      <InputRange
                        allowSameValues={false}
                        draggableTrack={true}
                        maxValue={100}
                        minValue={0}
                        step={1}
                        formatLabel={() => {}}
                        value={range}
                        onChange={(value) => {
                          setRange({ ...value });
                        }}
                        onChangeComplete={(value) => {
                          setPrice(() => `$${value.min} - $${value.max}`);
                          setFieldFilter({
                            ...fieldFilter,
                            price: {
                              min: value.min,
                              max: value.max,
                            },
                          });
                        }}
                      />
                    </div>
                    <div className="flex items-center">
                      <label className="capitalize">Price:</label>
                      <input
                        type="text"
                        name="price"
                        value={price}
                        onChange={(e) => {
                          setPrice(e.target.value);
                          setRange({
                            min: parseInt(
                              e.target.value.split("-")[0].replace(/\D/g, "")
                            ),
                            max: parseInt(
                              e.target.value.split("-")[1].replace(/\D/g, "")
                            ),
                          });
                        }}
                        placeholder="Add Your Price"
                        className="w-[99px] pl-2 outline-none flex-grow"
                      />
                      {/* <button className="border border-gray-300 px-5 py-2 rounded-full hover:bg-secondary hover:text-white hover:border-secondary outline-none">
                        Filter
                      </button> */}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="border-b border-gray-300 mb-4">
                  <h5 className="text-xl font-medium pb-4">
                    Product Categories
                  </h5>
                </div>
                <div>
                  <ul>
                    {categories.map((cat) => (
                      <li key={cat.id} className="relative py-2.5">
                        <a
                          href="#!"
                          className="hover:text-secondary flex justify-between items-center"
                          onClick={() => {
                            handleShowSubCat(
                              showSubCat.id === cat.id
                                ? !showSubCat.show
                                : true,
                              cat.id
                            );
                          }}
                        >
                          <span className="capitalize">{cat.name}</span>
                          {cat.subCategories && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className={`h-4 w-4 transition-all duration-300 ${
                                showSubCat.id === cat.id && showSubCat.show
                                  ? "rotate-45"
                                  : ""
                              }`}
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 4v16m8-8H4"
                              />
                            </svg>
                          )}
                        </a>
                        {cat.subCategories && (
                          <ul
                            className={`duration-300 ease-in-out overflow-hidden ${
                              showSubCat.id === cat.id && showSubCat.show
                                ? `translate-y-0`
                                : "absolute -translate-y-full opacity-0 z-[-1]"
                            }`}
                          >
                            {cat.subCategories.map((sub) => (
                              <li key={sub.id} className="py-2.5 pl-4">
                                <a href="#!" className="hover:text-secondary">
                                  <span className="capitalize">{sub.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="pt-10">
                <div className="border-b border-gray-300 mb-4">
                  <h5 className="text-xl font-medium pb-4">Color</h5>
                </div>
                <div>
                  <ul>
                    <li className="relative py-2.5">
                      <a
                        href="#!"
                        className="hover:text-secondary flex justify-between items-center"
                        onClick={() => {
                          setFieldFilter((prev) => ({
                            ...prev,
                            color: null,
                          }));
                        }}
                      >
                        <span className="capitalize">
                          All Color ({products.length})
                        </span>
                      </a>
                    </li>
                    {colors.map((color) => (
                      <li key={color.id} className="relative py-2.5">
                        <a
                          href="#!"
                          className="hover:text-secondary flex justify-between items-center"
                          onClick={() => {
                            setFieldFilter((prev) => ({
                              ...prev,
                              color: color.id,
                            }));
                          }}
                        >
                          <span className="capitalize">
                            {`${color.name} (${
                              products.filter(
                                (product) => product.id_color === color.id
                              ).length
                            })`}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Shop;
