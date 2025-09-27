import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WishlistHeart from '@/components/CommonPage/WishlistHeart';

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const changeImage = (direction) => {
    const total = product.images.length;
    setImgIndex((prev) => (direction === 'next' ? (prev + 1) % total : (prev - 1 + total) % total));
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="w-full no-underline"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative w-full">
        <img
          src={product.images[imgIndex]}
          alt={product.title}
          className="w-full h-[300px] sm:h-[350px] lg:h-[450px] object-cover"
        />

        <div className="absolute top-[12px] sm:top-[14px] lg:top-[16px] left-0 right-0 flex justify-between items-center px-[12px] sm:px-[14px] lg:px-[16px]">
          <span className="bg-global-4 text-global-1 font-['Azeret_Mono'] text-[9px] sm:text-[10px] lg:text-[11px] font-semibold leading-[12px] sm:leading-[13px] lg:leading-[14px] px-[6px] py-[3px]">
            {product.badge}
          </span>
          <WishlistHeart product={product} />
        </div>

        {hovered && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-6">
            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                changeImage('prev');
              }}
              className="p-2 w-[130px] h-[35px] flex items-center justify-center 
             bg-white text-black shadow-md shadow-black/20 
             transition-all hover:bg-black hover:text-white 
             hover:shadow-lg hover:shadow-black/40"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                changeImage('next');
              }}
              className="p-2 w-[130px] h-[35px] flex items-center justify-center 
             bg-white text-black shadow-md shadow-black/20 
             transition-all hover:bg-black hover:text-white 
             hover:shadow-lg hover:shadow-black/40"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z" />
              </svg>
            </button>
          </div>
        )}
      </div>

      <div className="p-4 text-left">
        <h3 className="text-base font-semibold text-black">{product.title}</h3>
        <p className="text-sm text-gray-700">{product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
