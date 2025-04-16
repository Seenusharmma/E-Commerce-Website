import React from 'react'
import { RiDeleteBin3Line } from 'react-icons/ri';

const CartContent = () => {
    const cartProducts = [
        {
            productId: 1,
            name: 'Ayush',
            size: "xs",
            color: "black",
            price: 20.00,
            quantity: 1,
            image: 'https://picsum.photos/id/237/200?random=1'
        },
        {
            productId: 2,
            name: 'Ayesha',
            size: "xs",
            color: "white",
            price: 20.00,
            quantity: 1,
            image: 'https://picsum.photos/seed/picsum/200?random=2'
        }
    ];

  return (
    <div>
      {
        cartProducts.map((product, index) => (
            <div key={index} className="flex items-start justify-between py-4 border-b border-gray-200">
                <div className="flex items-start">
                    <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4 runnded" />
                    <div>
                      <h3>{product.name}</h3>
                      <p className="text-gray-500 text-sm">
                        size: {product.size} | color: {product.color}
                      </p>
                      {/* increment & Decrement Button */}
                      <div className="flex items-center mt-2">
                        <button className="border rounded px-2 py-1 text-xl font-medium border-gray-200 ">-</button>
                        <span className="mx-4">{product.quantity}</span>
                        <button className="border rounded px-2 py-1 text-xl font-medium border-gray-200">+</button>
                      </div>
                    </div>
                </div>
                <div>
                  <p>₹ {product.price.toLocaleString()}</p>
                  <button>
                    <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600"/>
                  </button>
                </div>
            </div>
        ))
      }
    </div>
  )
}

export default CartContent
