"use client";

import { motion } from "framer-motion";
import { BadgeCheck, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const features = [
    {
        icon: <GraduationCap className="w-6 h-6 text-primary" />,
        title: "Profissionais Homologados",
        description: "Todos os nossos treinadores possuem certificação pela CBT (Confederação Brasileira de Tênis) ou ITF."
    },
    {
        icon: <Users className="w-6 h-6 text-primary" />,
        title: "Treinamento Contínuo",
        description: "Nossa equipe participa regularmente de clínicas e workshops para se manter atualizada com o tênis moderno."
    },
    {
        icon: <BadgeCheck className="w-6 h-6 text-primary" />,
        title: "Metodologia Unificada",
        description: "Independente do professor, você segue um sistema de ensino estruturado e progressivo."
    }
];

export function Methodology() {
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
        <section className="py-24 bg-white relative overflow-hidden" id="metodologia">
            <div className="container px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer" onClick={togglePlay}>
                            <video
                                ref={videoRef}
                                src="/images/campeoes.mp4"
                                className="object-cover w-full h-full"
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
                                            <div className="w-2 h-8 bg-primary rounded-full" />
                                            <div className="w-2 h-8 bg-primary rounded-full" />
                                        </div>
                                    ) : (
                                        <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[22px] border-l-primary border-b-[12px] border-b-transparent ml-1" />
                                    )}
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply pointer-events-none" />
                        </div>
                        {/* Decorative Graphic */}
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-accent font-bold uppercase tracking-wider text-sm mb-2 block">Nossa Excelência</span>
                        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
                            Ensino de Alto Nível, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Sem Amadorismo</span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Na Correia Tennis, não dependemos de um único "astro". Somos uma instituição de ensino comprometida com a sua evolução.
                            Nossa estrutura pedagógica garante que cada aula tenha um objetivo claro, seja para recreação ou competição.
                        </p>

                        <div className="grid gap-6">
                            {features.map((item, index) => (
                                <div key={index} className="flex gap-4 p-4 rounded-xl bg-muted/30 border border-muted hover:border-primary/20 transition-colors">
                                    <div className="shrink-0 w-12 h-12 rounded-lg bg-white shadow-sm flex items-center justify-center border border-muted">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-primary text-lg mb-1">{item.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-snug">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
