import React, { useState, useEffect, useRef } from 'react';
// import { Link } from "react-router-dom";
// import Button from '../components/ui/Button';
// import { products, popularProducts } from '../products/data';
// import WishlistHeart from '../components/CommonPage/WishlistHeart';
import Button from '../ui/Button';
import { products, popularProducts } from '../../products/data';
import WishlistHeart from '../CommonPage/WishlistHeart';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;
  const slideInterval = 5000;
  const slides = [
    '/images/slide1.png',
    '/images/slide2.png',
    '/images/slide3.png',
    '/images/slide4.png',
    '/images/slide5.png',
  ];
  const [selectedCategory, setSelectedCategory] = useState('Tracks');
  const categories = ['Tracks', 'Shorts', 'T-Shirts'];
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [productImageIndex, setProductImageIndex] = useState({});

  const filteredProducts = products.filter(
  (p) => p.category === selectedCategory
);


  // Scroll effect states - replacing the hook
  const [hhProgress, setHhProgress] = useState(0);
  const [hhTranslateY, setHhTranslateY] = useState(0);
  const handRef = useRef(null);

  // Scroll effect implementation - replacing useScrollEffect hook
  useEffect(() => {
    const onScroll = () => {
      if (!handRef.current) return;
      const el = handRef.current;
      const sectionTop = el.offsetTop;
      const sectionHeight = el.offsetHeight;  
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const denom = Math.max(1, sectionHeight - vh);
      const p = Math.min(1, Math.max(0, (scrollY - sectionTop) / denom));
      setHhProgress(p);
      setHhTranslateY((0.3 - 0.4 * p) * vh);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, slideInterval);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % totalSlides);
  const goToPrev = () => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  const goToSlide = (index) => setCurrentSlide(index);

  const handleMouseEnter = (productId) => setHoveredProduct(productId);
  const handleMouseLeave = () => setHoveredProduct(null);

  const changeImage = (productId, direction) => {
    setProductImageIndex((prev) => {
      const currentImages = [...products, ...popularProducts].find(
        (p) => p.id === productId
      )?.images;
      if (!currentImages) return prev;
      const currentIndex = prev[productId] !== undefined ? prev[productId] : 0;
      let newIndex = currentIndex + direction;
      if (newIndex >= currentImages.length) newIndex = 0;
      else if (newIndex < 0) newIndex = currentImages.length - 1;
      return { ...prev, [productId]: newIndex };
    });
  };

  return (
    <>
      {/* <Header /> */}

      <section className="w-full relative">
        <div className="w-full h-[400px] sm:h-[600px] lg:h-[958px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${slide})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="w-full py-[26px] sm:py-[40px] lg:py-[52px]">
                <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-[160px] flex flex-col items-start justify-end min-h-full">
                  <Button
                    variant="primary"
                    className="absolute bottom-[80px] sm:bottom-[100px] lg:bottom-[320px] left-4 sm:left-6 lg:left-[160px] bg-gray-800 text-black font-['Azeret_Mono'] text-[10px] sm:text-[12px] font-normal leading-[12px] sm:leading-[15px] px-[6px] sm:px-[8px] py-[6px] sm:py-[8px] rounded-[5px] w-fit"
                  >
                    SHOP NOW
                  </Button>
                  <div className="absolute bottom-[80px] sm:bottom-[100px] lg:bottom-[120px] right-4 sm:right-6 lg:right-[160px] flex items-center gap-[12px] sm:gap-[18px]">
                    <button
                      onClick={goToPrev}
                      className="bg-global-3 px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>

                    <button
                      onClick={goToNext}
                      className="bg-global-3 px-4 py-2 sm:px-6 sm:py-3 rounded-md hover:bg-gray-100 transition-colors"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                  {/* <div className="absolute bottom-[26px] sm:bottom-[40px] lg:bottom-[52px] left-4 sm:left-6 lg:left-[160px] text-white text-[24px] sm:text-[32px] lg:text-[48px] font-bold leading-tight">
                    Beds From ₹8,999<br />Wooden Street, Sleepyhead & more
                  </div> */}
                </div>
              </div>
            </div>
          ))}
          <div className="absolute bottom-[10px] sm:bottom-[20px] left-0 right-0 flex justify-center gap-[8px]">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-[30px] h-[4px] sm:w-[40px] sm:h-[5px] rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white scale-x-125' : 'bg-gray-400'
                }`}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-global-3 py-[21px] sm:py-[32px] lg:py-[42px]">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px]">
          <h2 className="text-global-1 font-['Azeret_Mono'] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[19px] sm:leading-[22px] lg:leading-[24px] self-start">
            Categories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-[8px] sm:gap-[12px] lg:gap-[16px]">
            <img
              src="/images/img_rectangle_4351.png"
              alt="New Arrival"
              className="w-full h-[200px] sm:h-[300px] lg:h-[466px] object-cover"
            />
            <img
              src="/images/img_rectangle_4357.png"
              alt="T-Shirts"
              className="w-full h-[200px] sm:h-[300px] lg:h-[466px] object-cover"
            />
            <img
              src="/images/img_rectangle_4353.png"
              alt="Tracks"
              className="w-full h-[200px] sm:h-[300px] lg:h-[466px] object-cover"
            />
            <img
              src="/images/img_rectangle_4358.png"
              alt="Shorts"
              className="w-full h-[200px] sm:h-[300px] lg:h-[466px] object-cover"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-[8px] sm:gap-[12px] lg:gap-[16px] w-full">
            {['New Arrival', 'T-Shirts', 'Tracks', 'Shorts'].map((category) => (
              <div key={category} className="flex justify-center">
                <span className="text-global-1 font-['Azeret_Mono'] text-[18px] sm:text-[20px] lg:text-[22px] font-normal leading-[22px] sm:leading-[24px] lg:leading-[26px] text-center">
                  {category}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-[2px] sm:gap-[4px] w-full mb-[5px] sm:mb-[8px] lg:mb-[10px]">
            <img src="/images/img_group_438.svg" alt="Decorative" className="w-[4px] h-[5px]" />
            <div className="flex-1 h-[1px] bg-global-2"></div>
            <img src="/images/img_group_437.svg" alt="Decorative" className="w-[4px] h-[5px]" />
          </div>
        </div>
      </section>
      <section className="w-full bg-global-3 py-[20px] sm:py-[30px] lg:py-[40px]">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px]">
          <div className="flex flex-wrap gap-[8px] sm:gap-[10px] items-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`font-['Azeret_Mono'] text-[12px] sm:text-[14px] font-medium leading-[15px] sm:leading-[17px] px-[8px] sm:px-[10px] py-[10px] sm:py-[14px] transition-colors ${
                  selectedCategory === category
                    ? 'bg-global-1 text-global-2'
                    : 'bg-global-3 text-global-1 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] sm:gap-[20px] lg:gap-[24px]">
            {filteredProducts.map((product) => (
              // Inside your map loop:
              <div
                key={product.id}
                className="flex flex-col gap-[10px] sm:gap-[14px] lg:gap-[16px]"
                onMouseEnter={() => handleMouseEnter(product.id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="relative w-full">
                  {/* Make image clickable to detail */}
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.images[productImageIndex[product.id] || 0]}
                      alt={product.title}
                      className="w-full h-[300px] sm:h-[350px] lg:h-[470px] object-cover"
                    />
                  </Link>

                  {hoveredProduct === product.id && (
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-6">
                      <button
                        onClick={(e) => {
                          e.stopPropagation(); // stop from triggering Link
                          e.preventDefault(); // block navigation
                          changeImage(product.id, -1);
                        }}
                        className="p-2 w-[130px] h-[35px] flex items-center justify-center 
          bg-white text-black shadow-md shadow-black/20 
          transition-all hover:bg-black hover:text-white 
          hover:shadow-lg hover:shadow-black/90"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
                        </svg>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          e.preventDefault();
                          changeImage(product.id, 1);
                        }}
                        className="p-2 w-[130px] h-[35px] flex items-center justify-center 
          bg-white text-black shadow-md shadow-black/20 
          transition-all hover:bg-black hover:text-white 
          hover:shadow-lg hover:shadow-black/90"
                      >
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z" />
                        </svg>
                      </button>
                    </div>
                  )}

                  <div className="absolute top-[10px] left-0 right-0 flex justify-between px-[10px]">
                    <span className="bg-global-4 text-global-1 text-[10px] sm:text-[12px] font-semibold px-2 py-1">
                      {product.badge}
                    </span>
                    <WishlistHeart product={product} />
                  </div>
                </div>

                {/* Product info */}
                <div className="flex flex-col gap-[4px] px-[10px] pb-[10px]">
                  <h3 className="text-global-1 font-['Manrope'] text-[12px] sm:text-[14px] font-normal">
                    {product.title}
                  </h3>
                  <span className="text-global-1 font-['Manrope'] text-[10px] sm:text-[12px] font-semibold">
                    {product.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-[2px] sm:gap-[4px] w-full">
            <img src="/images/img_group_438.svg" alt="Decorative" className="w-[4px] h-[5px]" />
            <div className="flex-1 h-[1px] bg-global-2"></div>
            <img src="/images/img_group_437.svg" alt="Decorative" className="w-[4px] h-[5px]" />
          </div>
        </div>
      </section>
      <section
        id="hand-to-hand-section"
        ref={handRef}
        className="relative w-full"
        style={{ height: `calc(1vh + ${100}vh)` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/img_rectangle_4377.png"
              alt="Hand to Hand"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/45 to-black/90" />
          </div>
          <div
            className="relative z-10 w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-[160px] h-full flex flex-col justify-center gap-[35px] sm:gap-[52px] lg:gap-[70px]"
            style={{
              transform: `translateY(${hhTranslateY}px)`,
              opacity: Math.min(1, Math.max(0, hhProgress * 1.2)),
              willChange: 'transform, opacity',
            }}
          >
            <h2 className="text-global-2 font-['Barlow_Condensed'] text-[50px] sm:text-[75px] lg:text-[100px] font-bold leading-[60px] sm:leading-[90px] lg:leading-[120px]">
              HAND
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TO
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HAND
            </h2>
            <div className="flex items-center gap-[2px] sm:gap-[4px] w-full">
              <img src="/images/img_group_442.svg" alt="" className="w-[4px] h-[5px]" />
              <div className="flex-1 h-[1px] bg-global-4"></div>
              <img src="/images/img_group_441.svg" alt="" className="w-[4px] h-[5px]" />
            </div>
            <div className="flex flex-col gap-[16px] sm:gap-[20px] lg:gap-[26px] items-center self-end w-full sm:w-[80%] lg:w-[60%]">
              <p className="text-global-2 font-['Manrope'] text-[14px] sm:text-[17px] lg:text-[20px] leading-[21px] sm:leading-[26px] lg:leading-[30px] text-justify">
                At FOXO, we believe style and comfort should go hand in hand. Our mission is to
                create premium-quality apparel that makes you feel confident, whether you are at the
                gym, out on the streets, or simply relaxing at home.
              </p>
              <p className="text-global-2 font-['Manrope'] text-[14px] sm:text-[17px] lg:text-[20px] leading-[21px] sm:leading-[26px] lg:leading-[30px] text-justify">
                Founded with a passion for fashion and functionality, we craft each product using
                high-grade fabrics and cutting-edge designs. From classic round-neck T-shirts to
                performance-ready track pants, every piece is thoughtfully made to last, keeping you
                comfortable and stylish in every moment.
              </p>
              <p className="text-global-2 font-['Manrope'] text-[14px] sm:text-[17px] lg:text-[20px] leading-[21px] sm:leading-[26px] lg:leading-[30px] text-justify">
                We take pride in delivering exceptional value to our customers. With a strong focus
                on quality, sustainability, and customer satisfaction, FOXO has grown into a trusted
                name in modern lifestyle apparel.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-global-3 py-[21px] sm:py-[32px] lg:py-[42px]">
        <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[12px] sm:gap-[18px] lg:gap-[24px]">
            <h2 className="text-global-1 font-['Azeret_Mono'] text-[16px] sm:text-[18px] lg:text-[20px] font-medium leading-[19px] sm:leading-[22px] lg:leading-[24px] self-start">
              POPULAR PRODUCTS
            </h2>
            <div className="flex flex-col lg:flex-row gap-[8px] lg:gap-[16px] w-full">
              <div className="w-full lg:w-[40%]">
                <div className="relative w-full">
                  <img
                    src="/images/img_rectangle_4425.png"
                    alt="Featured Product"
                    className="w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[720px] object-cover"
                  />
                  <div className="absolute bottom-[16px] sm:bottom-[20px] lg:bottom-[24px] left-[16px] sm:left-[20px] lg:left-[24px] flex flex-col gap-[8px] sm:gap-[12px] lg:gap-[16px] max-w-[280px]">
                    <span className="bg-global-4 text-global-1 font-['Azeret_Mono'] text-[10px] sm:text-[11px] lg:text-[12px] font-semibold leading-[12px] sm:leading-[14px] lg:leading-[15px] px-[8px] py-[4px] w-fit">
                      ESSENCIAL COLLECTION NEW DROP
                    </span>
                    <div className="flex gap-2 sm:gap-3 lg:gap-4 items-center">
                      {['TRACKS', 'T-SHIRTS', 'SHORTS'].map((btnText) => (
                        <button
                          key={btnText}
                          className="bg-white text-black font-['Azeret_Mono'] text-[10px] sm:text-[11px] lg:text-[12px] font-medium px-3 py-2 rounded-md shadow-sm hover:bg-gray-100 transition-colors"
                        >
                          {btnText}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[60%]">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-[8px] sm:gap-[12px] lg:gap-[16px]">
                  {popularProducts.map((product) => (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      className="flex flex-col"
                      onMouseEnter={() => handleMouseEnter(product.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="relative w-full mb-[8px] sm:mb-[12px] lg:mb-[16px]">
                        <img
                          src={product.images[productImageIndex[product.id] || 0]}
                          alt={product.title}
                          className="w-full h-[180px] sm:h-[220px] lg:h-[260px] xl:h-[300px] object-cover"
                        />

                        {hoveredProduct === product.id && (
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-6">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault(); // prevents Link click
                                changeImage(product.id, -1);
                              }}
                              className="p-2 w-[130px] h-[35px] flex items-center justify-center 
              bg-white text-black shadow-md shadow-black/20 
              transition-all hover:bg-black hover:text-white 
              hover:shadow-lg hover:shadow-black/90"
                            >
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
                              </svg>
                            </button>

                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                e.preventDefault();
                                changeImage(product.id, 1);
                              }}
                              className="p-2 w-[130px] h-[35px] flex items-center justify-center 
              bg-white text-black shadow-md shadow-black/20 
              transition-all hover:bg-black hover:text-white 
              hover:shadow-lg hover:shadow-black/90"
                            >
                              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12l-4.58 4.59z" />
                              </svg>
                            </button>
                          </div>
                        )}

                        <div className="absolute top-[12px] sm:top-[14px] lg:top-[16px] left-0 right-0 flex justify-between items-center px-[12px] sm:px-[14px] lg:px-[16px]">
                          <span className="bg-global-4 text-global-1 font-['Azeret_Mono'] text-[9px] sm:text-[10px] lg:text-[11px] font-semibold leading-[12px] sm:leading-[13px] lg:leading-[14px] px-[6px] py-[3px]">
                            {product.badge}
                          </span>
                          <WishlistHeart product={product} />
                        </div>
                      </div>

                      <div className="flex flex-col gap-[4px] sm:gap-[5px] lg:gap-[6px] px-[4px] sm:px-[6px] lg:px-[8px]">
                        <h3 className="text-global-1 font-['Manrope'] text-[11px] sm:text-[12px] lg:text-[14px] font-normal leading-[14px] sm:leading-[16px] lg:leading-[18px] line-clamp-2">
                          {product.title}
                        </h3>
                        <span className="text-global-1 font-['Manrope'] text-[10px] sm:text-[11px] lg:text-[12px] font-semibold leading-[13px] sm:leading-[14px] lg:leading-[16px]">
                          {product.price}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-[4px] w-full">
              <img src="/images/img_group_438.svg" alt="Decorative" className="w-[4px] h-[5px]" />
              <div className="flex-1 h-[1px] bg-global-2"></div>
              <img src="/images/img_group_437.svg" alt="Decorative" className="w-[4px] h-[5px]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
