import { BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProductPage from "./pages/ProductPage";
import './App.css'

function App() {

  return (
   <BrowserRouter>
    <Navbar  />
    <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="/kassa" element={<CartPage />} />
    <Route path="/betalning" element={<CheckoutPage />} />
    <Route path="/product" element={<ProductPage />} />
    </Routes>
    <Footer  />
    </BrowserRouter>
  )
}

export default App
