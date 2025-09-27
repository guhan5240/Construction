// components/collection/FilterSidebar.jsx
import React from "react";

const filterOptions = {
  sortBy: ["TRENDING", "POPULAR"],
  sizes: ["S", "M", "L", "XL", "XXL"],
  colors: ["BLACK", "WHITE", "GREY", "RED"],
  priceRanges: ["LOW TO HIGH", "HIGH TO LOW", "UNDER 1000", "UNDER 500", "UNDER 2000"],
  materials: ["COTTON", "WOOL", "POLISTER", "SILK"],
};

const FilterSidebar = ({ open, setOpen }) => {
  return (
    <div className="relative">
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar (now left side) */}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 
        ${open ? "translate-x-0" : "-translate-x-full"} 
        w-full sm:w-[400px]`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="font-semibold tracking-wide">FILTER</h2>
          <button
            onClick={() => setOpen(false)}
            className="text-xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-6 text-sm overflow-y-auto h-[calc(100%-120px)]">
          {/* Sort By */}
          <div>
            <h4 className="font-semibold mb-3 uppercase text-xs">SORT BY</h4>
            <div className="flex gap-2 flex-wrap">
              {filterOptions.sortBy.map((s) => (
                <button
                  key={s}
                  className="px-3 py-1 border text-xs sm:text-sm hover:bg-black hover:text-white transition"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div>
            <h4 className="font-semibold mb-3 uppercase text-xs">SIZE</h4>
            <div className="flex gap-2 flex-wrap">
              {filterOptions.sizes.map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 border text-xs sm:text-sm hover:bg-black hover:text-white transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div>
            <h4 className="font-semibold mb-3 uppercase text-xs">COLOR</h4>
            <div className="flex gap-2 flex-wrap">
              {filterOptions.colors.map((c) => (
                <button
                  key={c}
                  className="px-3 py-1 border text-xs sm:text-sm hover:bg-black hover:text-white transition"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          <div>
            <h4 className="font-semibold mb-3 uppercase text-xs">PRICE</h4>
            <div className="flex gap-2 flex-wrap">
              {filterOptions.priceRanges.map((p) => (
                <button
                  key={p}
                  className="px-3 py-1 border text-xs sm:text-sm hover:bg-black hover:text-white transition"
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          {/* Material */}
          <div>
            <h4 className="font-semibold mb-3 uppercase text-xs">MATERIAL</h4>
            <div className="flex gap-2 flex-wrap">
              {filterOptions.materials.map((m) => (
                <button
                  key={m}
                  className="px-3 py-1 border text-xs sm:text-sm hover:bg-black hover:text-white transition"
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 flex">
          <button className="w-1/2 py-3 border-t text-xs sm:text-sm">
            CLEAR FILTER
          </button>
          <button className="w-1/2 py-3 border-t bg-black text-white text-xs sm:text-sm">
            APPLY FILTER
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
