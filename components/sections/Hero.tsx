    "use client";

    import { motion, type Variants } from "motion/react";
    import { Sparkle, Minus } from "lucide-react";

    const container: Variants = {
    hidden: {},
    visible: {
        transition: {
        staggerChildren: 0.2,
        },
    },
    };

    const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    export default function Hero() {
    return (
        <section id="home" className="min-h-svh flex flex-col pt-30 pb-10 md:py-40">
        {/* flex-1 lets this fill the full-height section, so the scroll hint can sit at the bottom on mobile */}
        <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-1 flex-col gap-10 md:justify-center"
        >
            <motion.div variants={item} className="flex items-center text-teal">
            <Sparkle className="mr-2 w-3 h-3" />
            <p className="font-mono text-sm md:text-lg">AVAILABLE FOR WORK</p>
            </motion.div>

            <motion.h1 variants={item} className="font-display text-5xl md:text-8xl text-snow">
            Alabi Emmanuel.
            </motion.h1>

            <motion.p
            variants={item}
            className="text-charcoal text-lg md:text-2xl font-semibold font-sans"
            >
            Computer Engineering student. Full-stack developer.
            <br className="hidden md:block" />
            I build tools people actually use.
            </motion.p>

            {/* Outer div runs the entrance. The link inside runs the bounce.
                Keeping them separate stops the CSS bounce from overriding the fade-up. */}
            <motion.div variants={item} className="mt-auto md:mt-0 w-fit">
            <a
                href="#playground"
                className="flex items-center animate-bounce text-sm md:text-base text-charcoal transition-colors duration-300 hover:text-snow focus-visible:text-snow"
            >
                <Minus className="w-4 h-4" />
                <span>scroll to explore</span>
            </a>
            </motion.div>
        </motion.div>
        </section>
    );
}