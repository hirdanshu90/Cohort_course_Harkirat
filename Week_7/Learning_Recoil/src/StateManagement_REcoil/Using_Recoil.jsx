/* eslint-disable react/prop-types */
// We have global count, then we have 2 buttons to increase and decrease.

import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { countAtom } from "../store/atoms/count";
import { evenSelector } from "../store/selector/selector";

function Using_Recoil() {
  return (
    <>
      ...................Using countContext or CONTEXT API TO avoid PROP
      drilling..................
      <br></br>
      <br></br>
      <RecoilRoot>
        <Count></Count>
      </RecoilRoot>
    </>
  );
}

// Count function renders 2 components count renderer and Buttons components.
function Count() {
  console.log("re rendering count ");

  return (
    <>
      <CountRenderer></CountRenderer>
      <br />
      <br />
      <Buttons></Buttons>
      <br />
      <br />
      <IsitEven></IsitEven>
      <br />
      <br />
      Using Selector here
      <br />
      <br />
      <EvenRenderer></EvenRenderer>
    </>
  );
}

// Testing via Atom.
// Here the function even is dependent on the count variable (It is derived state.)
// Can you useMemo here.
// Also can can Selector.
function IsitEven() {
  const count = useRecoilValue(countAtom);
  function evenhai(count) {
    if (count % 2 === 0) {
      return "It is even";
    }
  }
  return <>{evenhai(count)}</>;
}

// Testing using Selector
function EvenRenderer() {
  const isEven = useRecoilValue(evenSelector);
  function even(isEven) {
    if (isEven) {
      return "It is even";
    }
  }
  return <>{even(isEven)}</>;
}

function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <>{count}</>;
}

function Buttons() {
  // const [count, setCount] = useRecoilState(countAtom);
  const setCount = useSetRecoilState(countAtom);
  console.log("setCount is re rendering ");
  return (
    <>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount((count) => count - 1);
        }}
      >
        Decrease
      </button>
    </>
  );
}

export default Using_Recoil;
