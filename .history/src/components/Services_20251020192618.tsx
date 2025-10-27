import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/moving-border";
const Services = () => {
  const services = [
    {
      title: "I Build Custom Full-Stack Websites",
      description:
        "Fast, responsive, and optimized for conversions. Using MERN & Next.js, I create scalable web apps that grow your business.",
      image: "/fiverr/custom-website-gig.png",
    },
    {
      title: "Shopify Stores Optimized for SEO & Mobile",
      description:
        "I create SEO-friendly, mobile-optimized Shopify stores with fast loading speeds and custom designs, built to convert visitors into paying customers.",
      image: "/fiverr/shopify-gig.png",
    },
    {
      title: "WordPress Websites That Convert",
      description:
        "I build professional WordPress websites that are fast, responsive, and fully customizable for your business needs.",
      image: "/fiverr/custom-website-gig.png",
    },
    {
      title: "Wix Websites Designed for Growth",
      description:
        "I create Wix websites that are visually stunning, fully responsive, and built to convert visitors into customers.",
      image: "/fiverr/custom-website-gig.png",
    },
  ];

  return (
    <section
      id="services"
      className="w-full py-20 flex flex-col justify-center items-stretch text-gray-900 dark:text-white"
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

      {/* Single Row Flex for All Cards */}
      <div className="w-full flex flex-row flex-wrap justify-between items-center">
        {services.map((service, index) => (
          <div key={index} className="w-[33%] flex flex-col items-center">
            <CardContainer className="w-full flex justify-center">
              <CardBody className="bg-white dark:bg-gray-800 w-full h-auto p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
                <CardItem className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  {service.title}
                </CardItem>
                <CardItem className="text-gray-700 dark:text-gray-300 mb-4">
                  {service.description}
                </CardItem>
                <CardItem className="mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={200}
                    className="rounded-md"
                  />
                </CardItem>
                {/* Buttons inside card */}
                <CardItem className="w-full flex justify-between items-center   mt-2">
                  <Link href="#contact">
                    <button className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
                      Let’s Talk
                    </button>
                  </Link>
                  <Link href="#contact">
                    <Button className="flex-1  py-2 rounded hover:bg-green-600 transition-colors">
                      Buy Now
                    </Button>
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
