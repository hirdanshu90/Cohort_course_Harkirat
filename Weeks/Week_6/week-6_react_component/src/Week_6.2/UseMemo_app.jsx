import { useMemo, useState } from "react";

function Use_Memo() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(1);

  // Can also use useEffect, but useMemo is better here. This saves some rendering.
  let sumi = useMemo(() => {
    let sumi = 0;
    for (let i = 0; i <= input; i++) {
      sumi = sumi + i;
    }
    return sumi;
  }, [input]);

  return (
    <>
      <input
        onChange={(e) => {
          const value = parseInt(e.target.value, 10);
          if (!isNaN(value)) {
            setInput(value);
          }
        }}
        type="text"
        placeholder="Enter the value:"
      />
      <br></br>
      <br></br>
      Sum is {sumi}
      <br></br>
      <br></br>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Counter {count}
      </button>
    </>
  );
}

export default Use_Memo;
