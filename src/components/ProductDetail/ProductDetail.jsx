import React, { useState, useContext ,useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CardContext"; 
import { products } from "../../products/data";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext); // get addToCart function

  const product = products.find((p) => p.id === Number(id));

  
  const[product1,setProducts1]=useState([]);
  
  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);


  const getProduct=async()=>{
    await axios.get(`http://localhost:8080/api/v1/admin/products/10`).then((res)=>{
     
      setProducts1(res.data);}).catch((err)=>{});
  }
  const availableColors = ["#C1442E", "#000000", "#1E90FF", "#228B22"];

  //
  useEffect(()=>{
console.log("enter")
    getProduct();
  },[])

 
  if (!product1) {
    return <h2 className="text-center mt-10">Product not found</h2>;
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color before adding to cart!");
      return;
    }

    addToCart({
      ...product,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    });

    navigate("/cart"); // move to CartPage
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Images */}
        <div className="flex gap-6">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                onClick={() => setMainImage(img)}
                className={`w-20 h-20 object-cover cursor-pointer border rounded-lg 
                  ${mainImage === img ? "border-black" : "border-gray-300"}`}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={mainImage}
              alt={product1.name}
              className="w-full h-[500px] object-cover rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {product1.name}
          </h1>
          <p className="text-lg sm:text-xl font-semibold">{product1.price}</p>
          {/* Size Selector */}
          <div>
            <h3 className="mb-2 text-sm font-medium">Select Size</h3>
            <div className="flex items-center gap-3">
              {product1.availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`border px-4 py-2 rounded-md text-sm transition 
                    ${
                      selectedSize === size
                        ? "bg-black text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selector */}
          <div>
            <h3 className="mb-2 text-sm font-medium">Select Color</h3>
            <div className="flex items-center gap-3">
              {availableColors.map((color, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColor(color)}
                  style={{ backgroundColor: color }}
                  className={`w-8 h-8 rounded-full border-2 transition 
                    ${
                      selectedColor === color
                        ? "border-black scale-110"
                        : "border-gray-300"
                    }`}
                ></button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
  onClick={handleAddToCart}
  className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition"
>
  Add to Cart
</button>

          {/* Accordions */}
          <div className="border-t pt-4">
            <details className="py-2 border-b">
              <summary className="cursor-pointer font-medium">Purpose</summary>
              <p className="mt-2 text-sm text-gray-600">{product1.description}</p>
            </details>
            <details className="py-2 border-b">
              <summary className="cursor-pointer font-medium">
                Material Care
              </summary>
              <p className="mt-2 text-sm text-gray-600">
                {product1.materialCare}
              </p>
            </details>
            <details className="py-2">
              <summary className="cursor-pointer font-medium">Review</summary>
              <div className="mt-2 space-y-3">
                {product.reviews?.map((review, i) => (
                  <div key={i} className="border p-3 rounded-md bg-gray-50">
                    <p className="text-sm font-semibold">{review.user}</p>
                    <p className="text-sm text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>

      {/* Suggested Products */}
      <div className="mt-16">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6">
          You May Also Like
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {products.slice(0, 4).map((item) => (
            <div key={item.id} className="border rounded-md p-4 hover:shadow-md">
              <img
                src={item.images[0]}
                alt={item.title}
                className="w-full h-60 object-cover rounded-md"
              />
              <h3 className="text-sm font-medium mt-3">{item.title}</h3>
              <p className="text-sm font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
