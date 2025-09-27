import React, { useState } from "react";
import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";

const CollectionHeader = ({ active, setActive, onToggleGrid, gridView }) => {
  const [filterOpen, setFilterOpen] = useState(false);

  const categories = [
    "ALL",
    "TRACKS",
    "T-SHIRTS",
    "SHORTS",
    "GYM SHORTS",
    "GYM TRACKS",
  ];

  const handleGridToggle = () => {
    const newView = gridView === "4" ? "2" : "4";
    onToggleGrid(newView);
  };

  return (
    <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 mt-6 sm:mt-10">
      {/* Title */}
      <h2 className="font-barlow text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-wide mb-4 sm:mb-6">
        MENS COLLECTION
      </h2>

      {/* Decorative Line */}
      <div className="flex items-center gap-[4px] w-full">
        <img src="/images/img_group_438.svg" alt="Decorative" className="w-[4px] h-[5px]" />
        <div className="flex-1 h-[1px] bg-global-2"></div>
        <img src="/images/img_group_437.svg" alt="Decorative" className="w-[4px] h-[5px]" />
      </div>

      {/* Categories + Grid/Filter Row */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 sm:mt-5 mb-4 sm:mb-6 gap-4 sm:gap-0">
        
        {/* Categories */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 sm:gap-6 text-xs sm:text-sm md:text-base tracking-wide">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`uppercase transition ${
                active === item
                  ? "font-semibold bg-black text-white px-2 sm:px-3 py-1 sm:py-1.5"
                  : "text-gray-800 hover:text-black px-1 sm:px-2 py-0.5"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Grid / Filter */}
        <div className="flex mt-4 items-center gap-6 sm:gap-4">
          {/* Grid Toggle */}
          <div
            onClick={handleGridToggle}
            className="flex items-center gap-1 sm:gap-2 cursor-pointer"
          >
            <span>{gridView === "4" ? "GRID 4" : "GRID 2"}</span>
            <img
              src="/assets/images/icons/grid.png"
              alt="grid"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </div>

          {/* Filter & Sort */}
          <div
            onClick={() => setFilterOpen(true)}
            className="flex items-center gap-1 sm:gap-2 cursor-pointer"
          >
            <span>FILTER & SORT</span>
            <img
              src="/assets/images/icons/filter.png"
              alt="filter"
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <FilterSidebar open={filterOpen} setOpen={setFilterOpen} />
    </div>
  );
};

export default CollectionHeader;
