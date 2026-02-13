
"use client";

import { motion } from "framer-motion";
import { Zap, Clock, MapPin, Target } from "lucide-react";

const benefits = [
    {
        icon: <Zap className="w-8 h-8 text-accent" />,
        title: "Evolução Acelerada",
        description: "Método focado em resultados rápidos. Sinta a diferença no seu jogo em poucas aulas.",
    },
    {
        icon: <Clock className="w-8 h-8 text-accent" />,
        title: "Horários Flexíveis",
        description: "Agende suas aulas de acordo com sua rotina. Treinos pela manhã, tarde ou noite.",
    },
    {
        icon: <MapPin className="w-8 h-8 text-accent" />,
        title: "Onde Você Estiver",
        description: "Atendimento em academias parceiras e condomínios com quadra na região.",
    },
    {
        icon: <Target className="w-8 h-8 text-accent" />,
        title: "Foco Personalizado",
        description: "Treino desenhado para corrigir seus vícios e potencializar seus pontos fortes.",
    },
];

export function Benefits() {
    return (
        <section className="py-24 bg-primary text-white relative overflow-hidden" id="beneficios">
            {/* Abstract Court Lines Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-1 h-full bg-white" />
                <div className="absolute top-1/2 left-0 w-full h-1 bg-white" />
                <div className="absolute top-0 right-1/4 w-1 h-full bg-white" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <span className="text-accent font-bold uppercase tracking-wider text-sm mb-2 block">Por que escolher?</span>
                        <h2 className="font-heading text-4xl lg:text-5xl font-bold leading-tight">
                            Muito Mais que Apenas <br /> <span className="text-accent">Bater na Bola</span>
                        </h2>
                    </div>
                    <p className="text-white/80 max-w-md text-lg">
                        Uma abordagem completa que une técnica, físico e mental para transformar você em um jogador melhor.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group`}
                        >
                            <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="font-heading font-bold text-2xl mb-3">{item.title}</h3>
                            <p className="text-white/70 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
