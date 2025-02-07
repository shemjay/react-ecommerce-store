import { create } from "zustand";

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

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
}));
