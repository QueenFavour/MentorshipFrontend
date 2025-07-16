import React from 'react';

function Login() {
  return (
    <div className="mt-10">
      {/* Page Title */}
      <h1 className="text-center font-bold text-2xl">Mentorship Login Page</h1>

      {/* Login Form Box */}
      <form className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg">
        {/* Form Heading */}
        <h2 className="text-xl font-bold text-center mb-6">Login to your account</h2>

        {/* Email Input */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-black mb-2">
            Email address
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="Type in a valid email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* You can add password input and submit button below as needed */}
      </form>
    </div>
  );
}

export default Login;
