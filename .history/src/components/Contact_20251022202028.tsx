"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "./ui/Label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/text-area";
import { cn } from "@/lib/utils";

const projectOptions = [
  "Website Development",
  "E-commerce",
  "Web App",
  "UI/UX Design",
  "Other",
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    projectType: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [shakeField, setShakeField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setShakeField(null);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name required";
    if (!formData.email.trim()) newErrors.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email invalid";
    if (!formData.projectType.trim())
      newErrors.projectType = "Select a project type";
    if (!formData.message.trim()) newErrors.message = "Message required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setShakeField(Object.keys(formErrors)[0]);
      return;
    }

    // TODO: Replace with real API
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };
  const shake = { x: [0, -5, 5, -5, 5, 0] };

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
          Got a project, idea, or question? Let’s craft high-performance digital
          solutions that drive real results.
        </p>
      </motion.div>

      {/* CONTACT AREA */}
      <div className="w-full flex flex-col lg:flex-row gap-12">
        {/* LEFT INFO */}
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
                className="text-blue-600 dark:text-blue-400 underline hover:opacity-80 transition"
              >
                hello@you.dev
              </a>
            </p>
            <p>
              💼 LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/mahesh-nayak-53b653249/"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 underline hover:opacity-80 transition"
              >
                linkedin.com/in/mahesh-nayak
              </a>
            </p>
            <p>
              🌐 Portfolio:{" "}
              <a
                href="#"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 underline hover:opacity-80 transition"
              >
                yourwebsite.com
              </a>
            </p>
          </div>
          <p className="mt-6 text-gray-500 dark:text-gray-400 italic text-sm">
            Usually respond within 12 hours. Let’s make something amazing!
          </p>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          className="lg:w-1/2 flex flex-col gap-4"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.05 }}
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <LabelInputContainer className="flex-1">
              <Label htmlFor="firstName">First Name</Label>
              <motion.div
                animate={shakeField === "firstName" ? shake : { x: 0 }}
              >
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="Tyler"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={cn(
                    "focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition",
                    errors.firstName && "border-red-500"
                  )}
                />
              </motion.div>
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </LabelInputContainer>

            <LabelInputContainer className="flex-1">
              <Label htmlFor="lastName">Last Name</Label>
              <motion.div
                animate={shakeField === "lastName" ? shake : { x: 0 }}
              >
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Durden"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={cn(
                    "focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition",
                    errors.lastName && "border-red-500"
                  )}
                />
              </motion.div>
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </LabelInputContainer>
          </div>

          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <motion.div animate={shakeField === "email" ? shake : { x: 0 }}>
              <Input
                id="email"
                name="email"
                placeholder="projectmayhem@fc.com"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className={cn(
                  "focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition",
                  errors.email && "border-red-500"
                )}
              />
            </motion.div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="projectType">Project Type</Label>
            <motion.div
              animate={shakeField === "projectType" ? shake : { x: 0 }}
            >
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className={cn(
                  "border rounded-md p-2 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition",
                  errors.projectType && "border-red-500"
                )}
              >
                <option value="">Select a project type</option>
                {projectOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </motion.div>
            {errors.projectType && (
              <p className="text-red-500 text-sm">{errors.projectType}</p>
            )}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="message">Message</Label>
            <motion.div animate={shakeField === "message" ? shake : { x: 0 }}>
              <Textarea
                id="message"
                name="message"
                placeholder="Describe your project..."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={cn(
                  "resize-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition rounded-md border",
                  errors.message && "border-red-500"
                )}
              />
            </motion.div>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </LabelInputContainer>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] mt-2"
          >
            Send Message &rarr;
            <BottomGradient />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

// ⚡ KEEP THESE UNCHANGED
const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
