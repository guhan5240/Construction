import React, { useState } from "react";
// import { useWishlist } from "../../Context/WishlistContext";
import { useWishlist } from "../../Context/WishlistContext";




const Wishlist = () => {
 // const { wishlist, removeFromWishlist } = useWishlist(1);
 const [ wishlist, removeFromWishlist ] = useState([{name:"guhan"},{name:"guhan"}]);
  return (
    <div className="w-full max-w-[1650px] mx-auto px-4 sm:px-6 lg:px-12 py-8">
      <h1 className="font-barlow text-2xl sm:text-3xl md:text-5xl tracking-wide mb-6">
        YOUR WISHLIST
      </h1>

      <div className="flex items-center gap-[4px] w-full mb-6">
        <img src="/images/img_group_438.svg" alt="" className="w-[4px] h-[5px]" />
        <div className="flex-1 h-[1px] bg-global-2"></div>
        <img src="/images/img_group_437.svg" alt="" className="w-[4px] h-[5px]" />
      </div>

      {wishlist.length === 0 ? (
        <div className="text-gray-600 text-sm sm:text-base">
          Your wishlist is empty. Tap the heart on any product to save it here.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((p) => (
            <div key={p.id} className="flex flex-col">
              <div className="relative">
                <img
                  src={p.images?.[0]}
                  alt={p.title}
                  className="w-full h-[260px] sm:h-[320px] object-cover"
                />
                <button
                  onClick={() => removeFromWishlist(p.id)}
                  className="absolute top-3 right-3 bg-white/90 px-2 py-1 text-xs rounded hover:bg-white"
                >
                  Remove
                </button>
              </div>
              <div className="px-2 py-3">
                <h3 className="text-sm sm:text-base">{p.title}</h3>
                <p className="text-xs sm:text-sm font-semibold mt-1">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex items-center gap-[4px] w-full mt-8">
        <img src="/images/img_group_438.svg" alt="" className="w-[4px] h-[5px]" />
        <div className="flex-1 h-[1px] bg-global-2"></div>
        <img src="/images/img_group_437.svg" alt="" className="w-[4px] h-[5px]" />
      </div>
    </div>
   
    
  );
};

export default Wishlist;
