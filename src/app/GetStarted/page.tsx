"use client";
import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
function GetStarted() {
  return (
    <main className="">
      <div className="sm:p-5 ">
        <Navbar />
        <div className="bg-black h-96 flex items-center justify-center flex-col bg-[url('/getstarte.jpg')] bg-cover bg-center bg-no-repeat">
          <h1 className="text-white text-5xl font-bold">Get Started</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  href="/"
                  className="text-white hover:text-gray-400"
                >
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator>/</BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white font-bold">
                  Get Started
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <>
        <form className="px-72 p-10 grid grid-cols-2 gap-10">
          <div>
            <Label>Square foot</Label>
            <Input />
          </div>
          <div>
            <Label>Rooms</Label>
            <Input />
          </div>
          <div>
            <Label>Cover Area</Label>
            <Input />
          </div>
          <div>
            <Label>Floor&apos;s</Label>
            <Input />
          </div>
          <Button className="w-full col-span-2">Submit</Button>
          <div className="col-span-2 border-2 border-black p-20 rounded-xl">
            Result Image
          </div>
        </form>
      </>
      <Footer />
    </main>
  );
}

export default GetStarted;
