import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OrderDetailsPage = () => {
  //State to hold the order details page component

  const { id } = useParams();
  const [OrderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const mockOrderDetails = {
      _id: id,
      createdAt: new Date(),
      isPaid: true,
      isDelivered: true,
      paymentMethod: "PayPal",
      shippingMethod: "Standard",
      shippingAddress: { city: "Delhi", country: "India" },
      orderItems: [
        {
          productId: "1",
          name: "Jacket",
          price: 100,
          quantity: 2,
          images: "https://picsum.photos/150/?random=1",
        },
        {
          productId: "2",
          name: "Bikni",
          price: 150,
          quantity: 1,
          images: "https://picsum.photos/150/?random=2",
        },
      ],
    };
    setOrderDetails(mockOrderDetails);
  }, [id]);
  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
      {!OrderDetails ? (
        <p>No Order details</p>
      ) : (
        <div className="p-4 sm:p-6 rounded-lg border">
          {/* Order Info */}
          <div className="flex flex-col sm:flex-row justify-between mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-semibold">
                Order ID: #{OrderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(OrderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  OrderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {OrderDetails.isPaid ? "Approved" : "Pending"}
              </span>
            </div>
          </div>
          {/* Customer, Payment, Shipping info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
                <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
                <p></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetailsPage;
