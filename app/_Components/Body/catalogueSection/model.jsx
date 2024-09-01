"use client";

import CarIcon from "../../../../public/model-icon.png";
import clsx from "clsx";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Model({
  isOpen_2,
  setIsOpen_2,
  query,
  query_2,
  setQuery_2,
  manufacturer,
  // setManufacturer,
  carModel,
  setCarModel,
  allModals,
  setAllModals,
}) {
  const modelRef = useRef(null);

  const toggleDropdown_2 = () => setIsOpen_2(!isOpen_2);

  const handleClickOutside = (event) => {
    if (modelRef.current && !modelRef.current.contains(event.target)) {
      setIsOpen_2(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle selecting a model from the dropdown
  const handleModelClick = (model) => {
    setCarModel(model);
    setQuery_2(model); // Update the input field with the selected model
    setIsOpen_2(false); // Close the dropdown
    setAllModals(false);
  };

  const handleAllModalsClick = () => {
    setAllModals(true);
    setIsOpen_2(false);
    setQuery_2("All");
    setCarModel(false);
  };

  return (
    <div ref={modelRef} className="relative">
      <div
        id="model"
        className={clsx(
          "bg-gray-100 py-[10px] flex items-center md:w-[400px] w-full h-12 rounded-full focus-within:shadow-lg",
          query === "" && "bg-gray-500"
        )}
      >
        <div
          className={clsx(
            "grid place-items-center rounded-full w-12 bg-gray-100",
            query === "" && "bg-gray-500"
          )}
        >
          <Image
            src={CarIcon}
            alt="Car Icon"
            width={20}
            height={20}
            className={clsx("bg-gray-100", query === "" && "hidden")}
          />
        </div>

        <input
          type="text"
          disabled={query === ""}
          value={query_2} // Display the selected model
          onChange={(event) => setQuery_2(event.target.value)}
          placeholder="Model..."
          className={clsx(
            "w-full rounded-lg border-none bg-gray-100 cursor-pointer",
            "focus:outline-none",
            query === "" && "bg-gray-500 cursor-auto"
          )}
          autoComplete="off"
          onClick={toggleDropdown_2}
        />

        <ChevronDownIcon
          onClick={toggleDropdown_2}
          className={clsx(
            "size-8 ml-auto mr-4 cursor-pointer",
            query === "" && "hidden"
          )}
        />
      </div>

      {isOpen_2 && (
        <div className="absolute w-full z-10 max-h-[300px] overflow-y-scroll bg-gray-100 text-black rounded-lg shadow  mt-[10px]">
          <ul className="py-2 text-sm text-black font-semibold h-auto">
            <button
              onClick={handleAllModalsClick}
              className=" block px-4 py-2 hover:bg-blue-700 text-blue-700 font-bold text-xl hover:text-white w-full text-left"
            >
              All
            </button>

            <hr className="" />
            {manufacturer.map((item, index) => (
              <li key={index}>
                <button
                  className="block px-4 py-2 hover:bg-blue-700  hover:text-white w-full text-left"
                  onClick={() =>
                    handleModelClick(
                      `${item.model} ${item.year} ${item.fuel_type} (${item.combination_mpg} MPG)`
                    )
                  }
                >
                  {`${item.make.charAt(0).toUpperCase() + item.make.slice(1)} ${
                    item.model
                  } ${item.year} ${item.fuel_type} (${
                    item.combination_mpg
                  } MPG)`}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
