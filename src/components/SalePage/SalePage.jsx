import React from "react";
import ProductCard from "../CollectionPage/ProductCard";

const SalePage = () => {
  const products = [
    {
      id: 1,
      title: "Running Shoes",
      price: "$60",
      badge: "SALE",
      offer: "20% OFF",
      images: [
        "https://via.placeholder.com/400x450.png?text=Shoes+1",
        "https://via.placeholder.com/400x450.png?text=Shoes+2",
      ],
    },
    {
      id: 2,
      title: "Casual T-Shirt",
      price: "$25",
      badge: "HOT",
      offer: "15% OFF",
      images: [
        "https://via.placeholder.com/400x450.png?text=Tshirt+1",
        "https://via.placeholder.com/400x450.png?text=Tshirt+2",
      ],
    },
    {
      id: 3,
      title: "Sports Jacket",
      price: "$120",
      badge: "LIMITED",
      offer: "30% OFF",
      images: [
        "https://via.placeholder.com/400x450.png?text=Jacket+1",
        "https://via.placeholder.com/400x450.png?text=Jacket+2",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        🔥 Sale Offers
      </h2>

      {/* Grid Responsive Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="relative">
            {/* Offer Label */}
            <span className="absolute top-4 -left-3 sm:-left-4 rotate-[-10deg] bg-red-600 text-white text-xs sm:text-sm font-semibold px-3 py-1 shadow-md">
              {product.offer}
            </span>

            {/* Product Card */}
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalePage;
