import React, { useState } from 'react';
import TrackForm from '../TrackForm/TrackForm';
// import TrackForm from '../TrackForm/TrackForm';

const Support = () => {
  const [active, setActive] = useState('contact');

  return (
    <div className="w-full min-h-screen bg-white text-black">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        {/*px-36 Title */}
        <h1 className="text-4xl mt-5 py-8 font-bold mb-6">SUPPORT</h1>
        <hr className="border-gray-900 mb-8" />

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Sidebar */}
          <div className="w-[250px] h-[190px] bg-gray-200 pt-4 pr-7 ">
            <ul className="space-y-2">
              {['contact', 'track', 'faq'].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => setActive(tab)}
                    className={`w-full text-left px-3 py-2 border ${
                      active === tab
                        ? 'bg-white border-black font-semibold'
                        : 'bg-gray-100 hover:bg-gray-50'
                    }`}
                  >
                    {tab === 'contact' ? 'Contact Us' : tab === 'track' ? 'Track my order' : 'FAQ'}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content */}
          <div className="w-full md:max-w-2xl min-h-[490px] border border-gray-300 rounded-md p-6 -mt-4 ml-28 mb-10">
            {/* Keep container static, only change content */}
            {active === 'contact' && (
                
              <div>
                <h2 className="text-xl font-medium mb-4">Contact us</h2>
                 <hr className="border-gray-900 mb-8" />
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm mb-1">
                      Full Name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full border p-2 text-sm"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">
                        Email<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        className="w-full border p-2 text-sm"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">
                        Phone No<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        className="w-full border p-2 text-sm"
                        placeholder="Enter your phone"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">
                      Additional Information<span className="text-red-500">*</span>
                    </label>
                    <textarea
                      className="w-full border p-2 text-sm h-28"
                      placeholder="Enter additional info"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 text-sm hover:bg-gray-800"
                  >
                    Contact
                  </button>
                </form>
              </div>
            )}

            {active === 'track' && (
              <div>
    <h2 className="text-xl font-medium mb-4">Track my order</h2>
    <TrackForm/>   {/* 👈 imported component */}
  </div>
            )}

            {active === 'faq' && (
              <div>
                <h2 className="text-xl font-medium mb-4">FAQ</h2>
                <div className="space-y-4">
                  {[
                    'How can I provide feedback about the Experience?',
                    'Do you give offers for Bulk Booking?',
                    'How can I raise a Complaint?',
                    'What if no one is home during delivery?',
                    'How do I return the product if I don’t like it?',
                  ].map((q, i) => (
                    <details key={i} className="border-b pb-2">
                      <summary className="cursor-pointer font-medium text-sm">{q}</summary>
                      <p className="text-xs mt-2 text-gray-600">Answer content goes here…</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
          <hr className="border-gray-900 mb-8" />
      </div>
     
      {/* <Footer /> */}
    </div>
  );
};

export default Support;
