import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

const Services = () => {
  return (
    <section
      id="services"
      className="w-full h-auto py-8 flex flex-col justify-center items-stretch text-gray-900 dark:text-white"
    >
      <h2 className="w-full flex justify-center items-center text-3xl font-bold mb-4">
        I Build Websites That Actually Grow Your Business
      </h2>
      <p className="w-full flex justify-center items-center mb-8 text-center px-4">
        Custom Websites & Platform-Specific Development using WordPress,
        Shopify, Webflow, MERN & Next.js — E-Commerce, Landing Pages & Blogs,
        Fast, Clean, and Built to Convert Visitors into Customers
      </p>

      {/* Custom Website Card Container */}
      <CardContainer className="w-full flex justify-center mb-8">
        <CardBody className="bg-black w-80">
          <CardItem>
            I will do website development, build ecommerce custom website as
            full stack developer
          </CardItem>
          <CardItem>Fast, responsive, and optimized for conversions.</CardItem>
          <CardItem>
            <Image
              src={"/fiverr/custom-website-gig.png"}
              alt="custom website gig"
              width={400}
              height={200}
            />
          </CardItem>
        </CardBody>
      </CardContainer>

      {/* Shopify Store Card Container */}
      <CardContainer className="w-full flex justify-center">
        <CardBody className="bg-black w-80">
          <CardItem>
            I Will Develop a Shopify Store with SEO & Mobile Optimization
          </CardItem>
          <CardItem>
            I will create a Shopify store that is SEO-friendly,
            mobile-optimized, and designed for high performance. With fast
            loading speeds and custom designs, your store will be built to
            convert and drive traffic, helping grow your e-commerce business.
          </CardItem>
          <CardItem>
            <Image
              src={"/fiverrr/shopify-gig.png"}
              alt="shopify store gig"
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
