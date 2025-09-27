import React from "react";

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
          Privacy Policy
        </h1>
        <p className="leading-7 text-justify text-gray-600 mb-4">
          At Extreme Culture, your privacy is very important to us. This Privacy Policy
          explains how we collect, use, and safeguard your personal information when
          you interact with our website and services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="leading-7 text-gray-600 mb-4">
          We may collect personal information such as your name, email address,
          shipping details, and payment information when you place an order or
          subscribe to our newsletter. We also collect non-personal data like
          browser type, device, and usage statistics.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="leading-7 text-gray-600 mb-4">
          Your information is used to process orders, improve our website, provide
          customer support, and send promotional updates (only if you have opted in).
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing of Data</h2>
        <p className="leading-7 text-gray-600 mb-4">
          We do not sell or rent your personal information to third parties. However,
          we may share it with trusted partners (such as payment processors and
          shipping providers) to complete your transactions.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Cookies & Tracking</h2>
        <p className="leading-7 text-gray-600 mb-4">
          Our website uses cookies to enhance your browsing experience, analyze site
          performance, and personalize content. You can disable cookies in your browser
          settings, though some features may not work as intended.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
        <p className="leading-7 text-gray-600 mb-4">
          We implement industry-standard security measures to protect your data. While
          we strive to safeguard your personal information, no method of transmission
          over the internet is 100% secure.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
        <p className="leading-7 text-gray-600 mb-4">
          You have the right to access, update, or delete your personal data at any
          time. Please contact us if you wish to exercise these rights.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Updates to This Policy</h2>
        <p className="leading-7 text-gray-600 mb-4">
          We may update this Privacy Policy from time to time. Changes will be posted
          on this page with the updated date.
        </p>
      </main>
    </div>
  );
};

export default Privacy;
