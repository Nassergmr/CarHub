export async function getCars(manufacturer) {
  const headers = {
    "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPID_API_KEY || "",
    "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const responce = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?limit=35&make=${manufacturer}`,
    { headers: headers }
  );
  const result = await responce.json();
  return result;
}
