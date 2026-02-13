"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Heart, Smile, Check } from "lucide-react";
import { useRef, useState } from "react";

export function BabyTennis() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <section className="py-24 relative overflow-hidden bg-[#FEFCE8]" id="baby-tennis">
            {/* Playful Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 text-orange-200/50 transform -rotate-12">
                    <Star className="w-24 h-24 fill-current" />
                </div>
                <div className="absolute bottom-20 right-10 text-yellow-200/50 transform rotate-45">
                    <Smile className="w-32 h-32" />
                </div>
                <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-orange-400/20" />
                <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-yellow-400/20" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-orange-600 font-bold text-xs uppercase tracking-wider mb-4">
                            <Star className="w-3 h-3 fill-orange-600" />
                            Para pequenos campeões
                        </div>

                        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
                            Baby Tennis: <br />
                            <span className="text-orange-500">Diversão</span> que vira <span className="text-primary">Paixão</span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Uma metodologia exclusiva desenvolvida para despertar o amor pelo esporte.
                            Utilizamos bolas de baixa pressão, raquetes adaptadas e muitas brincadeiras
                            para desenvolver a coordenação motora enquanto a criança se diverte.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Desenvolvimento motor e cognitivo",
                                "Socialização e trabalho em equipe",
                                "Raquetes e bolas adaptadas para a idade",
                                "Ambiente seguro e estimulante"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-orange-600" />
                                    </div>
                                    <span className="font-medium text-foreground/80">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full h-12 px-8 shadow-lg shadow-orange-500/20" asChild>
                            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20Baby%20Tennis%21`}>
                                Agendar Aula Kids
                                <Heart className="w-4 h-4 ml-2 fill-white/20" />
                            </a>
                        </Button>
                    </motion.div>

                    {/* Image Composition */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="order-1 lg:order-2 relative"
                    >
                        <div className="relative aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white group cursor-pointer" onClick={togglePlay}>
                            <video
                                ref={videoRef}
                                src="/images/kids.mp4"
                                className="object-cover w-full h-full"
                                muted
                                loop
                                playsInline
                                onPlay={() => setIsPlaying(true)}
                                onPause={() => setIsPlaying(false)}
                            />

                            {/* Decorative Play Button / Overlay */}
                            <div className={`absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
                                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                    {isPlaying ? (
                                        <div className="flex gap-1.5">
                                            <div className="w-2 h-8 bg-orange-500 rounded-full" />
                                            <div className="w-2 h-8 bg-orange-500 rounded-full" />
                                        </div>
                                    ) : (
                                        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-orange-500 border-b-[12px] border-b-transparent ml-1" />
                                    )}
                                </div>
                            </div>

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/40 to-transparent pointer-events-none" />
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-orange-100 flex items-center gap-3 max-w-[200px]">
                            <div className="bg-orange-100 p-2 rounded-full">
                                <Smile className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <p className="font-bold text-primary text-sm leading-tight">Metodologia Lúdica</p>
                                <p className="text-xs text-muted-foreground">Aprender brincando</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
