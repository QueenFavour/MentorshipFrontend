
import { useState } from "react";

function Login() {
  const [email, setEmail]= useState<string>("");
  const [password, setPassword]= useState<string>("");

   function submit(e: { preventDefault: () => void; }) {
    e.preventDefault();
    console.log("Submitted:", { email, name });
    // Perform login or validation logic here
  }




  return (
    <div className="mt-10">
      {/* Page Title */}
      <h1 className="text-center font-bold text-2xl">Mentorship Login Page</h1>

      {/* Login Form Box */}
      <form className="max-w-md mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg" onSubmit={submit}>
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
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type in a valid email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
           
           {/* Password Input */}
        <div className="mt-5">
          <label htmlFor="password" className="block text-black mb-2">
            Password
          </label>
          <input
            type="Password"
            id="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type in a valid Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
          />
          <button type='submit' className="right-3 top-9 mt-5 text-2xl bg-emerald-500 p-2 rounded-2xl w-fit justify-center focus:outline-none hover:bg-emerald-900">Login</button>

          </div>

        </div>

        
      </form>
    </div>
  )
}

export default Login;
