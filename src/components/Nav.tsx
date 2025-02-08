import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "../store/useCart";

const Nav = () => {
  const cart = useCartStore((state) => state.cart);
  let navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 p-4 bg-[hsl(210,36%,96%)">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <h1 className="text-lg font-bold">
            <span className="text-blue-600">Nexus</span> Nook
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white">
          <li className="cursor-pointer hover:underline">
            <a href="#">About</a>
          </li>
          <li className="cursor-pointer hover:underline">
            <a href="#">Services</a>
          </li>
          <li className="cursor-pointer hover:underline">
            <a href="#">FAQs</a>
          </li>
        </ul>

        {/* Cart  and Login Button*/}
        <div className="hidden md:flex md:items-center md:justify-between gap-2">
          <div
            className="relative  gap-6 w-8 h-8 cursor-pointer"
            onClick={() => navigate("/Cart")}
          >
            <ShoppingCartIcon className="w-full h-full text-white" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {cart.length > 0 ? (
                <span>{cart[0].quantity}</span>
              ) : (
                <span>0</span>
              )}
            </span>
          </div>

          <button
            onClick={() => navigate("/AdminLogin")}
            className="bg-black cursor-pointer px-6 py-2 bg-neutral-white text-white rounded-full sm:hover:bg-opacity-35 transition-all duration-300 ease-in-out"
          >
            Admin Login
          </button>
        </div>

        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 text-white">
          <li className="cursor-pointer hover:underline">
            <a href="#">About</a>
          </li>
          <li className="cursor-pointer hover:underline">
            <a href="#">Services</a>
          </li>
          <li className="cursor-pointer hover:underline">
            <a href="#">FAQss</a>
          </li>
          <li>
            <div
              className="relative w-8 h-8 cursor-pointer"
              onClick={() => navigate("/Cart")}
            >
              <ShoppingCartIcon className="w-full h-full text-white" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                3
              </span>
            </div>
          </li>
          <button
            onClick={() => navigate("/AdminLogin")}
            className="bg-black cursor-pointer px-6 py-2 bg-neutral-white text-white rounded-full sm:hover:bg-opacity-35 transition-all duration-300 ease-in-out"
          >
            Admin Login
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
