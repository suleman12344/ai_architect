import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
function page() {
  return (
    <main className="">
      <div className="sm:p-5 ">
        <Navbar />
        <div className="bg-black h-96 flex items-center justify-center flex-col bg-[url('/ai-12.jpg')] bg-cover bg-center bg-no-repeat">
          <h1 className="text-white text-5xl font-bold">About Us</h1>
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
                  About us
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
      <div className="bg-black flex flex-wrap justify-evenly items-center text-white px-10 p-10 gap-20">
        {/* First Container: Image */}
        <div className="relative w-full md:w-1/2 max-w-lg aspect-[7/6] rounded-2xl overflow-hidden">
          <Image
            src="/map_ref.jpg"
            alt="Image not found"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Second Container: Text Content */}
        <div className="w-full md:w-1/2 max-w-lg">
          <p className="text-sm">About US</p>
          <p className="text-4xl font-bold mb-4">
            We always try to make user vision into reality.
          </p>
          <p className="leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged.
          </p>
        </div>
        <div className="relative w-full md:w-1/2 max-w-md aspect-[7/6] rounded-2xl overflow-hidden"></div>
      </div>

      <Footer />
    </main>
  );
}

export default page;
