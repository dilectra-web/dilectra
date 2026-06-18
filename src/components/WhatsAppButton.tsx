"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/50683724840"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contáctenos por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-black/40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Ping ring */}
      <span className="absolute inline-flex w-full h-full rounded-full bg-[#25D366] opacity-40 animate-ping" />

      {/* WhatsApp icon */}
      <svg
        viewBox="0 0 32 32"
        fill="white"
        className="w-7 h-7 relative z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.002 2.667C8.638 2.667 2.667 8.638 2.667 16c0 2.354.638 4.617 1.75 6.573L2.667 29.333l6.948-1.719A13.27 13.27 0 0 0 16.002 29.333C23.365 29.333 29.333 23.362 29.333 16S23.365 2.667 16.002 2.667zm0 24.267a11.006 11.006 0 0 1-5.614-1.54l-.402-.24-4.124 1.02 1.052-3.99-.264-.41A10.965 10.965 0 0 1 5.001 16c0-6.075 4.927-11.001 11.001-11.001S27.003 9.925 27.003 16 22.077 26.934 16.002 26.934zm6.03-8.237c-.33-.165-1.954-.963-2.257-1.073-.303-.11-.523-.165-.743.165-.22.33-.853 1.073-1.046 1.293-.193.22-.385.248-.715.083-.33-.165-1.394-.514-2.656-1.639-.981-.876-1.643-1.957-1.836-2.287-.193-.33-.02-.51.145-.675.15-.148.33-.385.495-.578.165-.193.22-.33.33-.55.11-.22.055-.413-.028-.578-.083-.165-.743-1.79-1.018-2.45-.268-.644-.54-.557-.743-.567l-.633-.011c-.22 0-.578.083-.88.413-.303.33-1.155 1.128-1.155 2.753s1.183 3.195 1.348 3.415c.165.22 2.327 3.553 5.641 4.984.789.34 1.404.543 1.884.695.792.252 1.513.216 2.083.131.635-.095 1.954-.8 2.23-1.572.275-.771.275-1.432.193-1.572-.083-.14-.303-.22-.633-.385z" />
      </svg>
    </motion.a>
  );
}
