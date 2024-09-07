"use client";

import { useContext, useState } from "react";
import Form from "./form";
import { ManuContext } from "@/app/layout";
import Car from "./car";

export default function Catalogue() {
  const [query, setQuery] = useState("");
  const [manufacturer, setManufacturer] = useContext(ManuContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen_2, setIsOpen_2] = useState(false);
  const [query_2, setQuery_2] = useState("");
  const [carModel, setCarModel] = useState("");
  const [allModels, setAllModels] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [visibleItems, setVisibleItems] = useState(8);

  return (
    <div className="sm:mt-[150px] mt-[100px]" id="catalogue">
      <div id="title_section" className=" mx-auto text-center my-8">
        <h1 className="mb-4 sm:text-4xl text-3xl tracking-tight font-extrabold text-gray-900">
          Explore our exclusive car collection
        </h1>
        <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl ">
          Discover cars tailored to your preferences and explore your ideal
          ride.
        </p>
      </div>

      <div id="search_section" className="">
        <Form
          query={query}
          setQuery={setQuery}
          query_2={query_2}
          setQuery_2={setQuery_2}
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          isOpen_2={isOpen_2}
          setIsOpen_2={setIsOpen_2}
          carModel={carModel}
          setCarModel={setCarModel}
          allModels={allModels}
          setAllModels={setAllModels}
        />
      </div>

      <div id="car_section">
        <Car
          query={query}
          manufacturer={manufacturer}
          carModel={carModel}
          setCarModel={setCarModel}
          allModels={allModels}
          setAllModels={setAllModels}
          modal={modal}
          setModal={setModal}
          selectedCar={selectedCar}
          setSelectedCar={setSelectedCar}
          visibleItems={visibleItems}
          setVisibleItems={setVisibleItems}
        />
      </div>
    </div>
  );
}
