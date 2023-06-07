import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatchRoute } from "./components/NoMatchRoute";
import { Products } from "./components/Products";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { NewProducts } from "./components/NewProducts";
import { Users } from "./components/Users";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="order-summary" element={<OrderSummary />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<FeaturedProducts/>}></Route>
          <Route path="featured" element={<FeaturedProducts/>}></Route>
          <Route path="new" element={<NewProducts/>}></Route>
        </Route>
        <Route path="users" element={<Users/>}></Route>
        <Route path="*" element={<NoMatchRoute />}></Route>
      </Routes>
    </>
  );
}

export default App;
