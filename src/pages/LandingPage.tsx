import ProductsList from "../components/ProductsList";
import Nav from "../components/Nav";
import Banner from "../components/Banner";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins px-4">
      <Nav />
      <Banner />
      <ProductsList />
    </div>
  );
};

export default LandingPage;
