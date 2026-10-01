    "use client";

    import { motion, type Variants } from "motion/react";

    // Data that never changes lives outside the component.
    const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Laravel",
    "PostgreSQL",
    "MySQL",
    "Nodemailer",
    "Resend API",
    ];

    // The parent staggers its children; each row only describes hidden -> visible.
    const list: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
    };

    const row: Variants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    };

    export default function About() {
    return (
        <section id="about" className="pt-20 pb-5">
        <p className="uppercase flex gap-1 text-xs font-semibold text-charcoal">
            &sect; <span>About</span>
        </p>

        <div className="space-y-10 pt-5 md:grid md:grid-cols-2 md:gap-20 md:space-y-0">
            <div>
            <h2 className="text-3xl md:text-4xl pb-5">
                Building at the intersection of software and systems.
            </h2>
            <div className="text-charcoal md:text-xl space-y-5">
                <p>
                I&apos;m Alabi Emmanuel &mdash; a Computer Engineering undergraduate who likes
                understanding how things work and turning ideas into things people can
                actually use.
                </p>
                <p>
                My work sits mostly around the web, where I build full-stack applications and
                experiment with everything from interfaces and APIs to databases and AI
                integrations. I&apos;m especially interested in the space where software,
                systems, and the hardware underneath them meet.
                </p>
                <p>
                When I&apos;m not in a terminal, I&apos;m usually building something &mdash;
                whether it&apos;s a problem I want to solve, an idea I can&apos;t stop thinking
                about, or simply a project that gives me an excuse to learn something new.
                </p>
                <p>
                I learn by building, break things along the way, and try to understand why they
                work when I finally fix them.
                </p>
            </div>
            </div>

            <div>
            <p className="pb-4 uppercase flex gap-1 text-xs font-semibold text-charcoal">
                Skills
            </p>
            <motion.ul
                variants={list}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {skills.map((skill) => (
                <motion.li
                    key={skill}
                    variants={row}
                    className="group border-edges border-b py-2"
                >
                    <span
                    aria-hidden="true"
                    className="inline-block text-teal transition-transform duration-300 group-hover:translate-x-1"
                    >
                    &mdash;
                    </span>{" "}
                    {skill}
                </motion.li>
                ))}
            </motion.ul>
            </div>
        </div>
        </section>
    );
}