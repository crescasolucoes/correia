
"use client";

import { motion } from "framer-motion";
import { User, Award, Lightbulb } from "lucide-react";
import Image from "next/image";

export function About() {
    return (
        <section className="py-24 bg-muted/20 relative overflow-hidden" id="sobre">
            <div className="container px-4 md:px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Coach Stats/Photo (Performance Style) */}
                <motion.div
                    className="relative order-2 lg:order-1"
                    viewport={{ once: true }}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="relative aspect-[3/4] max-w-[500px] mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                            src="/images/correia.png"
                            alt="Professor Correia na Academia"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                        {/* Stats Overlay */}
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-6 text-white">
                            <div className="flex justify-between items-end border-t border-white/20 pt-4">
                                <div>
                                    <p className="font-heading font-bold text-3xl">Correia</p>
                                    <p className="text-sm opacity-80 uppercase tracking-widest">Treinador</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Decorative Pattern */}
                    <div className="absolute -top-10 -left-10 w-32 h-32 border-t-4 border-l-4 border-accent rounded-tl-3xl opacity-50 hidden lg:block" />
                </motion.div>

                {/* Right Side: Content */}
                <motion.div
                    className="space-y-8 order-1 lg:order-2"
                    viewport={{ once: true }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="space-y-4">
                        <span className="text-primary font-bold uppercase tracking-wider text-sm border-b-2 border-accent pb-1">Quem Somos</span>
                        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary leading-tight">
                            Muito Mais que <br />
                            <span className="text-accent">Aulas de Tênis</span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                A <strong>Correia Tennis</strong> é uma assessoria esportiva completa, especializada na gestão de tênis em condomínios, clubes e empresas.
                            </p>
                            <p>
                                Nosso foco é entregar uma experiência profissional e padronizada. Eliminamos a informalidade e trazemos gestão, metodologia e resultados para dentro da sua quadra.
                            </p>
                            <p>
                                Seja para iniciar uma criança no esporte com nosso método lúdico ou treinar uma equipe corporativa, nossa estrutura está pronta para atender você.
                            </p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-muted hover:border-primary/20 transition-all">
                            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                                <Award className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-primary mb-1">Experiência Comprovada</h3>
                                <p className="text-muted-foreground text-sm">Treinamento desde iniciação infantil até preparação para torneios amadores e profissionais.</p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-muted hover:border-primary/20 transition-all">
                            <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0 text-primary-foreground">
                                <Lightbulb className="w-6 h-6 text-primary" /> {/* Corrected contrast */}
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-primary mb-1">Metodologia Prática</h3>
                                <p className="text-muted-foreground text-sm">Foco total na correção biomecânica e estratégias de jogo reais, sem complicação.</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <div className="flex items-center gap-4">
                            <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
                                "O tênis é um esporte de repetição, mas a evolução vem da correção inteligente."
                            </blockquote>
                            <div className="flex flex-col">
                                <span className="font-bold text-primary">– Correia</span>
                            </div>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
