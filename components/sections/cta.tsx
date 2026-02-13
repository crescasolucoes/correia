
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function CTA() {
    const whatsAppUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20quero%20evoluir%20no%20t%C3%AAnis%21`;

    return (
        <section className="py-24 bg-foreground relative overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 opacity-20">
                {/* Using a CSS pattern for texture instead of image for speed/performance */}
                <div className="w-full h-full bg-[radial-gradient(#D4F35E_1px,transparent_1px)] [background-size:16px_16px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto space-y-8"
                >
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-background leading-tight">
                        Pronto para <span className="text-accent underline decoration-4 underline-offset-4">evoluir</span> seu jogo?
                    </h2>

                    <p className="text-muted text-lg md:text-xl">
                        Não importa se é sua primeira vez na quadra ou se você busca alta performance. Tenho o treino certo para você.
                    </p>

                    <div className="flex justify-center">
                        <Button size="xl" variant="tennis-cta" className="rounded-full px-12 py-8 text-xl group" asChild>
                            <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                                <MessageCircle className="mr-3 w-8 h-8" />
                                Agendar Aula Experimental
                            </a>
                        </Button>
                    </div>

                    <p className="text-sm text-muted/60 mt-4">
                        *Vagas limitadas para horários nobre (18h-21h).
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
