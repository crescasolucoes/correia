
"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
    const whatsAppUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20t%C3%AAnis%21`;

    return (
        <motion.a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-colors group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <span className="sr-only">Falar no WhatsApp</span>
            <MessageCircle className="w-8 h-8 md:w-10 md:h-10 fill-current" />

            {/* Pulse Effect */}
            <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:animate-none" />
        </motion.a>
    );
}
