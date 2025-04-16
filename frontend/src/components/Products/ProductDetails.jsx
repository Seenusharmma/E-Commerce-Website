import React from "react";
import { useEffect, useState } from "react";

//Dummy
const selectProduct = {
  name: "Kurta Set",
  price: "1500",
  orignalPrice: "2499",
  description: "This is primium kurta for any occasion",
  brand: "Zara",
  material: "Leather",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Black"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=1",
      altText: "Kurta Set 1",
    },
    {
      url: "https://picsum.photos/500/500?random=2",
      altText: "Kurta Set 2",
    },
  ],
};

const ProductDetails = () => {
    //Working Section Date 17.05.25💻
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Left Thumbnails */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectProduct.images.map((Image, index) => (
              <img
                key={index}
                src={Image.url}
                alt={Image.altText || `Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>
          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={selectProduct.images[0]?.url}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Mobile Thumbnail */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectProduct.images.map((Image, index) => (
              <img
                key={index}
                src={Image.url}
                alt={Image.altText || `Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>
          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectProduct.name}
            </h1>

            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectProduct.orignalPrice && `${selectProduct.orignalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              ₹ {selectProduct.price}
            </p>
            <p className="text-gray-500 mb-4">{selectProduct.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectProduct.colors.map((color) => (
                  <button
                    key={color}
                    className="w-8 h-8 rounded-full border"
                    style={{
                      backgroundColor: color.toLocaleLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Sizes:</p>
              <div className="flex gap-2 mt-2">
                {selectProduct.sizes.map((size) => (
                  <button key={size} className="px-4 py-2 rounded border">
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
                <p className="text-gray-700 ">Quantity</p>
                <div className="flex items-center space-x-4 mt-2">
                    <button className="px-2 py-1 bg-gray-200 rounded text-lg">
                        -
                    </button>
                    <span className="text-lg">1</span>
                    <button className="px-2 py-1 bg-gray-200 rounded text-lg">
                        +
                    </button>
                </div>
            </div>
            <button className="bg-black text-white py-2 px-6 rounded w-full mb-4">ADD TO CART</button>
            <div className="mt-10 text-gray-700 ">
                <h3 className="text-xl font-bold mb-4">Characteristic:</h3>
                <table className="w-full text-left text-sm text-gray-600">
                    <tbody>
                        <tr>
                            <td className="py-1">Brand</td>
                            <td className="py-1">{selectProduct.brand}</td>
                        </tr>
                        <tr>
                            <td className="py-1">Material</td>
                            <td className="py-1">{selectProduct.material}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
