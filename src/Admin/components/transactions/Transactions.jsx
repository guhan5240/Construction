import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen md:ml-64">
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <table className="w-full text-sm text-left border">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2 border">Order ID</th>
              <th className="px-4 py-2 border">Customer Name</th>
              <th className="px-4 py-2 border">Amount</th>
              <th className="px-4 py-2 border">Payment Method</th>
              <th className="px-4 py-2 border">Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td className="px-4 py-2 border">{transaction.id}</td>
                <td className="px-4 py-2 border">{transaction.name}</td>
                <td className="px-4 py-2 border">{transaction.amount}</td>
                <td className="px-4 py-2 border">{transaction.payment}</td>
                <td className="px-4 py-2 border text-green-600">{transaction.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Transactions;