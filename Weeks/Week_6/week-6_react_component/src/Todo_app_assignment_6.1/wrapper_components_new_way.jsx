function WrapperComponentsNewWay() {
  return (
    <>
      <CardWrapper>
        <div>Hi there from CardWrapper component (New way)</div>
      </CardWrapper>
      <CardWrapper>
        <div>Hi there from CardWrapper component second block(New way)</div>
      </CardWrapper>
    </>
  );
}
// By "children", one can access the content inside the CardWrapper component used in the main component
// eslint-disable-next-line react/prop-types
function CardWrapper({ children }) {
  return (
    // Then that child component, we pass it inside the div tag and customize it as needed
    <div style={{ border: "2px solid black", padding: 20 }}>{children}</div>
  );
}

export default WrapperComponentsNewWay;
