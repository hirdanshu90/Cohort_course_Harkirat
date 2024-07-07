/* eslint-disable react/prop-types */
// We have global count, then we have 2 buttons to increase and decrease.
import { useContext, useState } from "react";
import { CountContext } from "./context";

function Prop_drill_Solution() {
  const [count, setCount] = useState(0);
  return (
    <>
      Using countContext or CONTEXT API TO avoid PROP drilling......
      <br></br>
      <br></br>
      {/* Use contextAPI defined in the context.jsx file, and wrapping whoever wants to use it. 
      HERE Count is using for both the components below it*/}
      <CountContext.Provider value={{ count, setCount }}>
        <Count></Count>
      </CountContext.Provider>
    </>
  );
}

// eslint-disable-next-line react/prop-types
// Count function renders 2 components count renderer and Buttons components.
function Count() {
  return (
    <>
      <CountRenderer></CountRenderer>
      <br />
      <br />
      <Buttons></Buttons>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
// Jaha need ho, waha use kar liya useContext. No need to  use them as props or pass around.
function CountRenderer() {
  const { count } = useContext(CountContext);
  return <>{count}</>;
}

// eslint-disable-next-line react-refresh/only-export-components
function Buttons() {
  const { count, setCount } = useContext(CountContext);
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

export default Prop_drill_Solution;
