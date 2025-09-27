// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Customers = () => {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/customers')
//       .then(response => setCustomers(response.data))
//       .catch(error => console.error('Error fetching customers:', error));
//   }, []);

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen md:ml-64">
//       <h2 className="text-2xl font-bold mb-4">Customers</h2>
//       <div className="bg-white shadow rounded-lg p-6">
//         {customers.map((customer) => (
//           <div key={customer.id} className="p-4 border rounded-lg mb-4">
//             <p><strong>No:</strong> {customer.id}</p>
//             <p><strong>Customer Name:</strong> {customer.name}</p>
//             <p><strong>Address:</strong> {customer.address}</p>
//             <p><strong>Product Ordered:</strong> {customer.product}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Customers;

import React, { useEffect, useState } from 'react';
import { Users, Mail, Phone, MapPin, Package, Eye } from 'lucide-react';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        // Replace with your API endpoint
        // const response = await axios.get('http://localhost:8080/api/customers');
        // setCustomers(response.data);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCustomers([]); // Empty array for now
      } catch (error) {
        console.error('Error fetching customers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Users size={28} />
          Customers
        </h2>
        <p className="text-gray-600 mt-1">Manage your customers and view their information</p>
      </div>

      {loading ? (
        <div className="bg-white shadow-sm rounded-lg p-8">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <span className="ml-2 text-gray-600">Loading customers...</span>
          </div>
        </div>
      ) : customers.length === 0 ? (
        <div className="bg-white shadow-sm rounded-lg p-8">
          <div className="text-center">
            <Users size={64} className="mx-auto text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Customers Found</h3>
            <p className="text-gray-500">
              Customers will appear here once they register on your store.
            </p>
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Orders
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Joined
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                            <span className="text-blue-600 font-medium">
                              {customer.name?.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {customer.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {customer.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 flex items-center gap-1">
                        <Mail size={14} />
                        {customer.email}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <Phone size={14} />
                        {customer.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-1">
                        <Package size={14} className="text-gray-400" />
                        <span className="text-sm text-gray-900">{customer.totalOrders || 0}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {customer.joinedDate || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setSelectedCustomer(customer)}
                        className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                      >
                        <Eye size={14} />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Customer Details Modal */}
      {selectedCustomer && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-900">Customer Details</h3>
                <button
                  onClick={() => setSelectedCustomer(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-gray-700">Name:</label>
                  <p className="text-gray-900">{selectedCustomer.name}</p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Email:</label>
                  <p className="text-gray-900 flex items-center gap-1">
                    <Mail size={14} />
                    {selectedCustomer.email}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Phone:</label>
                  <p className="text-gray-900 flex items-center gap-1">
                    <Phone size={14} />
                    {selectedCustomer.phone}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Address:</label>
                  <p className="text-gray-900 flex items-start gap-1">
                    <MapPin size={14} className="mt-0.5" />
                    {selectedCustomer.address}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Total Orders:</label>
                  <p className="text-gray-900 flex items-center gap-1">
                    <Package size={14} />
                    {selectedCustomer.totalOrders || 0}
                  </p>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Last Product Ordered:</label>
                  <p className="text-gray-900">{selectedCustomer.product || 'None'}</p>
                </div>
              </div>
              
              <div className="flex justify-end mt-6">
                <button
                  onClick={() => setSelectedCustomer(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;