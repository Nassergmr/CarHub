"use client";

import Manufacturer from "./manufacturer";
import { useState } from "react";
import CarIcon from "../../../../public/model-icon.png";
import Image from "next/image";

export default function Catalogue() {
  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  return (
    <div className="sm:mt-[150px] mt-[100px]">
      <div id="title_section" className="container">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl text-gray-800 font-bold">
          Car Catalogue
        </h1>
        <p className="mt-1 mb-8 lg:w-10/12 text-gray-400 font-normal text-sm sm:text-base">
          Explore our cars you may like
        </p>
      </div>

      <div id="search_section" className="container flex gap-3">
        <Manufacturer
          query={query}
          setQuery={setQuery}
          selected={selected}
          setSelected={setSelected}
        />

        <div
          id="model"
          className="relative flex items-center w-[300px] h-12 rounded-full focus-within:shadow-lg"
        >
          <div className="grid place-items-center h-full w-12 bg-gray-100">
            <Image
              src={CarIcon}
              alt="Tire Icon"
              width={20}
              height={20}
              className="bg-gray-100"
            />
          </div>
          <input
            className="peer h-full w-full outline-none text-sm bg-gray-100 text-gray-700 pr-2"
            type="text"
            id="search"
            placeholder="Model..."
          />
        </div>
      </div>
    </div>
  );
}
