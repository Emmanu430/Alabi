"use client";
    import { motion, useScroll, useSpring } from "motion/react";

    export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 25,
        restDelta: 0.001,
    });

    return (
        <motion.div
        className="pointer-events-none fixed left-0 right-0 top-0 z-100 h-0.5 origin-left bg-teal"
        style={{ scaleX }}
        />
    );
}