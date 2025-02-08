import ProductsList from "../components/ProductsList";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col font-poppins bg-[hsl(210,36%,96%)]">
      <Nav />
      <main className="px-4">
        <Banner />
        <ProductsList />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
