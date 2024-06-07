import { useState } from "react";
import { createContext } from "react";

export const CheckoutContext = createContext();

export const CheckoutProvider = (props) => {
  const [personalInformation, setPersonalInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    adress: "",
    phone: "",
    zipCode: "",
    city: "",
    country: "",
  });

  return (
    <CheckoutContext.Provider
      value={{ personalInformation, setPersonalInformation }}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
};
