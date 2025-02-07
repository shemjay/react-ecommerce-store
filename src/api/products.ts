import axios from "axios";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(
      "https://fakerapi.it/api/v2/products?_quantity=10"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching products", error);
    return [];
  }
};
