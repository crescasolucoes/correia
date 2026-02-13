
"use client";

import { motion } from "framer-motion";
import { User, Users, LineChart, Trophy } from "lucide-react";

const modalities = [
    {
        icon: <User className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
        title: "Aula Individual",
        description: "Foco 100% no seu desenvolvimento. Correção técnica, tática personalizada e análise de vídeo em tempo real.",
        tags: ["Personalizado", "Intensivo"],
    },
    {
        icon: <Users className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
        title: "Aulas em Turma",
        description: "Aprenda jogando com parceiros do mesmo nível. Dinâmicas de jogo, diversão e competitividade saudável.",
        tags: ["Interação", "Competitivo"],
    },
    {
        icon: <Trophy className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
        title: "Treinamento de Equipes",
        description: "Para clubes e empresas. Treinos focados em estratégia de duplas, coesão de time e disputas interclubes.",
        tags: ["Corporativo", "Interclubes"],
    },
    {
        icon: <LineChart className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
        title: "Baby Tennis & Kids",
        description: "Metodologia lúdica para crianças a partir de 4 anos. Desenvolvimento motor e paixão pelo esporte desde cedo.",
        tags: ["Lúdico", "Coordenação"],
    },
    {
        icon: <Trophy className="w-8 h-8 text-primary group-hover:text-white transition-colors" />,
        title: "Treinamento Avançado",
        description: "Para quem compete ou joga torneios. Preparação física específica, estratégia de jogo e mentalidade vencedora.",
        tags: ["Alta Performance", "Estratégia"],
    },
    {
        icon: <Trophy className="w-8 h-8 text-primary group-hover:text-white transition-colors" />, // Reusing Trophy for now, or could find a better one like Award or Crown
        title: "Torneios & Eventos",
        description: "Organização de campeonatos internos, rankings, clínicas e eventos sociais para integrar os alunos.",
        tags: ["Social", "Ranking"],
    },
];

export function Modalities() {
    return (
        <section className="py-24 bg-muted/20 relative" id="modalidades">
            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <span className="text-accent font-bold uppercase tracking-wider text-sm">Modalidades</span>
                    <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary">
                        Treine do Seu Jeito
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Escolha o formato ideal para atingir seus objetivos, seja técnica individual ou a dinâmica de grupo.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {modalities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="group relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-2 transition-all duration-300 border border-white/40 hover:border-primary/20 overflow-hidden"
                        >
                            {/* Top Accent Line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 shadow-inner">
                                {item.icon}
                            </div>

                            <h3 className="font-heading font-bold text-xl mb-3 text-primary group-hover:text-primary/80 transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {item.tags.map((tag) => (
                                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-muted text-muted-foreground rounded-md group-hover:bg-accent group-hover:text-primary transition-colors">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
