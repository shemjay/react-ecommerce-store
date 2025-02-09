import { useParams } from "react-router-dom";
import { useProductStore } from "../store/useProductStore";
import { useCartStore } from "../store/useCart";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const ProductPage = () => {
  const { id } = useParams();
  const { products } = useProductStore();
  const { addToCart } = useCartStore();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <h1 className="text-center text-red-500 text-2xl mt-10">
          Product Not Found
        </h1>
      </div>
    );
  }

  return (
    <>
      <Nav />
      <div className="p-4 max-w-4xl mx-auto border-2 my-8 border-gray-600 m-2 rounded-lg shadow-lg">
        <img
          src={product.images[0]?.url}
          alt={product.name}
          className="w-full h-96 object-cover mb-4"
        />
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-lg text-gray-700 mt-2">{product.description}</p>
        <p className="text-2xl font-semibold mt-4">${product.price}</p>

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
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg cursor-pointed"
        >
          Add to Cart
        </button>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
