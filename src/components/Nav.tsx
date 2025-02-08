import { useState } from "react";
import {
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="cursor-pointer flex items-center">
          <h1 className="text-lg font-bold">
            <span className="text-blue-600">Nexus</span> Nook
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700">
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

        {/* Cart Icon with Badge */}
        <div className="relative hidden md:flex gap-6 w-8 h-8 cursor-pointer">
          <ShoppingCartIcon className="w-full h-full text-gray-800" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            3
          </span>
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
        <ul className="md:hidden flex flex-col items-center gap-4 mt-4 text-gray-700">
          <li className="cursor-pointer hover:underline">
            <a href="#">About</a>
          </li>
          <li className="cursor-pointer hover:underline">
            <a href="#">Services</a>
          </li>
          <li className="cursor-pointer hover:underline">
            <a href="#">FAQs</a>
          </li>
          <li>
            <div className="relative w-8 h-8 cursor-pointer">
              <ShoppingCartIcon className="w-full h-full text-gray-800" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                3
              </span>
            </div>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
