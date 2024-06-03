import DeliveryInformation from "../components/checkout/DeliveryInformation";
import InvoiceAdress from "../components/checkout/InvoiceAdress";
import MyInformation from "../components/checkout/MyInformation";
import PaymentInformation from "../components/checkout/PaymentInformation";
import Navbar from "../components/navbar/Navbar";

const CheckoutPage = () => {
  return (
    <>
      <Navbar />
      <div>
        <MyInformation />
        <InvoiceAdress />
        <DeliveryInformation />
        <PaymentInformation />
      </div>
    </>
  );
};

export default CheckoutPage;
