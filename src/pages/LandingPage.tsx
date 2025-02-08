import ProductsList from "../components/ProductsList";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins px-4">
      <Nav />
      <Banner />
      {/* <ProductsList /> */}
      <Footer />
    </div>
  );
};

export default LandingPage;
