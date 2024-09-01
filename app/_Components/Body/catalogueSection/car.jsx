export default function Car({
  manufacturer,
  carModel,
  allModals,
  setAllModals,
}) {
  const filteredModel = manufacturer.filter(
    (item) =>
      `${item.model} ${item.year} ${item.fuel_type} (${item.combination_mpg} MPG)` ===
      carModel
  );

  console.log("filteredModel:", filteredModel);

  return (
    <>
      <div className="flex justify-between container">
        <div id="siglem">
          <h1>Single Car Model :</h1>
          {filteredModel.map((item, index) => (
            <div key={index}>
              <h2>{item.make}</h2>
              <h2>{item.model}</h2>
              <h2>{item.year}</h2>
              <p>{item.fuel_type}</p>
              <p>{`(${item.combination_mpg} MPG)`}</p>
            </div>
          ))}
        </div>
        {allModals && (
          <div>
            <h1>All Car Modals :</h1>
            {manufacturer.map((item, index) => (
              <div key={index}>
                <h2>{item.make}</h2>
                <h2>{item.model}</h2>
                <p>{item.year}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
