import Image from "next/image";
import Car_Modal from "../../Elements/car_modal";

export default function Car({
  manufacturer,
  carModel,
  allModels,
  query,
  modal,
  setModal,
  selectedCar,
  setSelectedCar,
}) {
  const filteredModel = manufacturer.filter(
    (item) => `${item.model} ${item.year}` === carModel
  );

  const itemWidthClass =
    filteredModel.length === 1
      ? "grid-cols-1 md:w-[60%] w-full"
      : filteredModel.length === 2
      ? "md:grid-cols-2 grid-cols-1"
      : "md:grid-cols-2 grid-cols-1";

  const carImg = query.toString().replace(/-/g, " ").toLowerCase();
  const imgUrl = `/cars/${carImg}.png`;

  const handleModalClick = (carDetails) => {
    setModal(true);
    setSelectedCar(carDetails);
  };

  console.log("filteredModel :", filteredModel);

  return (
    <>
      <div
        id="single_car"
        className={`container gap-x-4 sm:gap-y-8 gap-y-12 mt-8 grid justify-between ${itemWidthClass}`}
      >
        {filteredModel.map((item, index) => (
          <div
            id="car"
            key={index}
            className={`p-4 px-7 mx-auto bg-gray-100 w-full rounded-xl group transition hover:bg-white hover:shadow-lg`}
          >
            <h2 id="car_title" className="font-bold sm:text-3xl text-xl mb-3">
              {item.make.charAt(0).toUpperCase() + item.make.slice(1)}{" "}
              {item.model}
            </h2>
            <div id="car_price" className="flex">
              <span className="self-start font-medium text-[14px]">$</span>
              <p className="font-extrabold text-[30px]">99</p>
              <span className="self-end font-medium text-[14px]">/day</span>
            </div>
            <div
              id="img_container"
              className="w-full md:h-64 lg:h-72 h-48 relative"
            >
              <Image src={imgUrl} fill alt="" priority objectFit="contain" />
            </div>
            <div
              id="details"
              className="flex group-hover:hidden justify-between items-center text-sm text-gray-500 mt-7 font-medium"
            >
              <div className="flex flex-col items-center gap-1">
                <Image src="/gas.svg" width={25} height={25} />
                {item.fuel_type.toUpperCase()}
              </div>
              <div className="flex flex-col items-center gap-1">
                <Image src="/tire.svg" width={25} height={25} />
                <div className="text-center"> {item.combination_mpg} MPG</div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <Image src="/steering-wheel.svg" width={25} height={25} />
                {item.drive.toUpperCase()}
              </div>
            </div>
            <button
              onClick={() => handleModalClick(item)}
              type="button"
              className="text-white sm:w-[80%] transition w-full mx-auto hidden mt-7  group-hover:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              <div className="relative">
                <span className="mx-auto sm:text-base text-sm">View More </span>
                <div className="absolute  w-[22px] left-[95%] top-[50%] transform translate-y-[-50%]">
                  <Image
                    src="/right-arrow.svg"
                    width={30}
                    height={30}
                    className=""
                  />
                </div>
              </div>
            </button>
            <Car_Modal
              modal={modal}
              setModal={setModal}
              manufacturer={manufacturer}
              carModel={carModel}
              filteredModel={filteredModel}
              carDetails={selectedCar}
            />
          </div>
        ))}
      </div>

      {allModels && (
        <div id="all_cars" className="mt-8">
          <h1>All Car Models :</h1>
          {manufacturer.map((item, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg">
              <h2>{item.make}</h2>
              <h2>{item.model}</h2>
              <p>{item.year}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
