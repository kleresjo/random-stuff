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

function App() {
  return (
    <CartProvider>
      <CheckoutProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/payment" element={<CheckoutPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
          </Routes>
        </BrowserRouter>
      </CheckoutProvider>
    </CartProvider>
  );
}

export default App;
