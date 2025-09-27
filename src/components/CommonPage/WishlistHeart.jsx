// src/components/CommonPage/WishlistHeart.jsx
import React from "react";
import { useWishlist } from "../../Context/WishlistContext";

const WishlistHeart = ({ product }) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const inList = isInWishlist(product.id);

  const toggle = (e) => {
    e.stopPropagation();
    if (inList) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={toggle}
      className="bg-global-3 p-[2px] rounded cursor-pointer"
      aria-label={inList ? "Remove from wishlist" : "Add to wishlist"}
      title={inList ? "Remove from wishlist" : "Add to wishlist"}
    >
      <img
        src={
          inList
            ? "/assets/images/icons/favorite.png" // ✅ no need to add /public
            : "/assets/images/icons/heart.png"
        }
        alt={inList ? "In Wishlist" : "Add to Wishlist"}
        className="w-[10px] h-[10px] sm:w-[12px] sm:h-[12px]"
      />
    </button>
  );
};

export default WishlistHeart;
