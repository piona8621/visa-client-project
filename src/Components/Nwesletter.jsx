// Newsletter.js
import React from 'react';

const Newsletter = () => {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-mono font-bold text-center text-red-700 mb-6">Stay Updated</h2>
      <p className="text-lg text-white text-center mb-6">Subscribe to our newsletter to receive the latest visa updates and offers directly to your inbox.</p>
      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 border rounded-l-md"
        />
        <button className="bg-red-900 bg-opacity-80 px-6 py-2 rounded-r-md text-white font-semibold">Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;
