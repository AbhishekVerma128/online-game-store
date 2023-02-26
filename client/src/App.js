import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home/Home";
import Navbar from "./components/NavComponent/Navbar";
import ItemDetails from "./components/itemDetails/ItemDetails";
import CartMenu from "./components/NavComponent/CartMenu";
import Checkout from "./checkout/Checkout";
import Confirmation from "./checkout/Confirmation";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="item/:itemId" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
        </Routes>
        <CartMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
