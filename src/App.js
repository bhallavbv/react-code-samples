import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatchRoute } from "./components/NoMatchRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="*" element={<NoMatchRoute />}></Route>
      </Routes>
    </>
  );
}

export default App;
