import { useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {
  const [input, setInput] = useState(0);

  const expensiveCalc = useMemo(
    function () {
      if (input > 0) {
        let prod = 1;
        for (let i = input; i > 0; i--) {
          prod = prod * i;
        }
        return prod;
      } else {
        return 1;
      }
    },
    [input]
  );

  // Your solution starts here
  //   const expensiveValue = 0;
  // Your solution ends here

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(Number(e.target.value))}
      />
      <p>Calculated Value: {expensiveCalc}</p>
    </div>
  );
}
