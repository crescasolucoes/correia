"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

export function Hero() {
    const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    const whatsAppUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20aula%20experimental%20de%20t%C3%AAnis%21`;

    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const currentYear = new Date().getFullYear();

    return (
        <section ref={ref} className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Cinematic Background Image */}
            <div className="absolute inset-0 -z-20">
                <Image
                    src="/images/correia-bg.jpeg" // Dark/Moody Tennis Court
                    alt="Quadra de Tênis Iluminada"
                    fill
                    className="object-cover object-[70%_center]" // Focus on the subject
                    priority
                />
            </div>

            {/* Heavy Gradient Overlay for Text Readability & Mood - Centered Focus */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 -z-10" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/40 -z-10" />

            <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center text-center">

                <motion.div
                    style={{ y: yText, opacity }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="flex flex-col items-center gap-8 max-w-4xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 backdrop-blur-md border border-accent/20 text-accent font-medium text-sm w-fit">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#D4F35E]" />
                        <span className="tracking-wide uppercase text-xs font-bold">Vagas Abertas {currentYear}</span>
                    </div>

                    <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.0] tracking-tight drop-shadow-2xl">
                        A Elite do Tênis <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent opacity-90">Ao Seu Alcance</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed font-light">
                        Treinamento de alto rendimento, metodologia internacional e uma equipe focada na sua evolução.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 mt-4 w-full justify-center">
                        <Button size="xl" variant="tennis-cta" className="h-16 px-10 text-lg rounded-full shadow-[0_0_30px_rgba(212,243,94,0.3)] hover:shadow-[0_0_50px_rgba(212,243,94,0.5)] hover:scale-105 transition-all duration-300 border-2 border-accent/20" asChild>
                            <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                                Agendar Aula Experimental
                                <ArrowRight className="ml-2 w-5 h-5 md:w-6 md:h-6" />
                            </a>
                        </Button>
                        <Button size="xl" variant="outline" className="h-16 px-10 text-lg rounded-full border-white/30 text-white bg-white/10 hover:text-white backdrop-blur-sm" asChild>
                            <a href="#metodologia">
                                Conhecer Metodologia
                            </a>
                        </Button>
                    </div>

                    {/* Footer Stats/Social Proof in Hero */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 mt-16 pt-8 border-t border-white/10 text-white/80">
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-accent">10+</span>
                            <span className="text-xs uppercase tracking-widest opacity-70">Anos de Experiência</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-3xl font-bold text-accent">ITF</span>
                            <span className="text-xs uppercase tracking-widest opacity-70">Metodologia Oficial</span>
                        </div>
                        <div className="hidden md:flex flex-col gap-1">
                            <span className="text-3xl font-bold text-accent">Premium</span>
                            <span className="text-xs uppercase tracking-widest opacity-70">Estrutura Completa</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
