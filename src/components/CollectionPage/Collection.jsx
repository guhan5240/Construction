import React, { useState } from "react";
import CollectionHeader from "./CollectionHeader";
import ProductCard from "./ProductCard";
import { products } from "../../products/data";

const Collection = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [gridView, setGridView] = useState("4"); // default grid is 4

  // ✅ filter logic
  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter((p) => p.category?.toUpperCase() === activeCategory);

      
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header with category + grid toggle */}
      <CollectionHeader
        active={activeCategory}
        setActive={setActiveCategory}
        onToggleGrid={setGridView}
        gridView={gridView}
      />

      {/* Products Grid */}
      <div
        className={`max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 grid gap-6 mb-12 
          ${gridView === "4" 
            ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4" 
            : "grid-cols-2"
          }`}
      >
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Collection;
