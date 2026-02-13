
"use client";

import { Instagram, MapPin, MessageCircle, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-muted py-12 md:py-16">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center justify-between">

                    <div className="space-y-4 text-center md:text-left">
                        <Link href="/" className="relative w-48 h-14 block mb-4 mx-auto md:mx-0">
                            <Image
                                src="/images/logo.png"
                                alt="Correia Pro Tennis Logo"
                                fill
                                className="object-contain object-center md:object-left"
                            />
                        </Link>
                        <p className="text-muted-foreground text-sm max-w-sm mx-auto md:mx-0">
                            Aulas de tênis para todas as idades, organização de torneios e treinamento de equipes. Evolua com a gente.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-4 text-muted-foreground">
                        <div className="flex gap-6">
                            <a href={`https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium">@{process.env.NEXT_PUBLIC_INSTAGRAM_PROFILE}</span>
                            </a>
                            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-center gap-2 group">
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span className="text-sm font-medium">WhatsApp</span>
                            </a>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-center md:text-right">
                            <MapPin className="w-4 h-4 text-accent shrink-0" />
                            <span>
                                Atendimento em Condomínios e Academias de São Paulo
                            </span>
                        </div>
                    </div>

                </div>

                <div className="mt-12 pt-8 border-t border-muted text-center text-xs text-muted-foreground/60 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {currentYear} Correia Pro Tênis. Todos os direitos reservados.</p>
                    <p className="flex items-center gap-1">Desenvolvido por <a href="https://crescaweb.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Cresca Soluções Digitais</a></p>
                </div>
            </div>
        </footer>
    );
}
