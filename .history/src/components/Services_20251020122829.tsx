import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
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
      <CardContainer className="w-1/2 flex flex-row justify-between items-center">
        <CardBody className="bg-black">
          <CardItem>
            I will do website development, build ecommerce custom website as
            full stack developer
          </CardItem>
          <CardItem> Fast, responsive, and optimized for conversions.</CardItem>
          <CardItem>
            {" "}
            <Image
              src={"/fiverr/custom-website-gig.png"}
              alt="custom website gig"
              width={400}
              height={200}
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </section>
  );
};

export default Services;
