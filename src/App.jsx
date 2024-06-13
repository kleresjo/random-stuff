import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductPage from "./pages/ProductPage";
import "./App.css";
import { CartProvider } from "./context/CartContext";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import { CheckoutProvider } from "./context/CheckoutContext";
import ConfirmationPage from "./pages/ConfirmationPage";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  
  return (
    <CartProvider>
      <CheckoutProvider>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<CheckoutPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/confirmation" element={<ConfirmationPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CheckoutProvider>
    </CartProvider>
  );
}

export default App;
