import { HiCursorClick } from "react-icons/hi";
import "../styling/LogoDark";

const LogoDark = () => {
  return (
    <div className="logo-dark">
      <h1 className="lilita-one-regular">R</h1>
      <h2 className="lilita-one-regular">andom</h2>
      <h1 className="lilita-one-regular">S</h1>
      <h2 className="lilita-one-regular">tuff</h2>
      <HiCursorClick className="logo-cursor" />
    </div>
  );
};

export default LogoDark;
