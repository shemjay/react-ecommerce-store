import { useEffect } from "react";
import { fetchProducts } from "../api/products";
import { useProductStore } from "../store/useProductStore";
import { useCartStore } from "../store/useCart";
import { useNavigate } from "react-router-dom";

const ProductsList = () => {
  let navigate = useNavigate();
  const { products, setProducts } = useProductStore();
  const { addToCart, updateQuantity, cart } = useCartStore();

  useEffect(() => {
    if (products.length === 0) {
      fetchProducts().then(setProducts);
    }
  }, []);

  return (
    <div className="py-4 w-full flex items-center flex-col">
      <div>
        <h1 className="text-2xl font-bold mb-4">Products</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);
          return (
            <div key={product.id} className="border p-4">
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
