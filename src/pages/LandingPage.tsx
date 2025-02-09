import ProductsList from "../components/ProductsList";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins bg-[hsl(210,36%,96%)]">
      <Nav />
      <main className="px-4">
        <ProductsList />
        <Testimonial />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
