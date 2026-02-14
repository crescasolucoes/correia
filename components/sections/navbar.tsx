
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Sobre", href: "#sobre" },
        { name: "Modalidades", href: "#modalidades" },
        { name: "Benefícios", href: "#beneficios" },
        { name: "Contato", href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}` },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/40 py-4" : "bg-transparent py-6"}`}>
            <div className="container flex items-center justify-between">
                <Link href="/" className="group transition-transform hover:scale-105 active:scale-95 duration-200 relative w-40 h-14">
                    <Image
                        src="/images/logo.png"
                        alt="Correia Pro Tennis Logo"
                        fill
                        className="object-cover object-left w-40"
                        priority
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn("text-sm font-medium hover:text-white transition-colors relative group", scrolled ? "text-primary" : "text-white")}
                        >
                            {link.name}
                            <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Link>
                    ))}
                    <Link
                        href="#metodologia"
                        className={cn("text-sm font-medium hover:text-white transition-colors relative group", scrolled ? "text-primary" : "text-white")}
                    >
                        Metodologia
                        <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                    <Button variant="tennis-cta" size="sm" asChild className="group">
                        <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}>Agendar Aula</Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2 text-primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-md absolute w-full border-t border-muted overflow-hidden"
                    >
                        <div className="container px-4 py-8 flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="font-heading font-bold text-xl hover:text-accent transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Button variant="tennis-cta" className="w-full" asChild>
                                <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}>Falar no WhatsApp</Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
