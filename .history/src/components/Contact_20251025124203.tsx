"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "./ui/Label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/text-area";
import axios from "axios";
import toast from "react-hot-toast";
import { useSegmentState } from "next/dist/next-devtools/userspace/app/segment-explorer-node";
import { send } from "process";
import { Mail } from "lucide-react";
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
  const [sending, setSending] = useState<boolean>(false);
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
    if (!formData.projectType.trim())
      newErrors.projectType = "Select a project type";
    if (!formData.message.trim()) newErrors.message = "Message required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) return setErrors(formErrors);

    setSending(true);

    try {
      const payload = {
        name: formData.firstName + " " + formData.lastName,
        email: formData.email,
        projectType: formData.projectType,
        message: formData.message,
      };

      // ✅ Toast with promise for high-CTR UX
      const response = await toast.promise(
        axios.post("/api/contact", payload, { withCredentials: true }),
        {
          loading: "Sending your message...",
          success: `Thanks ${formData.firstName}! Your message has been sent.`,
          error: "Failed to send your message. Try again.",
        }
      );

      // Optional: additional check on API response
      if (response.status === 200 && response.data.success) {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          projectType: "",
          message: "",
        });
      }
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      toast.error(message);
      console.error("Error submitting form: ", error);
    } finally {
      setSending(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="contact"
      className="w-full flex flex-col justify-center items-center pt-20 pb-8 "
    >
      {/* TITLE + DESCRIPTION */}
      <motion.div
        className="text-center lg:text-left mb-12 w-full flex flex-col justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeInUp}
      >
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100 mb-4">
          Let’s Build Something Powerful Together
        </h2>
        <p className="text-lg lg:text-lg text-gray-600 dark:text-gray-300">
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
          <div className="flex flex-col gap-3 text-gray-700 dark:text-gray-300 ">
            <p className="w-2/3 border rounded-2xl flex flex-row justify-center items-center p-3">
              <Mail className="inline-block" /> Email:{" "}
              <a
                href="mailto:maheshnayak9639@gmail.com"
                className="text-blue-600 dark:text-blue-400 underline hover:opacity-80 transition"
              >
                maheshnayak9639@gmail.com
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
            Usually respond within 6 hours. Let’s make something amazing!
          </p>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          className="lg:w-1/2 flex flex-col gap-4"
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <LabelInputContainer className="flex-1">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Mahesh"
                value={formData.firstName}
                onChange={handleChange}
                disabled={sending}
                className="focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </LabelInputContainer>

            <LabelInputContainer className="flex-1">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Nayak"
                value={formData.lastName}
                onChange={handleChange}
                disabled={sending}
                className="focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </LabelInputContainer>
          </div>

          <LabelInputContainer>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              placeholder="service@buy.com"
              type="email"
              value={formData.email}
              onChange={handleChange}
              disabled={sending}
              className="focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="projectType">Project Type</Label>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              disabled={sending}
              className="shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600"
            >
              <option value="">Select a project type</option>
              {projectOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <p className="text-red-500 text-sm">{errors.projectType}</p>
            )}
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Describe your project..."
              value={formData.message}
              onChange={handleChange}
              rows={5}
              disabled={sending}
              className="resize-none shadow-input dark:placeholder-text-neutral-600 flex h-10 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black transition duration-400 group-hover/input:shadow-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:ring-[2px] focus-visible:ring-neutral-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:shadow-[0px_0px_1px_1px_#404040] dark:focus-visible:ring-neutral-600"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </LabelInputContainer>

          <button
            type="submit"
            disabled={sending}
            className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] mt-2 hover:scale-105 transition-transform duration-200"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>
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
