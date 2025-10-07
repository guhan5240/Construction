// import React, { useState } from 'react';
// import axios from 'axios';

// const Products = () => {
//   const [formData, setFormData] = useState({
//     photo: null,
//     name: '',
//     price: '',
//     color: '',
//     size: '',
//     availability: '',
//     discount: ''
//   });

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: files ? files[0] : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     for (let key in formData) {
//       data.append(key, formData[key]);
//     }
//     axios.post('http://localhost:8080/api/products', data, {
//       headers: { 'Content-Type': 'multipart/form-data' }
//     })
//       .then(response => console.log('Product added:', response.data))
//       .catch(error => console.error('Error adding product:', error));
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen md:ml-64">
//       <h2 className="text-2xl font-bold mb-4">Add Products</h2>
//       <div className="bg-white shadow rounded-lg p-6 max-w-2xl">
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block font-medium">Product Photo</label>
//             <input type="file" name="photo" onChange={handleChange} className="w-full border p-2 rounded-lg mt-1" />
//           </div>
//           <div>
//             <label className="block font-medium">Product Name</label>
//             <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter product name" className="w-full border p-2 rounded-lg mt-1" />
//           </div>
//           <div>
//             <label className="block font-medium">Product Price</label>
//             <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Enter price" className="w-full border p-2 rounded-lg mt-1" />
//           </div>
//           <div>
//             <label className="block font-medium">Product Color</label>
//             <input type="text" name="color" value={formData.color} onChange={handleChange} placeholder="Enter color" className="w-full border p-2 rounded-lg mt-1" />
//           </div>
//           <div>
//             <label className="block font-medium">Product Size</label>
//             <input type="text" name="size" value={formData.size} onChange={handleChange} placeholder="Enter size" className="w-full border p-2 rounded-lg mt-1" />
//           </div>
//           <div>
//             <label className="block font-medium">Product Availability</label>
//             <input type="text" name="availability" value={formData.availability} onChange={handleChange} placeholder="Enter availability" className="w-full border p-2 rounded-lg mt-1" />
//           </div>
//           <div>
//             <label className="block font-medium">Product Discount</label>
//             <input type="number" name="discount" value={formData.discount} onChange={handleChange} placeholder="Enter discount %" className="w-full border p-2 rounded-lg mt-1" />
//           </div>
//           <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Products;

import React, { useState } from 'react';
import { Upload, Package, AlertCircle } from 'lucide-react';
import axios from 'axios';
import Cookies from 'universal-cookie';


// Define RichTextEditor outside the Products component
const RichTextEditor = ({ name, value, onChange, placeholder }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    rows={6}
    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
  />
);

const Products = () => {

  const cookie=new Cookies();

  let token=cookie.get("adminToken");


    
  
   // or wherever you store JWT
  const [formData, setFormData] = useState({
     name: '',
    categoryId: 0,
     description: '',
    materialCare: '',
   gender: '',
   productType: '',
     availableSizes: [],
   sizeSpecificPricing: false,
    
    price: 0,
    salePrice: 0,
    cost: 0,
    status: 'Active',
   stockStatus: '',
    images: [],
    variants: []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const categoryOptions = ['New Arrival', 'Trending', 'Sports', 'Night Suits'];
  const productTypeOptions = ['T_SHIRT', 'TRACKS', 'SHORTS', 'GYM_SHORTS', 'GYM_TRACKS', ' NIGHT_SUIT'];
  const genderOptions = ['Male', 'Female', 'Unisex'];
  const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  const statusOptions = ['Active', 'Inactive', 'Draft'];
  const stockStatusOptions = ['In Stock', 'Out of Stock', 'Low Stock'];

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    
    if (name === 'availableSizes') {
      const selectedSizes = [...formData.availableSizes];
      if (checked) {
        selectedSizes.push(value);
        if (formData.sizeSpecificPricing) {
          setFormData(prev => ({
            ...prev,
            availableSizes: selectedSizes,
            sizePrices: {
              ...prev.sizePrices,
              [value]: { price: '', salePrice: '', cost: '' }
            }
          }));
          return;
        }
      } else {
        const index = selectedSizes.indexOf(value);
        if (index > -1) {
          selectedSizes.splice(index, 1);
        }
        const newSizePrices = { ...formData.sizePrices };
        delete newSizePrices[value];
        setFormData(prev => ({
          ...prev,
          availableSizes: selectedSizes,
          sizePrices: newSizePrices
        }));
        return;
      }
      setFormData(prev => ({
        ...prev,
        availableSizes: selectedSizes
      }));
    } else if (name === 'sizeSpecificPricing') {
      const newState = {
        ...formData,
        sizeSpecificPricing: checked
      };
      
      if (checked) {
        const sizePrices = {};
        formData.availableSizes.forEach(size => {
          sizePrices[size] = { price: '', salePrice: '', cost: '' };
        });
        newState.sizePrices = sizePrices;
      } else {
        newState.sizePrices = {};
      }
      
      setFormData(newState);
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : (files ? files[0] : value)
      }));
    }
  };

  const handleChangeNumber = (e) => {

setFormData({...formData,[e.target.name]:Number(e.target.value)});

  }

  const handleChangeimg = (e) => {
  const { name, files } = e.target;
  if (name === "images") {
    // Convert FileList to array of URLs
    const urls = Array.from(files).map(file => URL.createObjectURL(file));
    setFormData(prev => ({
      ...prev,
      images: urls
    }));
  }

  const handleSizePriceChange = (size, field, value) => {
    setFormData(prev => ({
      ...prev,
      sizePrices: {
        ...prev.sizePrices,
        [size]: {
          ...prev.sizePrices[size],
          [field]: value
        }
      }
    }));
  };}

  const handleVariantChange = (variantId, field, value) => {
    setFormData(prev => ({
      ...prev,
      variants: prev.variants.map(variant => 
        variant.id === variantId ? { ...variant, [field]: value } : variant
      )
    }));
  };

  const addVariant = () => {
    const newVariant = {
      id: Date.now(),
      name: '',
      materialCare: '',
      description: ''
    };
    setFormData(prev => ({
      ...prev,
      variants: [...prev.variants, newVariant]
    }));
  };

  const removeVariant = (variantId) => {
    if (formData.variants.length > 1) {
      setFormData(prev => ({
        ...prev,
        variants: prev.variants.filter(variant => variant.id !== variantId)
      }));
    }
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });
    console.log(formData);
    {/*
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setMessage({ type: 'success', text: 'Product saved successfully!' });

      setFormData({
        productName: '',
        category: '',
        description: '',
        materialCare: '',
        gender: '',
        productType: '',
        availableSizes: [],
        sizeSpecificPricing: false,
        sizePrices: {},
        price: '',
        salePrice: '',
        cost: '',
        status: 'Active',
        stockStatus: '',
        productImages: null,
        variants: [{
          id: 1,
          name: '',
          materialCare: '',
          description: ''
        }]
      });

      const fileInputs = document.querySelectorAll('input[type="file"]');
      fileInputs.forEach(input => input.value = '');
    } catch (error) {
      console.error('Error saving product:', error);
      setMessage({ type: 'error', text: 'Failed to save product. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
      

const response = await axios.post(
  "http://localhost:8080/api/v1/admin/products/create",
  formData,
  {
    headers: {
      "Content-Type": "multipart/form-data",  // since you're sending formData
      "Authorization": `Bearer ${token}`,     // attach JWT
    },
  }
);


{
   
  } */}
   console.log("token",token);
   await axios.post(
  "http://localhost:8080/api/v1/admin/products/create",
  formData,
  {
    headers: {
      Authorization: `Bearer   ${token}`, // MUST start with Bearer
      "Content-Type": "application/json", // or multipart/form-data if file
    },
  }
)
    .then((res)=>{
    setMessage({ type: 'success', text: 'Product saved successfully!' });
       setFormData({ name: '',
    categoryId: 0,
     description: '',
    materialCare: '',
   gender: '',
   productType: '',
     availableSizes: [],
   sizeSpecificPricing: false,
    
    price: 0,
    salePrice: 0,
    cost: 0,
    status: 'Active',
   stockStatus: '',
    images: [],
    variants: []
  });
    })
    .catch((err)=>{
     // console.log(formData222)
      //  console.log("token",token2)
    setMessage({ type: 'error', text: 'Failed to save product. Please try again.' });
  }).finally (()=>{
      setIsSubmitting(false);
    })
}
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-900">Product Management</h1>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setFormData({
                    productName: '',
                    categoryId: 0,
                    description: '',
                    materialCare: '',
                    gender: '',
                    productType: '',
                    availableSizes: [],
                    sizeSpecificPricing: false,
                    sizePrices: {},
                    price: '',
                    salePrice: '',
                    cost: '',
                    status: 'Active',
                    stockStatus: '',
                    productImages: null,
                    variants: [{
                      id: 1,
                      name: '',
                      materialCare: '',
                      description: ''
                    }]
                  });
                  setMessage({ type: '', text: '' });
                }}
                className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 transition-colors"
              >
                {isSubmitting ? 'Saving...' : 'Save Product'}
              </button>
            </div>
          </div>
        </div>

        <div className="p-6">
          {message.text && (
            <div className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
              message.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'
            }`}>
              <AlertCircle size={18} />
              {message.text}
            </div>
          )}

          <div className="max-w-5xl space-y-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Basic Information</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter product name"
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category *
                  </label>
                  <select
                    name="categoryId"
                    value={formData.categoryId}
                    onChange={handleChangeNumber}
                    className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select category</option>
                    {categoryOptions.map((option,index) => (
                      <option key={option} value={Number(index)}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Product Details</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description *
                  </label>
                  <RichTextEditor
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter product description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Material Care *
                  </label>
                  <RichTextEditor
                    name="materialCare"
                    value={formData.materialCare}
                    onChange={handleChange}
                    placeholder="Enter material care instructions"
                  />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Gender *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select gender</option>
                      {genderOptions.map(option => (
                        <option key={option} value={option.toLowerCase()}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Product Type *
                    </label>
                    <select
                      name="productType"
                      value={formData.productType}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select product type</option>
                      {productTypeOptions.map(option => (
                        <option key={option} value={option.toUpperCase().replace('-', '_')}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-gray-900">Available Sizes</h2>
                <label className="flex items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    name="sizeSpecificPricing"
                    checked={formData.sizeSpecificPricing}
                    onChange={handleChange}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  Size-specific pricing
                </label>
              </div>
              <div className="grid grid-cols-6 gap-4">
                {sizeOptions.map(size => (
                  <label key={size} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="availableSizes"
                      value={size}
                      checked={formData.availableSizes.includes(size)}
                      onChange={handleChange}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium">{size}</span>
                  </label>
                ))}
              </div>

              {formData.sizeSpecificPricing && formData.availableSizes.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-md font-medium text-gray-700 mb-4">Size-wise Pricing</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Size</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Price</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Sale Price</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        {formData.availableSizes.map((size, index) => (
                          <tr key={size} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}>
                            <td className="px-4 py-3 text-sm font-medium text-gray-900 border-b">{size}</td>
                            <td className="px-4 py-3 border-b">
                              <input
                                type="number"
                                value={formData.sizePrices[size]?.price || ''}
                                onChange={(e) => handleSizePriceChange(size, 'price', e.target.value)}
                                placeholder="0.00"
                                min="0"
                                step="0.01"
                                className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                            </td>
                            <td className="px-4 py-3 border-b">
                              <input
                                type="number"
                                value={formData.sizePrices[size]?.salePrice || ''}
                                onChange={(e) => handleSizePriceChange(size, 'salePrice', e.target.value)}
                                placeholder="0.00"
                                min="0"
                                step="0.01"
                                className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                            </td>
                            <td className="px-4 py-3 border-b">
                              <input
                                type="number"
                                value={formData.sizePrices[size]?.cost || ''}
                                onChange={(e) => handleSizePriceChange(size, 'cost', e.target.value)}
                                placeholder="0.00"
                                min="0"
                                step="0.01"
                                className="w-full border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

            {formData.sizeSpecificPricing ? (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">Status</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status *
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      {statusOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stock Status *
                    </label>
                    <select
                      name="stockStatus"
                      value={formData.stockStatus} // Fixed typo: stateStatus -> stockStatus
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select stock status</option>
                      {stockStatusOptions.map(option => (
                        <option key={option} value={option.toLowerCase().replace(' ', '_')}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-6">Pricing and Status</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Price
                    </label>
                    <input
                      type="number"
                      name="price"
                     // value={formData.price}
                      onChange={handleChangeNumber}
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Sale Price
                    </label>
                    <input
                      type="Number"
                      name="salePrice"
                     // value={formData.salePrice}
                      onChange={handleChangeNumber}
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Cost of the Product
                    </label>
                    <input
                      type="number"
                      name="cost"
                     // value={formData.cost}
                      onChange={handleChangeNumber}
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Status *
                    </label>
                    <select
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      {statusOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stock Status *
                    </label>
                    <select
                      name="stockStatus"
                      value={formData.stockStatus} // Fixed typo: stateStatus -> stockStatus
                      onChange={handleChange}
                      className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select stock status</option>
                      {stockStatusOptions.map(option => (
                        <option key={option} value={option.toLowerCase().replace(' ', '_')}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-6">Product Images</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                <input
                  type="file"
                  name="images"
                  onChange={handleChangeimg}
                  
                  accept="image/*"
                  multiple
                  className="hidden"
                  id="product-images-upload"
                />
                <label htmlFor="product-images-upload" className="cursor-pointer">
                  <Upload size={48} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-600">Choose Files</p>
                  <p className="text-xs text-gray-500 mt-1">No file chosen</p>
                </label>
                  {/* Image Previews */}
                 <div className="flex flex-wrap justify-center mt-4 gap-2">
             {formData.images && formData.images.length > 0 &&
  formData.images.map((file, idx) => {
    // Only create object URL if file is a File object
    const src = file instanceof File ? URL.createObjectURL(file) : file;
    return (
      <img
        key={idx}
        src={src}
        alt={`preview-${idx}`}
        className="w-20 h-20 object-cover rounded border"
      />
    );
  })
}
    </div>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium text-gray-900">Product Variants</h2>
                <button
                  type="button"
                  onClick={addVariant}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
                >
                  Add Variant
                </button>
              </div>
              {formData.variants.map((variant, index) => (
                <div key={variant.id} className="border border-gray-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium text-gray-700">Variant {index + 1}</h3>
                    {formData.variants.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeVariant(variant.id)}
                        className="text-red-600 hover:text-red-700 text-sm"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Variant Name *
                      </label>
                      <input
                        type="text"
                        value={variant.name}
                        onChange={(e) => handleVariantChange(variant.id, 'name', e.target.value)}
                        placeholder="e.g., Red, Blue, Green"
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Material Care
                      </label>
                      <RichTextEditor
                        name={`variant-material-care-${variant.id}`}
                        value={variant.materialCare}
                        onChange={(e) => handleVariantChange(variant.id, 'materialCare', e.target.value)}
                        placeholder="Enter variant material care instructions"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Description
                      </label>
                      <RichTextEditor
                        name={`variant-description-${variant.id}`}
                        value={variant.description}
                        onChange={(e) => handleVariantChange(variant.id, 'description', e.target.value)}
                        placeholder="Enter variant description"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;