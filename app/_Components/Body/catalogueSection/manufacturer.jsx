"use client";

import TireIcon from "../../../../public/car-logo.svg";
import { ChevronDownIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import { manufacturers } from "../../Constants/index";
import { getCars } from "@/app/_Utils";
import { useEffect, useRef } from "react";

export default function Manufacturer({
  query,
  setQuery,
  setQuery_2,
  manufacturer,
  setManufacturer,
  isOpen,
  setIsOpen,
}) {
  const manufacturerRef = useRef(null);
  const handleClickOutside = (event) => {
    if (
      manufacturerRef.current &&
      !manufacturerRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .startsWith(query.toLowerCase().replace(/\s+/g, ""))
        );

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleItemClick = async (item) => {
    setQuery(item);
    setIsOpen(false);

    const carData = await getCars(item);
    if (Array.isArray(carData)) {
      setManufacturer(carData);
      console.log("manu data:", manufacturer);
    } else {
      console.error("Expected carData to be an array but got:", carData);
    }
  };

  useEffect(() => {
    if (query === "") {
      setQuery_2("");
    }
  }, [query, setQuery_2]);

  return (
    <div className="relative" ref={manufacturerRef}>
      <div
        id="manufacturer"
        className="bg-gray-100 flex items-center md:w-[400px] w-full h-12 rounded-full focus-within:shadow-lg"
      >
        <div className="grid place-items-center rounded-full w-12 bg-gray-100">
          <TireIcon className="w-[20px] h-[20px]" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Manufacturer..."
          className={clsx(
            "w-full rounded-lg border-none bg-gray-100 cursor-pointer",
            "focus:outline-none"
          )}
          autoComplete="off"
          onClick={toggleDropdown}
        />
        <ChevronDownIcon
          onClick={toggleDropdown}
          className="size-8 ml-auto mr-4 cursor-pointer"
        />
      </div>

      {isOpen && (
        <div className="absolute w-full z-10 max-h-[300px] overflow-y-scroll bg-gray-100 text-black rounded-lg shadow  mt-[10px]">
          <ul className="py-2 text-sm text-black font-semibold h-auto">
            {filteredManufacturers.map((item, index) => (
              <li key={index}>
                <button
                  className="block px-4 py-2 hover:bg-blue-700  hover:text-white w-full text-left"
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
