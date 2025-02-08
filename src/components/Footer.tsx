const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold">Nexus Nook</h2>
          <p className="text-gray-400 mt-2 text-center">
            Your one-stop shop for the best deals and latest products.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <p className="text-gray-400 mt-2">
            Email: <span className="text-white">support@nexusnook.com</span>
          </p>
          <p className="text-gray-400">
            Phone: <span className="text-white">+123 456 7890</span>
          </p>
          <p className="text-gray-400">
            Address:{" "}
            <span className="text-white">123 Main Street, City, Country</span>
          </p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <ul className="flex flex-col space-x-4 mt-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Nexus Nook. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
