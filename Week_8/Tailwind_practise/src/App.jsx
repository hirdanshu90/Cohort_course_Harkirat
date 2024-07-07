import RevenueCard from "./components/RevenueCard";

function App() {
  return (
    <>
      {/* Flex in Tailwind */}
      <div className="flex justify-center">
        <div className="bg-red-500">Hello</div>
        <div className="bg-yellow-500">Hello</div>
        <div style={{ backgroundColor: "green" }}>Hello</div>
      </div>
      {/* Grid in tailwind */}
      <div className="grid grid-cols-10">
        <div className="bg-red-500 col-span-4">Hello</div>
        <div className="bg-green-500 col-span-5">from </div>
        <div className="bg-blue-500 col-span-1">Grid</div>
      </div>
      <br />
      <br></br>

      {/* Responsiveness check kar rahe */}
      {/* Md se bada ho jaaye toh blue ho jayega. Phelle agar tab ka size small hai toh red rahega */}
      <div className="bg-red-500 md:bg-blue-500">
        <div>Hi there.....</div>
      </div>
      <br />
      <br></br>

      {/* Adding multiple reponsiveness */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-red-500 ">Hello</div>
        <div className="bg-green-500">from </div>
        <div className="bg-blue-500 ">Grid</div>
        <div className="bg-gray-500 ">class</div>
      </div>

      <br></br>
      <br></br>
      <div className="grid grid-cols-4">
        <RevenueCard
          title={"Amount pending"}
          amount={"92,303.33"}
          orderCount={13}
        ></RevenueCard>

        <revenue_card></revenue_card>
      </div>
    </>
  );
}

export default App;
