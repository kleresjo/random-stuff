import ProductsList from "../components/ProductsList";
import Hero from "../components/Hero";
import Navbar from "../components/navbar/Navbar";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductsList />
    </div>
  );
};

export default LandingPage;
