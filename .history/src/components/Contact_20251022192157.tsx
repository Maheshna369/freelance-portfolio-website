"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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
        <motion.form
          onSubmit={handleSubmit}
          className="lg:w-1/2 flex flex-col gap-4 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="">Select Project Type (Optional)</option>
            <option value="website">Website / Web App</option>
            <option value="ecommerce">E-commerce</option>
            <option value="portfolio">Portfolio / Blog</option>
            <option value="other">Other</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            rows={6}
            className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="p-4 bg-blue-600 dark:bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition-all duration-300"
          >
            Send Message 🚀
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
