import React, { useState } from "react";

export default function UseState() {
  const [count, setCount] = useState(0);
  const handlerIncrement = () => {
    setCount(count + 1);
  };
  const handlerDecrement = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handlerIncrement} disabled={count === 10 ? true : false}>
        Increment
      </button>
      <button onClick={handlerDecrement} disabled={count === 0 ? true : false}>
        Decrement
      </button>
    </div>
  );
}

{
  /* 01 How to use Hooks_useState in React.Js */
}