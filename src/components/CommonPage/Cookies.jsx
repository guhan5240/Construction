import React from "react";

const Cookies = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-gray-700">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
          Cookies Policy
        </h1>
        <p className="leading-7 text-justify text-gray-600 mb-4">
          This Cookies Policy explains how Extreme Culture uses cookies and
          similar technologies on our website. By continuing to use our site,
          you agree to the placement and use of cookies as described here.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. What Are Cookies?</h2>
        <p className="leading-7 text-gray-600 mb-4">
          Cookies are small text files placed on your device when you visit a
          website. They help store user preferences, support site functionality,
          and provide analytics to improve performance.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Cookies</h2>
        <p className="leading-7 text-gray-600 mb-4">
          We use cookies to:
        </p>
        <ul className="list-disc list-inside leading-7 text-gray-600 mb-4">
          <li>Remember your preferences and settings.</li>
          <li>Keep you signed in while using our services.</li>
          <li>Analyze traffic and usage patterns to enhance site performance.</li>
          <li>Deliver relevant marketing and promotional content.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Types of Cookies We Use</h2>
        <p className="leading-7 text-gray-600 mb-4">
          <strong>Essential Cookies:</strong> Required for core site functionality, like shopping cart and checkout.  
          <br />
          <strong>Performance Cookies:</strong> Collect anonymous data about how visitors use the website.  
          <br />
          <strong>Functional Cookies:</strong> Remember your preferences to provide a more personalized experience.  
          <br />
          <strong>Advertising Cookies:</strong> Used to deliver targeted ads relevant to your interests.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Managing Cookies</h2>
        <p className="leading-7 text-gray-600 mb-4">
          You can control or delete cookies through your browser settings. Note
          that disabling certain cookies may affect your experience and some
          features of the site may not function properly.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Updates to This Policy</h2>
        <p className="leading-7 text-gray-600 mb-4">
          We may update this Cookies Policy occasionally to reflect changes in
          technology, law, or our business practices. Updated versions will be
          posted on this page with a new “Last Updated” date.
        </p>
      </main>
    </div>
  );
};

export default Cookies;
