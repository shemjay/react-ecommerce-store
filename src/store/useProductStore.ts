import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: { url: string }[];
}

interface ProductStore {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductStore>()(
  persist<ProductStore>(
    (set) => ({
      products: [],
      setProducts: (products) => set({ products }),
    }),
    {
      name: "product-storage", // name for localStorage
    }
  )
);
