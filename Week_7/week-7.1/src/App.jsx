import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Prop_drill from "./Prop_drilling_example/Prop_drilling_ex";
// import Prop_drill_Solution from "./Prop_drilling_example/Solving_prop_drilling_Context_API";

// LAZY Loading.
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));

// This is the right way of doing client side rendering.
function App() {
  return (
    <>
      <BrowserRouter>
        {/* Use Navigate should be used inside the BrowserRouter ONLY, then only it will works */}
        <Appbar></Appbar>

        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Here dashboard becomes async. For this we have a suspense API by React. 
            // Until it loads, it shows Loading... */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
      <br></br>
      <br></br>
      <Prop_drill></Prop_drill>
      <br></br>
      <br></br>
    </>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <>
      {/* This div will remain constant, whatever the route will be. Thus acting as a constant page,*/}
      <div style={{ background: "yellow" }}>Hi, this is the top level bar</div>
      <div>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Landing page
        </button>

        <button
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          Dashboard
        </button>
      </div>
    </>
  );
}

export default App;
