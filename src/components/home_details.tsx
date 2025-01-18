import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
function home_details() {
  const cards = [
    {
      id: 1,
      content: "card 1",
      thumbnail: "/sofa.jpg",
      className: "row-span-2",
    },
    {
      id: 2,
      content: "card 4",
      thumbnail: "/pink.jpeg",
      className: "col-span-2",
    },
    {
      id: 3,
      content: "card 3",
      className: "",
      thumbnail: "/im1.jpg",
    },
    {
      id: 4,
      content: "card 2",
      className: "",
      thumbnail: "/im2.jpg",
    },
  ];
  const How_card = [
    {
      id: 1,
      content: "card 1",
      thumbnail: "/im3.jpg",
      className: "row-span-2 col-span-3",
    },
  ];

  return (
    <main>
      <div className="flex flex-col lg:flex-row bg-black text-white px-20 py-20">
        {/* About Us Section */}
        <div className="flex-[1] flex flex-col justify-center lg:pr-10 space-y-2">
          <p className="text-sm text-gray-400">About Us</p>
          <p className="text-2xl font-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <p className="text-sm text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text
          </p>
          <div className="flex flex-wrap gap-8 pt-8">
            <div>
              <p className="text-2xl font-bold">255+</p>
              <p className="text-sm text-gray-400">Lorem Ipsum</p>
              <p className="text-2xl font-bold">255+</p>
              <p className="text-sm text-gray-400">Lorem Ipsum</p>
            </div>
            <div className="mb-10">
              <p className="text-2xl font-bold">255+</p>
              <p className="text-sm text-gray-400">Lorem Ipsum</p>
              <p className="text-2xl font-bold">255+</p>
              <p className="text-sm text-gray-400">Lorem Ipsum</p>
            </div>
          </div>
          <Button className="bg-white text-black hover:text-black hover:bg-white">
            Learn More
          </Button>
        </div>

        {/* Layout Grid Section */}
        <div className="flex-[3] justify-center items-center min-h-[80vh] lg:h-[calc(100vh-80px)] sm:block hidden">
          <LayoutGrid cards={cards} />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row bg-[#121d19] text-white pl-10 pr-20  py-20">
        {/* Layout Grid Section */}
        <div className="flex-[2] justify-center items-center min-h-[80vh] lg:h-[calc(100vh-80px)] sm:block hidden">
          <LayoutGrid cards={How_card} />
        </div>
        {/* About Us Section */}
        <div className="flex-[1] flex flex-col justify-center lg:pr-10 space-y-2">
          <p className="text-sm text-gray-400">How it Works</p>
          <p className="text-2xl font-bold">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </p>
          <p className="text-sm text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text
          </p>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Button className="bg-white text-black hover:text-black hover:bg-white">
            Get Started
          </Button>
        </div>
      </div>

      <div className="container mx-auto relative bg-black text-white">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center leading-loose">
          <p className="md:text-4xl text-2xl font-bold">
            Subscribe Our Newsletter
          </p>
          <p className="font-extralight">
            Get the latest information and promo offers directly
          </p>
          <div className="flex justify-center w-96 mx-auto mt-5">
            <Input placeholder="Enter your email" className="mr-2" />
            <Button className="bg-white text-black">Get Started</Button>
          </div>
        </div>
        <div className="p-20 flex justify-center">
          <p className="md:text-9xl text-5xl font-bold text-center text-[#121d19]">
            Newsletter
          </p>
        </div>
      </div>
    </main>
  );
}

export default home_details;
