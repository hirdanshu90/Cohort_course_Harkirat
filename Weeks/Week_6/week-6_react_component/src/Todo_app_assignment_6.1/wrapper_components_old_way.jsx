// This is one way of doing this. WE will not use this 99.9% of the time.
// Making another method, showing the current way of doing this.
function WrapperComponents() {
  return (
    <>
      <CardWrapper innerComponent={<TextComponent1 />} />
      <CardWrapper innerComponent={<TextComponent2 />} />
    </>
  );
}
// Here we can create different Text components on the same wrapper component.
function TextComponent1() {
  return <>Hi there TextComponent1</>;
}

function TextComponent2() {
  return <>Hi there from TextComponent2</>;
}

// eslint-disable-next-line react/prop-types
function CardWrapper({ innerComponent }) {
  return (
    <div style={{ border: "2px solid black", padding: 20 }}>
      {innerComponent}
    </div>
  );
}

export default WrapperComponents;
