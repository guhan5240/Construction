// utils/collectionUtils.js

/**
 * Filter products based on selected filters
 * @param {Array} products - Array of product objects
 * @param {Object} filters - Filter criteria
 * @returns {Array} Filtered products
 */
export const filterProducts = (products, filters) => {
  return products.filter(product => {
    // Size filter
    if (filters.sizes.length > 0) {
      const hasMatchingSize = filters.sizes.some(size => 
        product.sizes.includes(size)
      );
      if (!hasMatchingSize) return false;
    }

    // Color filter
    if (filters.colors.length > 0) {
      const hasMatchingColor = filters.colors.some(color => 
        product.colors.includes(color)
      );
      if (!hasMatchingColor) return false;
    }

    // Price range filter
    if (filters.priceRange.length > 0) {
      const productPrice = parseFloat(product.price.replace('₹', '').replace(',', ''));
      const isInPriceRange = filters.priceRange.some(range => {
        switch (range) {
          case '0-1000':
            return productPrice >= 0 && productPrice <= 1000;
          case '1000-1500':
            return productPrice > 1000 && productPrice <= 1500;
          case '1500-2000':
            return productPrice > 1500 && productPrice <= 2000;
          case '2000+':
            return productPrice > 2000;
          default:
            return false;
        }
      });
      if (!isInPriceRange) return false;
    }

    return true;
  });
};

/**
 * Sort products based on sort criteria
 * @param {Array} products - Array of product objects
 * @param {string} sortBy - Sort criteria
 * @returns {Array} Sorted products
 */
export const sortProducts = (products, sortBy) => {
  const sortedProducts = [...products];

  switch (sortBy) {
    case 'newest':
      return sortedProducts.sort((a, b) => b.id - a.id);
    
    case 'oldest':
      return sortedProducts.sort((a, b) => a.id - b.id);
    
    case 'price-low':
      return sortedProducts.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('₹', '').replace(',', ''));
        const priceB = parseFloat(b.price.replace('₹', '').replace(',', ''));
        return priceA - priceB;
      });
    
    case 'price-high':
      return sortedProducts.sort((a, b) => {
        const priceA = parseFloat(a.price.replace('₹', '').replace(',', ''));
        const priceB = parseFloat(b.price.replace('₹', '').replace(',', ''));
        return priceB - priceA;
      });
    
    case 'name-az':
      return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
    
    case 'name-za':
      return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
    
    case 'rating':
      return sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    
    case 'popular':
      return sortedProducts.sort((a, b) => (b.reviews || 0) - (a.reviews || 0));
    
    default:
      return sortedProducts;
  }
};

/**
 * Get products by category
 * @param {Array} products - Array of product objects
 * @param {string} category - Category name
 * @returns {Array} Products in category
 */
export const getProductsByCategory = (products, category) => {
  if (!category || category === 'ALL') {
    return products;
  }
  return products.filter(product => product.category === category);
};

/**
 * Calculate discount percentage
 * @param {string} originalPrice - Original price with currency
 * @param {string} salePrice - Sale price with currency
 * @returns {number} Discount percentage
 */
export const calculateDiscount = (originalPrice, salePrice) => {
  if (!originalPrice) return 0;
  
  const original = parseFloat(originalPrice.replace('₹', '').replace(',', ''));
  const sale = parseFloat(salePrice.replace('₹', '').replace(',', ''));
  
  return Math.round(((original - sale) / original) * 100);
};

/**
 * Format price for display
 * @param {number} price - Price number
 * @returns {string} Formatted price string
 */
export const formatPrice = (price) => {
  return `₹${price.toLocaleString('en-IN')}`;
};

/**
 * Search products by name or description
 * @param {Array} products - Array of product objects
 * @param {string} query - Search query
 * @returns {Array} Matching products
 */
export const searchProducts = (products, query) => {
  if (!query.trim()) return products;
  
  const searchTerm = query.toLowerCase().trim();
  return products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    (product.description && product.description.toLowerCase().includes(searchTerm)) ||
    product.category.toLowerCase().includes(searchTerm)
  );
};

/**
 * Get unique values from product array for filter options
 * @param {Array} products - Array of product objects
 * @param {string} key - Key to extract unique values from
 * @returns {Array} Array of unique values
 */
export const getUniqueValues = (products, key) => {
  const values = products.reduce((acc, product) => {
    if (Array.isArray(product[key])) {
      acc.push(...product[key]);
    } else if (product[key]) {
      acc.push(product[key]);
    }
    return acc;
  }, []);
  
  return [...new Set(values)].sort();
};

/**
 * Paginate products array
 * @param {Array} products - Array of product objects
 * @param {number} currentPage - Current page number (1-based)
 * @param {number} itemsPerPage - Items per page
 * @returns {Object} Paginated result with products and pagination info
 */
export const paginateProducts = (products, currentPage = 1, itemsPerPage = 12) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);
  
  return {
    products: paginatedProducts,
    currentPage,
    totalPages: Math.ceil(products.length / itemsPerPage),
    totalProducts: products.length,
    hasNextPage: endIndex < products.length,
    hasPreviousPage: currentPage > 1
  };
};