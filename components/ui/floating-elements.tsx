
"use client";

import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

function TennisBall({
    className,
    size = 60,
    blur = 0,
    speed = 1,
    initialX = 0,
    initialY = 0,
    mouseX,
    mouseY
}: {
    className?: string;
    size?: number;
    blur?: number;
    speed?: number;
    initialX?: number;
    initialY?: number;
    mouseX: any;
    mouseY: any;
}) {
    const { scrollY } = useScroll();

    // Parallax effect based on scroll
    const rotate = useTransform(scrollY, [0, 1000], [0, 180 * speed]);

    // Mouse parallax (inverted for depth)
    const xMouse = useTransform(mouseX, [0, 1], [20 * speed, -20 * speed]);
    const yMouse = useTransform(mouseY, [0, 1], [20 * speed, -20 * speed]);

    return (
        <motion.div
            style={{
                width: size,
                height: size,
                rotate,
                x: xMouse,
                y: yMouse,
                filter: `blur(${blur}px)`,
                zIndex: blur > 2 ? 0 : 5 // Lower z-index to stay behind Hero text (z-10)
            }}
            className={`absolute rounded-full flex items-center justify-center overflow-hidden ${className}`}
            initial={{ x: initialX, y: initialY, opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            {/* Ball Body with 3D Gradient */}
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    background: "radial-gradient(circle at 35% 35%, #E9F886 0%, #D4F35E 40%, #A3C924 85%, #6E8C12 100%)",
                    boxShadow: "inset -5px -5px 15px rgba(0,0,0,0.1), 10px 10px 20px rgba(0,0,0,0.2)"
                }}
            />

            {/* Realistic Seams */}
            <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 opacity-90 pointer-events-none drop-shadow-[0_1px_1px_rgba(0,0,0,0.1)]">
                {/* Defs for texture/masking if needed later, keeping simple for now */}
                <path
                    d="M 5,50 C 5,50 25,25 50,25 C 75,25 95,50 95,50"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="opacity-90"
                    transform="rotate(-45 50 50)"
                />
                <path
                    d="M 5,50 C 5,50 25,75 50,75 C 75,75 95,50 95,50"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="opacity-90"
                    transform="rotate(-45 50 50)"
                />
            </svg>

            {/* Specular Highlight for sheen */}
            <div className="absolute top-[15%] left-[15%] w-[40%] h-[30%] bg-gradient-to-br from-white/60 to-transparent rounded-full blur-md opacity-60" />

            {/* Texture Noise Overlay (Optional subtle fuzz) */}
            <div className="absolute inset-0 bg-noise opacity-20 mix-blend-overlay rounded-full" />
        </motion.div>
    );
}

export function FloatingElements() {
    const containerRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
    const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            mouseX.set(e.clientX / innerWidth);
            mouseY.set(e.clientY / innerHeight);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
            {/* Foreground Ball (Sharp, Fast) */}
            <div className="absolute top-[15%] right-[10%] w-[80px] h-[80px] hidden md:block">
                <TennisBall size={80} speed={1.2} mouseX={smoothMouseX} mouseY={smoothMouseY} />
            </div>

            {/* Midground Ball (Slight blur) */}
            <div className="absolute bottom-[20%] left-[5%] w-[50px] h-[50px]">
                <TennisBall size={50} blur={2} speed={0.8} mouseX={smoothMouseX} mouseY={smoothMouseY} />
            </div>

            {/* Background Ball (Big, Blurry, Slow) */}
            <div className="absolute top-[40%] left-[15%] w-[120px] h-[120px] opacity-60">
                <TennisBall size={120} blur={4} speed={0.4} mouseX={smoothMouseX} mouseY={smoothMouseY} />
            </div>

            {/* Far Background Ball (Very Blurry) */}
            <div className="absolute bottom-[10%] right-[20%] w-[60px] h-[60px] opacity-40">
                <TennisBall size={60} blur={6} speed={0.2} mouseX={smoothMouseX} mouseY={smoothMouseY} />
            </div>
        </div>
    );
}
