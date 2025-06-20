import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, price, image, name, colors }) => {
  const { currency } = useContext(ShopContext);
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="aspect-[3/4] w-full overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-110 transition ease-in-out"
          src={image[0]}
          loading="lazy"
          alt={name}
        />
      </div>

      <p className="text-sm pt-3 pb-1">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
      <div className="flex mt-2 gap-1">
        {colors &&
          colors.map((color, index) => (
            <div
              key={index}
              className="w-5 h-5 rounded-full border"
              style={{ backgroundColor: color.code }}
              title={color.name}
            ></div>
          ))}
      </div>
    </Link>
  );
};

export default ProductItem;
