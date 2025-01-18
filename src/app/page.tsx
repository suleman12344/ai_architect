//import Image from "next/image";
"use client";
import Banar from "@/components/banner";
import Home_details from "@/components/home_details";
import React from "react";
//simport Link from "next/link";
export default function Home() {
  return (
    <div className="relative ">
      <Banar />
      <Home_details />
    </div>
  );
}
