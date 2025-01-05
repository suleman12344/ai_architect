"use client";
import { motion } from "motion/react";
import Image from "next/image";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/lib/validation/schema";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    console.log("onsubmit");
    try {
      // API call to login
      const result = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
        cache: "no-store",
      });
      if (result.ok) {
        const response = await result.json();
        toast.success(response.message);
        form.reset();
        router.replace("/");
      } else {
        const response = await result.json();
        toast.error(response.message);
      }
    } catch (err) {
      console.log("🚀 ~ onSubmit ~ err:", err);
    }
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/ai3.png')" }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 backdrop-blur-md bg-white bg-opacity-10 rounded-xl shadow-2xl  gap-20">
        <motion.div
          className="w-96 ml-20 mt-16"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#5ae3a7] mb-8 text-center ">
            Sign Up
          </h2>
          <form
            className="flex flex-col space-y-6"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <input
              {...form.register("name")}
              type="text"
              placeholder="Username"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5ae3a7] transition-all"
            />
            <input
              {...form.register("email")}
              type="email"
              placeholder="Email"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5ae3a7] transition-all"
            />
            <input
              {...form.register("password")}
              type="password"
              placeholder="Password"
              required
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5ae3a7] transition-all"
            />
            <button
              type="submit"
              className="bg-[#5ae3a7] text-white p-3 rounded-lg shadow-md "
            >
              Create Account
            </button>
          </form>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/4673526.jpg"
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

export default SignUp;
