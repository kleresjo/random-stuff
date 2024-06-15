import DeliveryInformation from "../components/checkout/DeliveryInformation";
import InvoiceAdress from "../components/checkout/InvoiceAdress";
import MyInformation from "../components/checkout/MyInformation";
import PaymentInformation from "../components/checkout/PaymentInformation";
import TotalPrice from "../components/checkout/TotalPrice";
import "../styling/CheckoutPage.css";
import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => { 
const navigate = useNavigate();
  return (
    <div className="checkoutpage-first-container">
            <div className="back-to-cart-navigation">
          <div
            className="back-to-cart-button"
            onClick={() => navigate("/cart")}
          >
            <AiOutlineLeft size={24} />
            <span className="back-to-cart-page-text">Back to cart</span>
          </div>
        </div>
      <h1 className="checkoutpage-h1">Checkout</h1>
      <div className="checkoutpage-container">
        <div className="checkoutpage-container-left">
          <MyInformation />
          <InvoiceAdress />
          <DeliveryInformation />
          <PaymentInformation />
        </div>
        <div className="checkoutpage-container-right">
          <TotalPrice />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
