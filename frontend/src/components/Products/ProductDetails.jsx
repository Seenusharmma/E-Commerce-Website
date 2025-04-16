import React from 'react'

//Dummy 
const selectProduct = {
    name: "Kurta Set",
    price: "1500",
    orignalPrice: "2499",
    description: "This is primium kurta for any occasion",
    brand: "Zara",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"]
}

const ProductDetails = () => {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
            {/* Left Thumbnails */}
            <div className="hidden md:flex flex-col space-y-4 mr-6"></div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
