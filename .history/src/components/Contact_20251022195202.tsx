"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "./ui/Label";
import { Input } from "./ui/input";
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send form data via API or email
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "", projectType: "" });
  };

  return (
    <section className="w-full flex flex-col justify-center items-center py-20 px-4 lg:px-20 bg-gray-50 dark:bg-gray-900">
      {/* TITLE + DESCRIPTION */}
      <motion.div
        className="text-center lg:text-left mb-12 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          🚀 Let’s Build Something Powerful Together
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
          Got a project, idea, or question? Let’s talk! I help businesses and
          individuals craft high-performance web apps and digital solutions that
          deliver real results.
        </p>
      </motion.div>

      {/* TWO-COLUMN CONTACT AREA */}
      <div className="w-full flex flex-col lg:flex-row gap-12">
        {/* LEFT: Quick Contact Info */}
        <motion.div
          className="lg:w-1/2 flex flex-col gap-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Reach Me Directly
          </h3>
          <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-300">
            <p>
              📧 Email:{" "}
              <a
                href="mailto:hello@you.dev"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                hello@you.dev
              </a>
            </p>
            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/mahesh-nayak-53b653249/"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                linkedin.com/in/mahesh-nayak
              </a>
            </p>
            <p>
              🌐 Portfolio:{" "}
              <a
                href="#"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 underline"
              >
                yourwebsite.com
              </a>
            </p>
          </div>
          <p className="mt-6 text-gray-500 dark:text-gray-400 italic text-sm">
            I usually respond within 12 hours. Let’s build something amazing!
          </p>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <form className="my-8" onSubmit={handleSubmit}>
          <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <LabelInputContainer>
              <Label htmlFor="firstname">First name</Label>
              <Input id="firstname" placeholder="Tyler" type="text" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="lastname">Last name</Label>
              <Input id="lastname" placeholder="Durden" type="text" />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input id="password" placeholder="••••••••" type="password" />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="twitterpassword">Your twitter password</Label>
            <Input
              id="twitterpassword"
              placeholder="••••••••"
              type="twitterpassword"
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Sign up &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
