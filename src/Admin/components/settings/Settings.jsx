import React, { useState, useEffect } from 'react';
import { Settings as SettingsIcon, Save, Bell, Store, CreditCard, Globe, Mail } from 'lucide-react';

const Settings = () => {
  const [settings, setSettings] = useState({
   //storeName: 'My E-Shop',
    //storeDescription: '',
   // currency: 'INR',
   // tax: '18',
   // notifications: false,
   // emailNotifications: true,
   // orderAlerts: true,
   // lowStockAlerts: false,
    paymentMethods: {
      razorpay: true,
      cod: false
    },
    shippingRates: {
      standard: '50',
      express: '150',
      freeShippingThreshold: '1000'
    }
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        // Replace with your API endpoint
        // const response = await axios.get('http://localhost:8080/api/settings');
        // setSettings(response.data);
      } catch (error) {
        console.error('Error fetching settings:', error);
      }
    };

    fetchSettings();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setSettings(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setSettings(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      // Replace with your API endpoint
      // await axios.post('http://localhost:8080/api/settings', settings);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage({ type: 'success', text: 'Settings saved successfully!' });
    } catch (error) {
      console.error('Error saving settings:', error);
      setMessage({ type: 'error', text: 'Failed to save settings. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <SettingsIcon size={28} />
          Store Settings
        </h2>
        <p className="text-gray-600 mt-1">Manage your store configuration and preferences</p>
      </div>

      {message.text && (
        <div className={`mb-6 p-4 rounded-lg flex items-center gap-2 ${
          message.type === 'success' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'
        }`}>
          {message.text}
        </div>
      )}

      <div className="max-w-4xl">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Store Information */}
        {/*}  <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Store size={20} className="text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-800">Store Information</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Store Name</label>
                <input 
                  type="text" 
                  name="storeName" 
                  value={settings.storeName} 
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Currency</label>
                <select 
                  name="currency" 
                  value={settings.currency} 
                  onChange={handleChange}
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="INR">INR (₹)</option>
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Store Description</label>
                <textarea 
                  name="storeDescription" 
                  value={settings.storeDescription} 
                  onChange={handleChange}
                  rows={3}
                  placeholder="Describe your store..."
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>*/}

          {/* Tax Settings */}{/*
          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard size={20} className="text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-800">Tax & Pricing</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tax Rate (%)</label>
                <input 
                  type="number" 
                  name="tax" 
                  value={settings.tax} 
                  onChange={handleChange}
                  min="0"
                  max="100"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Standard Shipping (₹)</label>
                <input 
                  type="number" 
                  name="shippingRates.standard" 
                  value={settings.shippingRates.standard} 
                  onChange={handleChange}
                  min="0"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Express Shipping (₹)</label>
                <input 
                  type="number" 
                  name="shippingRates.express" 
                  value={settings.shippingRates.express} 
                  onChange={handleChange}
                  min="0"
                  className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">Free Shipping Threshold (₹)</label>
                <input 
                  type="number" 
                  name="shippingRates.freeShippingThreshold" 
                  value={settings.shippingRates.freeShippingThreshold} 
                  onChange={handleChange}
                  min="0"
                  placeholder="Minimum order value for free shipping"
                  className="w-full md:w-1/3 border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>*/}

          {/* Payment Methods */}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard size={20} className="text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-800">Payment Methods</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  name="paymentMethods.razorpay" 
                  checked={settings.paymentMethods.razorpay} 
                  onChange={handleChange}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="text-sm font-medium text-gray-700">Razorpay</label>
              </div>
              
             {/* <div className="flex items-center">
                <input 
                  type="checkbox" 
                  name="paymentMethods.debitCard" 
                  checked={settings.paymentMethods.debitCard} 
                  onChange={handleChange}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="text-sm font-medium text-gray-700">Debit Card</label>
              </div>*/} 
              
              {/*<div className="flex items-center">
                <input 
                  type="checkbox" 
                  name="paymentMethods.upi" 
                  checked={settings.paymentMethods.upi} 
                  onChange={handleChange}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="text-sm font-medium text-gray-700">UPI</label>
              </div>*/}
              
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  name="paymentMethods.cod" 
                  checked={settings.paymentMethods.cod} 
                  onChange={handleChange}
                  className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label className="text-sm font-medium text-gray-700">Cash on Delivery</label>
              </div>
            </div>
          </div>

          {/* Notification Settings */}{/*}
          <div className="bg-white shadow-sm rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Bell size={20} className="text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-800">Notifications</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Email Notifications</label>
                  <p className="text-xs text-gray-500">Receive email alerts for important updates</p>
                </div>
                <input 
                  type="checkbox" 
                  name="emailNotifications" 
                  checked={settings.emailNotifications} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Order Alerts</label>
                  <p className="text-xs text-gray-500">Get notified when new orders are placed</p>
                </div>
                <input 
                  type="checkbox" 
                  name="orderAlerts" 
                  checked={settings.orderAlerts} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-sm font-medium text-gray-700">Low Stock Alerts</label>
                  <p className="text-xs text-gray-500">Alert when products are running low</p>
                </div>
                <input 
                  type="checkbox" 
                  name="lowStockAlerts" 
                  checked={settings.lowStockAlerts} 
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
              </div>
            </div>
          </div>*/}

          {/* Save Button */}
          <div className="flex justify-end">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 disabled:bg-green-400 transition-colors flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save size={18} />
                  Save Settings
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;