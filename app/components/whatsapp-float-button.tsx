"use client";

import { motion } from "motion/react";
import { getWhatsAppLink } from "@/app/lib/whatsapp";

/** Botón flotante global de WhatsApp: visible en todas las secciones para impulsar el pedido. */
export function WhatsAppFloatButton() {
  return (
    <motion.a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Pedir por WhatsApp"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-warm"
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366]"
        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg width="28" height="28" viewBox="0 0 33 33" fill="currentColor" aria-hidden="true" className="relative">
        <path d="M16.7 0h-.1C7.5 0 0 7.5 0 16.6c0 3.6 1.2 7 3.2 9.8L1.1 33l6.6-2.1c2.7 1.7 5.8 2.6 9 2.6 9.1 0 16.6-7.5 16.6-16.6C33.3 7.5 25.8 0 16.7 0Zm9.7 23.6c-.4 1.1-2.1 2.1-2.9 2.2-.8.1-1.7.2-2.7-.2-.6-.2-1.5-.5-2.5-1-4.5-1.9-7.4-6.5-7.6-6.8-.2-.3-1.8-2.4-1.8-4.6 0-2.2 1.1-3.2 1.5-3.7.4-.4.8-.5 1.1-.5h.8c.3 0 .6 0 .9.7.3.7 1.1 2.6 1.2 2.8.1.2.2.5 0 .8-.1.3-.2.5-.4.7l-.7.8c-.2.2-.5.5-.2.9.2.4 1.1 1.9 2.4 3.1 1.7 1.5 3.1 2 3.5 2.2.4.2.7.2.9-.1l1.1-1.4c.3-.4.6-.3.9-.2l2.6 1.2c.3.1.6.3.7.4.1.2.1 1.1-.3 2.2Z" />
      </svg>
    </motion.a>
  );
}
