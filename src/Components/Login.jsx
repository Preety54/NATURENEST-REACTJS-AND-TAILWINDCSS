// import React from 'react'

// const Login = () => {
//   return (
//     <div
//       className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      
//     >
//       {/* Login Card */}
//       <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-80 sm:w-96">
//         <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
//           Welcome Back!
//         </h2>

//         {/* Login Form */}
//         <form>
//           {/* Email Input */}
//           <div className="mb-4">
            
//             <input
//               type="email"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           {/* Password Input */}
//           <div className="mb-6">
//             <input
//               type="password"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-500 transition duration-300"
//           >
//             Login
//           </button>
//         </form>

//         {/* Extra Links */}
//         <div className="text-center mt-4">
//           <p className="text-gray-600 text-sm">
//             Don't have an account?{" "}
//             <a
//               href="#"
//               className="text-green-500 hover:underline font-semibold"
//             >
//               Sign Up
//             </a>
//           </p>
//           <p className="text-gray-600 text-sm mt-2">
//             Forgot your password?{" "}
//             <a
//               href="#"
//               className="text-green-500 hover:underline font-semibold"
//             >
//               Reset It
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login

import React from "react";
import flowerBg from "../pics/flower.jpeg"; // Replace with the path to your image

const Login = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${flowerBg})`, // Setting the background image
      }}
    >
      {/* Login Card */}
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-80 sm:w-96">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Welcome Back!
        </h2>

        {/* Login Form */}
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <input
              type="password"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-2 rounded-lg hover:bg-green-500 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-4">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <a
              href="#"
              className="text-green-500 hover:underline font-semibold"
            >
              Sign Up
            </a>
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Forgot your password?{" "}
            <a
              href="#"
              className="text-green-500 hover:underline font-semibold"
            >
              Reset It
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

