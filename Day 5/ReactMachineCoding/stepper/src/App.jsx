import "./App.css";
import Checkoutstepper from "./Component/stepper";

function App() {
  const CHECKOUT_STEPS = [
    {
      name: "Customer Info",
      Component: () => <div>Provide your contact details.</div>,
    },
    {
      name: "Shipping Info",
      Component: () => <div>Enter your shipping address.</div>,
    },
    {
      name: "Payment",
      Component: () => <div>Complelte payment for your order.</div>,
    },
    {
      name: "Delivered",
      Component: () => <div>Your order has been delivered.</div>,
    },
  ];
  return (
    <>
      <div>
        <h1>Checkout stepper</h1>
        <Checkoutstepper stepsConfig={CHECKOUT_STEPS} />
      </div>
    </>
  );
}

export default App;
