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
      className="w-full pt-20 pb-0 lg:pb-8 flex flex-col justify-center items-stretch text-gray-900 dark:text-white"
    >
      {/* Heading */}
      <h2 className="w-full text-left lg:text-center text-3xl md:text-4xl font-bold mb-4">
        I Build Websites That Actually Grow Your Business
      </h2>

      {/* Subheading */}
      <p className="w-full text-left lg:text-center mb-6 lg:mb-12 text-lg md:px-20">
        Custom & Platform-Specific Websites using{" "}
        <strong>WordPress, Shopify, Webflow, Wix, MERN & Next.js</strong> —
        E-Commerce, Landing Pages & Blogs. Fast, Clean, and Built to{" "}
        <strong>Convert Visitors into Customers</strong>.
      </p>

      {/* Cards Grid */}
      <div className="w-full flex flex-wrap justify-between items-center ">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full my-1 lg:my-5 sm:w-[45%] lg:w-[500px] lg:h-[500px]"
          >
            <CardContainer className="w-full h-full flex justify-center py-2 lg:py-4">
              <CardBody className="bg-white  dark:bg-gray-800 w-full h-full p-5  rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300">
                <CardItem className="font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                  {service.title}
                </CardItem>
                <CardItem className="text-gray-700 dark:text-gray-300 mb-4 text-ellipsis">
                  {service.description}
                </CardItem>
                <CardItem className="mb-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={500}
                    height={200}
                    className="rounded-md object-cover"
                  />
                </CardItem>

                {/* CTA Buttons */}
                <CardItem className="w-full flex  flex-row justify-between items-center mt-4 gap-3">
                  <Link href="#contact">
                    <button className="w-full sm:flex-1 text-gray-900 dark:text-white py-3 rounded-lg transition-colors font-semibold">
                      Let’s Talk
                    </button>
                  </Link>
                  <Link href="#contact">
                    <Button className="w-full sm:flex-1 py-3 rounded-lg  transition-colors font-semibold">
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
