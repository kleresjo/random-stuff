import DeliveryInformation from "../components/checkout/DeliveryInformation";
import InvoiceAdress from "../components/checkout/InvoiceAdress";
import MyInformation from "../components/checkout/MyInformation";
import PaymentInformation from "../components/checkout/PaymentInformation";
import TotalPrice from "../components/checkout/TotalPrice";
import "../styling/CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <>
      <h1 className="checkoutpage-h1">Checkout</h1>
      <div className="checkoutpage-container">
        <div className="checkoutpage-container-left">
          <MyInformation />
          <InvoiceAdress />
          <DeliveryInformation />
          <PaymentInformation />
        </div>
        <div>
          <TotalPrice />
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
