"use client";
import { motion } from "motion/react";
import Image from "next/image";
const Login = () => {
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/ai3.png')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 backdrop-blur-md bg-white bg-opacity-30 rounded-xl shadow-2xl ">
        <motion.div
          className="w-96 ml-14 mt-16"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-semibold text-[#5ae3a7] mb-8 text-center">
            Log In
          </h2>
          <form className="flex flex-col space-y-6">
            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5ae3a7] transition-all"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5ae3a7] transition-all"
            />
            <button
              type="submit"
              className="bg-[#5ae3a7] p-3 rounded-lg shadow-md"
            >
              Log In
            </button>
            <div className="text-center mt-4">
              <a href="/signup" className="text-[#5ae3a7] hover:underline">
                Dont have an account? Sign Up
              </a>
            </div>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/3094352.jpg"
            width="500"
            height="100"
            alt="image not found"
            className="rounded-xl"
          ></Image>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
