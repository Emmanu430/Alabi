    "use client";
    import { motion, useMotionValue, useSpring } from "motion/react";
    import { useEffect } from "react";

    export default function Cursor() {
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);

    const ringX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const ringY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
        x.set(e.clientX);
        y.set(e.clientY);
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [x, y]);

    return (
        <div className="cursor-layer pointer-events-none fixed inset-0 z-100 mix-blend-difference">
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-100 h-2 w-2 rounded-full bg-snow"
            style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        />
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-100 h-8 w-8 rounded-full border border-snow"
            style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        />
        </div>
    );
}