/* eslint-disable react/prop-types */
// We have global count, then we have 2 buttons to increase and decrease.
import { useState } from "react";

function Prop_drill() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* We have to pass the variable from one function to another to access in that function. */}
      <Count count={count} setCount={setCount}></Count>
    </>
  );
}

// eslint-disable-next-line react/prop-types
// Count function renders 2 components count renderer and Buttons components. 
function Count({ count, setCount }) {
  return (
    <>
      <CountRenderer count={count}></CountRenderer>
      <br />
      <br />
      <Buttons count={count} setCount={setCount}></Buttons>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
function CountRenderer({ count }) {
  return <>{count}</>;
}

// eslint-disable-next-line react-refresh/only-export-components
function Buttons({ count, setCount }) {
  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default Prop_drill;
