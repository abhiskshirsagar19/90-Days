import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleAddition = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Counter : {count}</h1>
      <div className="buttons-name">
        <button className="buttons-add" onClick={handleAddition}>
          +
        </button>
        <button className="buttons-minus" onClick={handleMinus}>
          -
        </button>
        <button className="buttons-reset" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
}
