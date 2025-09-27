import React from "react";

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
          Terms & Conditions
        </h1>
        <p className="leading-7 text-justify text-gray-600 mb-4">
          Welcome to Extreme Culture. By using our website, you agree to comply
          with and be bound by the following terms and conditions. Please review
          these terms carefully before accessing or using our services.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">1. General Use</h2>
        <p className="leading-7 text-gray-600 mb-4">
          The content provided on this site is for informational purposes only.
          We reserve the right to modify or discontinue any part of our website
          without notice.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">2. Purchases</h2>
        <p className="leading-7 text-gray-600 mb-4">
          All sales are subject to availability and confirmation of payment.
          Prices are subject to change without prior notice.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">3. User Conduct</h2>
        <p className="leading-7 text-gray-600 mb-4">
          Users must not misuse our website by attempting unauthorized access,
          distributing harmful content, or violating any applicable laws.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
        <p className="leading-7 text-gray-600 mb-4">
          Extreme Culture is not liable for any damages resulting from the use
          or inability to use our website or services.
        </p>
      </main>
    </div>
  );
};

export default Terms;
