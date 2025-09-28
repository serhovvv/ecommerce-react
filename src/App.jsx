import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
import NavBar from "./components/NavBar";
import { Provider } from "react-redux";
import { store } from "./App/Store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
