import axios from "axios";
// TODO: use dotenv to protect api call for good practice

export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://fakerapi.it/api/v2/products?_quantity=12&_price_min=20&_price_max=1000"
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
};
