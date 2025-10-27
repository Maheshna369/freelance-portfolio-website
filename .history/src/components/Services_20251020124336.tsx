import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";

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
        Custom & Platform-Specific Websites using{" "}
        <strong>WordPress, Shopify, Webflow, Wix, MERN & Next.js</strong> —
        E-Commerce, Landing Pages & Blogs. Fast, Clean, and Built to{" "}
        <strong>Convert Visitors into Customers</strong>.
      </p>

      {/* 2x2 Grid Cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
        {/* Custom Website */}
        <CardContainer className="flex justify-center">
          <CardBody className="bg-black w-80 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <CardItem className="font-semibold text-lg mb-2">
              I Build Custom Full-Stack Websites
            </CardItem>
            <CardItem className="text-gray-300 mb-4">
              Fast, responsive, and optimized for conversions. Using{" "}
              <strong>MERN & Next.js</strong>, I create scalable web apps that
              grow your business.
            </CardItem>
            <CardItem className="mb-4">
              <Image
                src={"/fiverr/custom-website-gig.png"}
                alt="Custom Website Development"
                width={400}
                height={200}
                className="rounded-md"
              />
            </CardItem>
            <Link href="#contact">
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
                Hire Me
              </button>
            </Link>
          </CardBody>
        </CardContainer>

        {/* Shopify Store */}
        <CardContainer className="flex justify-center">
          <CardBody className="bg-black w-80 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <CardItem className="font-semibold text-lg mb-2">
              Shopify Stores Optimized for SEO & Mobile
            </CardItem>
            <CardItem className="text-gray-300 mb-4">
              I create <strong>SEO-friendly, mobile-optimized</strong> Shopify
              stores with fast loading speeds and custom designs, built to
              convert visitors into paying customers.
            </CardItem>
            <CardItem className="mb-4">
              <Image
                src={"/fiverr/shopify-gig.png"}
                alt="Shopify Store Development"
                width={400}
                height={200}
                className="rounded-md"
              />
            </CardItem>
            <Link href="#contact">
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
                Hire Me
              </button>
            </Link>
          </CardBody>
        </CardContainer>

        {/* WordPress Website */}
        <CardContainer className="flex justify-center">
          <CardBody className="bg-black w-80 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <CardItem className="font-semibold text-lg mb-2">
              WordPress Websites That Convert
            </CardItem>
            <CardItem className="text-gray-300 mb-4">
              I build professional <strong>WordPress websites</strong> that are
              fast, responsive, and fully customizable for your business needs.
            </CardItem>
            <CardItem className="mb-4">
              <Image
                src={"/fiverr/custom-website-gig.png"}
                alt="WordPress Website Development"
                width={400}
                height={200}
                className="rounded-md"
              />
            </CardItem>
            <Link href="#contact">
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
                Hire Me
              </button>
            </Link>
          </CardBody>
        </CardContainer>

        {/* Wix Website */}
        <CardContainer className="flex justify-center">
          <CardBody className="bg-black w-80 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <CardItem className="font-semibold text-lg mb-2">
              Wix Websites Designed for Growth
            </CardItem>
            <CardItem className="text-gray-300 mb-4">
              I create <strong>Wix websites</strong> that are visually stunning,
              fully responsive, and built to convert visitors into customers.
            </CardItem>
            <CardItem className="mb-4">
              <Image
                src={"/fiverr/custom-website-gig.png"}
                alt="Wix Website Development"
                width={400}
                height={200}
                className="rounded-md"
              />
            </CardItem>
            <Link href="#contact">
              <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors">
                Hire Me
              </button>
            </Link>
          </CardBody>
        </CardContainer>
      </div>
    </section>
  );
};

export default Services;
