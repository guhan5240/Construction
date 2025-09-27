import React from 'react';
import { Package } from 'lucide-react';

const Stock = ({ products = [] }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
            <Package size={24} />
            Stock Management
          </h1>
        </div>
      </div>

      {/* Stock Table */}
      <div className="p-6">
        <div className="max-w-5xl mx-auto">
          {products.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">No products available in stock.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Product Name</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Category</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Price</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Sale Price</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Cost</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Stock Status</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id || index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}>
                      <td className="px-4 py-3 text-sm font-medium text-gray-900 border-b">{product.productName}</td>
                      <td className="px-4 py-3 text-sm text-gray-600 border-b">
                        {product.category
                          .split('_')
                          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(' ')}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 border-b">
                        {product.sizeSpecificPricing
                          ? 'Varies by size'
                          : product.price
                            ? `$${parseFloat(product.price).toFixed(2)}`
                            : '-'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 border-b">
                        {product.sizeSpecificPricing
                          ? 'Varies by size'
                          : product.salePrice
                            ? `$${parseFloat(product.salePrice).toFixed(2)}`
                            : '-'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 border-b">
                        {product.sizeSpecificPricing
                          ? 'Varies by size'
                          : product.cost
                            ? `$${parseFloat(product.cost).toFixed(2)}`
                            : '-'}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 border-b">
                        {product.stockStatus
                          .split('_')
                          .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                          .join(' ')}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 border-b">{product.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Stock;