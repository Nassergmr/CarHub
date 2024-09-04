import Manufacturer from "./manufacturer";
import Model from "./model";

export default function Form({
  query,
  setQuery,
  manufacturer,
  setManufacturer,
  isOpen,
  setIsOpen,
  isOpen_2,
  setIsOpen_2,
  query_2,
  setQuery_2,
  carModel,
  setCarModel,
  allModels,
  setAllModels,
}) {
  return (
    <div className="container flex md:flex-row flex-col  gap-3 ">
      {/* Manufacturer Section */}
      <Manufacturer
        query={query}
        setQuery={setQuery}
        setQuery_2={setQuery_2}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        allModels={allModels}
        setAllModels={setAllModels}
        carModel={carModel}
        setCarModel={setCarModel}
      />

      {/* Modal Section */}
      <Model
        query={query}
        query_2={query_2}
        setQuery={setQuery}
        setQuery_2={setQuery_2}
        isOpen_2={isOpen_2}
        setIsOpen_2={setIsOpen_2}
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        carModel={carModel}
        setCarModel={setCarModel}
        allModels={allModels}
        setAllModels={setAllModels}
      />
    </div>
  );
}
