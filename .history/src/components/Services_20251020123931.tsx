import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full py-12 flex flex-col justify-center items-stretch text-gray-900 dark:text-white"
    >
      {/* Heading */}
      <h2 className="w-full text-center text-3xl md:text-4xl font-bold mb-4">
        I Build Websites That Actually Grow Your Business
      </h2>

      {/* Subheading */}
      <p className="w-full text-center mb-12 text-lg px-4 md:px-20">
        Custom Websites & Platform-Specific Development using{" "}
        <strong>WordPress, Shopify, Webflow, MERN & Next.js</strong> —
        E-Commerce, Landing Pages & Blogs. Fast, Clean, and Built to{" "}
        <strong>Convert Visitors into Customers</strong>.
      </p>

      {/* Cards Container */}
      <div className="w-full flex flex-wrap justify-center gap-8">
        {/* Custom Website Card */}
        <CardContainer className="h-auto flex justify-center">
          <CardBody className="bg-black w-80 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <CardItem className="font-semibold text-lg mb-2">
              I Build Custom Full-Stack Websites
            </CardItem>
            <CardItem className="text-gray-300 mb-2">
              Fast, responsive, and optimized for conversions. Using{" "}
              <strong>MERN & Next.js</strong>, I create scalable web apps that
              grow your business.
            </CardItem>
            <CardItem>
              <Image
                src={"/fiverr/custom-website-gig.png"}
                alt="Custom Website Development"
                width={400}
                height={200}
                className="rounded-md"
              />
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Shopify Store Card */}
        <CardContainer className="h-auto flex justify-center">
          <CardBody className="bg-black w-80 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <CardItem className="font-semibold text-lg mb-2">
              Shopify Stores Optimized for SEO & Mobile
            </CardItem>
            <CardItem className="text-gray-300 mb-2">
              I create <strong>SEO-friendly, mobile-optimized</strong> Shopify
              stores with fast loading speeds and custom designs, built to
              convert visitors into paying customers and grow your e-commerce
              business.
            </CardItem>
            <CardItem>
              <Image
                src={"/fiverr/shopify-gig.png"}
                alt="Shopify Store Development"
                width={400}
                height={200}
                className="rounded-md"
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default Services;
