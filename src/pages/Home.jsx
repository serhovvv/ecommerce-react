import React from "react";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../feautures/products/ProductSlice";

const categories = [
  "All",
  "Graphic cards",
  "Laptops",
  "Monitors",
  "Power supply",
];

function Home() {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="bg"></div>
      <div className="container mx-auto my-10 px-4">
        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => {
            return (
              <button
                key={cat}
                onClick={() => dispatch(setSelectedCategory(cat))}
                className="bg-gray-300 py-2 px-4 rounded-md text-black active:scale-105 hover:bg-zinc-400 transition-all ease-in"
              >
                {cat}
              </button>
            );
          })}
        </div>
        <ProductGrid />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
