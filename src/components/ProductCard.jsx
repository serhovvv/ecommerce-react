import { Link } from "react-router-dom";
import React from "react";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="shadow-lg rounded-md cursor-pointer flex flex-col justify-center ">
        <div className="flex justify-center object-cover">
          <img src={product.image} className="h-48 p-4" />
        </div>
        <div className="bg-gray-50 p-4">
          <h2 className="font-semibold texl-lg my-4">{product.title}</h2>
          <p className="text-sm border-zinc-500/20 border-b-2 pb-4 text-zinc-500">
            {product.description.substring(0, 70) + "..."}
          </p>
          <div className="flex justify-between mt-4 items-center">
            <p className="text-xl font-semibold">${product.price}</p>
            <p>View Details</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
