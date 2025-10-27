"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "./ui/Label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { cn } from "@/lib/utils";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email invalid";
    if (!formData.message.trim()) newErrors.message = "Message required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) return setErrors(formErrors);

    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      projectType: "",
      message: "",
    });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="w-full flex flex-col justify-center items-center py-20 px-4 lg:px-20 bg-gray-50 dark:bg-gray-900">
      {/* TITLE + DESCRIPTION */}
      <motion.div
        className="text-center lg:text-left mb-12 max-w-3xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          🚀 Let’s Build Something Powerful Together
        </h2>
        <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
          Got a project, idea, or question? Let’s talk! I build high-performance
          web apps that deliver measurable results and solve real problems.
        </p>
      </motion.div>

      {/* CONTACT GRID */}
      <div className="w-full flex flex-col lg:flex-row gap-12">
        {/* LEFT: Quick Info */}
        <motion.div
          className="lg:w-1/2 flex flex-col gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
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
            I usually respond within 12 hours. Let’s make something amazing
            happen!
          </p>
        </motion.div>

        {/* RIGHT: Contact Form */}
        <motion.form
          className="lg:w-1/2 flex flex-col gap-4 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          {/* NAME */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Tyler"
                value={formData.firstName}
                onChange={handleChange}
                className={cn(errors.firstName && "border-red-500")}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="flex-1">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Durden"
                value={formData.lastName}
                onChange={handleChange}
                className={cn(errors.lastName && "border-red-500")}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* EMAIL */}
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="projectmayhem@fc.com"
              value={formData.email}
              onChange={handleChange}
              className={cn(errors.email && "border-red-500")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* PROJECT TYPE */}
          <div>
            <Label htmlFor="projectType">Project Type</Label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              className="p-3 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Select Project Type (Optional)</option>
              <option value="web">Website / Web App</option>
              <option value="ecommerce">E-commerce</option>
              <option value="portfolio">Portfolio / Blog</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* MESSAGE */}
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project..."
              value={formData.message}
              onChange={handleChange}
              className={cn(errors.message && "border-red-500")}
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="group relative block h-12 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-lg overflow-hidden hover:from-blue-600 hover:to-cyan-500 transition-all duration-300"
          >
            Send Message &rarr;
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
