import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
const Services = () => {
  return (
    <section
      id="services"
      className="w-full h-auto py-8 flex flex-col justify-center items-stretch text-gray-900 dark:text-white"
    >
      <h2 className="w-full flex justify-center items-center">
        I Build Websites That Actually Grow Your Business
      </h2>
      <p className="w-full flex justify-center items-center">
        Custom Websites & Platform-Specific Development using WordPress,
        Shopify, Webflow, MERN & Next.js — E-Commerce, Landing Pages & Blogs,
        Fast, Clean, and Built to Convert Visitors into Customers
      </p>
      <CardContainer className="w-full flex flex-row justify-between items-center">
        <CardBody>
          <CardItem>
            <div className="p-4">
              <h3 className="text-lg font-semibold">Custom Websites</h3>
              <p className="text-sm">
                Fast, responsive, and optimized for conversions.
              </p>
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </section>
  );
};

export default Services;
