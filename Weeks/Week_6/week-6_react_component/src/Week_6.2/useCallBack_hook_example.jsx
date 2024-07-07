import { useCallback, useState, memo } from "react";

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const logSomething = useCallback(() => {
    console.log("From LogSomething function");
  }, []); // Empty dependency array means the function is created once and reused

  return (
    <>
      Hello from useCallBack hook ............
      <br></br>
      <br></br>
      <ButtonComponent inputFunction={logSomething} />
      <br />
      <br></br>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
    </>
  );
}

// eslint-disable-next-line react/prop-types
const ButtonComponent = memo(({ inputFunction }) => {
  console.log("child render function");

  return (
    <>
      <button onClick={inputFunction}>Button clicked</button>
    </>
  );
});
ButtonComponent.displayName = "ButtonComponent";
export default UseCallbackExample;
