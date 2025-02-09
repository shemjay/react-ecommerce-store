import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products";
import { useProductStore } from "../store/useProductStore";
import { useCartStore } from "../store/useCart";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
  let navigate = useNavigate();
  const { products, setProducts } = useProductStore();
  const { addToCart, updateQuantity, cart } = useCartStore();

  // State for price filtering
  const [priceRange, setPriceRange] = useState("all");

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts().then(setProducts);
    }
  }, []);

  // Filtered products based on selected price range
  const filteredProducts = products.filter((product) => {
    if (priceRange === "all") return true;
    if (priceRange === "low") return product.price < 50;
    if (priceRange === "medium")
      return product.price >= 50 && product.price <= 100;
    if (priceRange === "high") return product.price > 100;
    return true;
  });

  return (
    <div className="py-4 w-full flex items-center flex-col">
      <h1 className="text-2xl font-bold mb-4">Products</h1>

      {/* Price Filter Dropdown */}
      <div className="mb-4">
        <label className="mr-2 font-semibold">Filter by Price:</label>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="all">All Prices</option>
          <option value="low">Below $50</option>
          <option value="medium">$50 - $100</option>
          <option value="high">Above $100</option>
        </select>
      </div>

      {/* Display Filtered Products */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          return (
            <div key={product.id} className="border p-4 rounded-lg shadow-lg">
              <img
                src={product.images[0]?.url}
                alt={product.name}
                className="h-auto w-full object-cover"
              />
              <h2 className="font-semibold">
                <span>Description: </span>
                {product.name}
              </h2>
              <p>Price: ${product.price}</p>
              {cartItem ? (
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="mt-2 px-4 py-2 bg-green-500 text-white"
                  >
                    View Product
                  </button>
                  <button
                    onClick={() =>
                      updateQuantity(
                        product.id,
                        Math.max(0, cartItem.quantity - 1)
                      )
                    }
                    className="px-2 py-1 bg-gray-200 cursor-pointer"
                  >
                    -
                  </button>
                  <span>{cartItem.quantity}</span>
                  <button
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        image: product.images[0]?.url || "",
                        quantity: (cartItem?.quantity || 0) + 1,
                      })
                    }
                    className="px-2 py-1 bg-gray-200"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() =>
                    addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.images[0]?.url,
                      quantity: 1,
                    })
                  }
                  className="mt-2 px-4 py-2 bg-blue-500 text-white"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsList;
