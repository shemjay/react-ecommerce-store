import { useCartStore } from "../store/useCart";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  return (
    <div className="w-full flex flex-col items-center bg-[hsl(210,36%,96%)]">
      <Nav />
      <div className="p-4 w-full h-screen flex flex-col items-center justify-items-start">
        <div>
          <h1 className="text-2xl font-bold mb-4 text-center">Your Cart</h1>
        </div>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="w-full max-w-lg">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border p-4 flex justify-between items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>${item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, Math.max(0, item.quantity - 1))
                    }
                    className="px-2 py-1 bg-gray-200"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 bg-gray-200"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
