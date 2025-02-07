import { useEffect } from "react";
import { fetchProducts } from "../api/products";
import { useProductStore } from "../store/useProductStore";

const LandingPage = () => {
  const { products, setProducts } = useProductStore();

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img
              src={product.images[0]?.url}
              alt={product.name}
              className="h-32 w-full object-cover"
            />
            <h2 className="font-semibold">{product.name}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
