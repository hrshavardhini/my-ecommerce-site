import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";

const Orders = () => {
  const { orders, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16 max-w-5xl mx-auto px-4">
      <div className="text-2xl mb-4">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders placed yet.</p>
      ) : (
        orders.map((item, index) => (
          <div
            key={index}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img
                className="w-16 sm:w-20"
                src={item.image[0]}
                alt={item.name}
              />
              <div>
                <p className="sm:text-base font-medium">{item.name}</p>
                <div className="flex items-center flex-wrap gap-3 mt-2 text-base text-gray-500">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Size: {item.size}</p>
                </div>
                <p className="mt-2">
                  Date: <span className="text-gray-500">{item.date}</span>
                </p>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <span className="min-w-2 h-2 rounded-full bg-green-500"></span>
                <p className="text-sm md:text-base">Ready to Ship</p>
              </div>
              <button className="border px-4 py-2 font-medium rounded-sm bg-black text-white hover:bg-gray-800 transition">
                Track Order
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
