import { useEffect, useState } from "react";

function UseEffectUse() {
  const [count, setCount] = useState(0);
  // Using useEffect hook here.
  useEffect(() => {}, [count]);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click counter {count}
      </button>
    </>
  );
}

export default UseEffectUse;
