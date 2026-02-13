
"use client";

import { Star, MessageSquare } from "lucide-react";

const testimonials = [
    {
        name: "Ricardo Silva",
        role: "Aluno Iniciante - 6 meses",
        text: "Comecei do zero e em poucos meses já estou jogando meus primeiros games. A didática do professor Correia é incrível, muito paciente e técnica.",
        rating: 5,
    },
    {
        name: "Ana Paula",
        role: "Aluna Intermediária",
        text: "Estava estagnada no meu jogo e as aulas corrigiram vícios antigos. Hoje me sinto muito mais confiante na quadra e meu forehand evoluiu demais!",
        rating: 5,
    },
    {
        name: "Dr. Marcelo Costa",
        role: "Treino Personalizado",
        text: "A flexibilidade de horários e o foco na preparação física foram essenciais para mim. Recomendo para quem busca saúde e performance.",
        rating: 5,
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-muted/30" id="depoimentos">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-accent font-bold uppercase tracking-wider text-sm mb-2 block">O que dizem</span>
                    <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary">
                        Histórias de <span className="text-accent">Evolução</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-muted hover:shadow-md transition-shadow relative">
                            <MessageSquare className="absolute top-6 right-6 text-accent/20 w-12 h-12" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                                ))}
                            </div>

                            <p className="text-muted-foreground italic mb-6 leading-relaxed">"{t.text}"</p>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center font-bold text-primary">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary">{t.name}</h4>
                                    <p className="text-xs text-muted-foreground">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
