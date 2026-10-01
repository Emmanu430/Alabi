    "use client";

    import { motion, type Variants } from "motion/react";
    import { MoveUpRight } from "lucide-react";
    import Image from "next/image";
    import type { ReactNode } from "react";

    // Data that never changes lives outside the component,
    // so it isn't rebuilt on every render.
    const works = [
    {
        image: "/images/nexastudy.png",
        name: "NexaStudy",
        year: "2026",
        stack: "Full-stack",
        person: "Solo",
        about:
        "An AI-powered study platform that transforms raw lecture notes and PDFs into structured flashcard decks, concept maps, and adaptive quizzes. Students set a target exam date and NexaStudy schedules spaced-repetition sessions automatically.",
        projectStacks: ["React", "Laravel", "MySQL", "Tailwind CSS"],
        liveSite: "https://nexastudy-ashen.vercel.app",
        repo: "https://github.com/Emmanu430/Nexastudy",
    },
    {
        image: "/images/lib.png",
        name: "Athenaeum",
        year: "2026",
        stack: "Full-stack",
        person: "Solo",
        about:
        "A full-stack personal library and lending management system that lets users catalog their physical book collection, track who's borrowed what, and manage due dates, overdue fines, and reservation waitlists, with role-based access for patrons, librarians, and admins.",
        projectStacks: ["TypeScript", "Next.js", "PostgreSQL", "Tailwind CSS", "Resend API"],
        liveSite: "https://athenaeum-drab.vercel.app",
        repo: "https://github.com/Emmanu430/library-tracker",
    },
    {
        image: "/images/saint.png",
        name: "Saint Store",
        year: "2026",
        stack: "Full-stack",
        person: "Solo",
        about:
        "SAINT is a full-stack e-commerce site for a streetwear brand, built from scratch — product catalog, cart, authentication, and a WhatsApp-based checkout flow tailored to how the founder actually wanted to sell. Includes a full password-reset flow with email delivery and a custom editorial lookbook gallery with lightbox viewing.",
        projectStacks: ["Next.js", "PostgreSQL", "Nodemailer", "Tailwind CSS"],
        liveSite: "https://saint-store-kappa.vercel.app/",
        repo: "https://github.com/Emmanu430/saint-store",
    },
    {
        image: "/images/portal.png",
        name: "School Portal",
        year: "2026",
        stack: "Full-stack",
        person: "Solo",
        about:
        "A School Management Portal with role-based dashboards for Admins, Teachers, and Students. Admins manage students, teachers, and classes; teachers record grades and attendance for their assigned class; students view their own grades, attendance, and class info. Includes authentication with password reset, account linking, and file uploads for student profile photos.",
        projectStacks: ["Next.js", "PostgreSQL", "Resend API", "UploadThing", "Tailwind CSS", "shadcn/ui"],
        liveSite: "https://school-portal-xi-two.vercel.app/",
        repo: "https://github.com/Emmanu430/school-portal",
    },
    ];

    // Image curtain: starts cropped from the bottom, ends fully visible.
    const curtain: Variants = {
    hidden: { clipPath: "inset(0 0 100% 0)" },
    visible: { clipPath: "inset(0 0 0% 0)" },
    };

    // Text column: the parent staggers its children one after another.
    const textContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
    };

    const textItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
    };

    // Cloth-drag button: a teal panel slides in from the left behind the text.
    // The anchor is the mask (overflow-hidden), the span is the cloth.
    function ProjectLink({
    href,
    label,
    children,
    }: {
    href: string;
    label: string;
    children: ReactNode;
    }) {
    return (
        <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="group/btn relative inline-flex w-fit overflow-hidden border border-edges px-4 py-2 text-base text-charcoal transition-colors duration-500 hover:text-black"
        >
        <span
            aria-hidden="true"
            className="absolute inset-0 -translate-x-full bg-teal transition-transform duration-500 ease-out group-hover/btn:translate-x-0"
        />
        <span className="relative z-10 inline-flex items-center gap-1">
            {children}
            <MoveUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
        </span>
        </a>
    );
    }

    export default function Work() {
    return (
        <section id="projects" className="pt-20">
        <p className="pb-5 uppercase flex gap-1 text-xs font-semibold text-charcoal">
            &sect; <span>Work</span>
        </p>

        {/* group/list lets us dim the other rows when one is hovered */}
        <div className="group/list">
            {works.map((work, index) => (
            <div
                key={work.name}
                className={`grid grid-cols-1 md:grid-cols-[clamp(200px,30%,320px)_1fr] gap-10 py-10 md:py-20 border-b border-b-charcoal transition-opacity duration-300 group-hover/list:opacity-40 hover:opacity-100 ${
                index === 0 ? "border-t border-t-charcoal" : ""
                }`}
            >
                {/* Outer: watches the scroll, never clipped, holds the image hover group */}
                <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="group w-full aspect-video"
                >
                {/* Inner: does the clipping, reads hidden/visible from its parent */}
                <motion.div
                    variants={curtain}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden relative w-full h-full"
                >
                    {/* Skeleton: a flat pulsing block sitting behind the image.
                        While the screenshot loads you see this; once it loads, the image covers it. */}
                    <div
                    aria-hidden="true"
                    className="absolute inset-0 animate-pulse bg-charcoal/60"
                    />
                    <Image
                    width={1600}
                    height={900}
                    src={work.image}
                    alt={`${work.name} Dashboard`}
                    className="relative w-full h-full object-cover grayscale transition-all duration-500 ease-out group-hover:scale-103 group-hover:grayscale-0"
                    />
                    <div className="absolute top-5 left-5 bg-black/50 px-2">
                    {String(index + 1).padStart(2, "0")} &nbsp;/ &nbsp;
                    {String(works.length).padStart(2, "0")}
                    </div>
                </motion.div>
                </motion.div>

                <motion.div
                variants={textContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="min-w-0"
                >
                <motion.p variants={textItem} className="text-snow text-2xl md:text-4xl">
                    {work.name}
                    <span className="text-xs text-charcoal pl-2">{work.year}</span>
                </motion.p>
                <motion.p variants={textItem} className="text-teal text-sm">
                    {work.stack} &bull; {work.person}
                </motion.p>
                <motion.p variants={textItem} className="pt-5 text-charcoal text-base">
                    {work.about}
                </motion.p>

                <motion.div variants={textItem} className="flex flex-wrap gap-2 pt-7">
                    {work.projectStacks.map((tech) => (
                    <div
                        key={tech}
                        className="w-fit px-3 py-1 border border-edges text-charcoal text-sm"
                    >
                        {tech}
                    </div>
                    ))}
                </motion.div>

                <motion.div variants={textItem} className="flex flex-wrap gap-6 pt-7">
                    <ProjectLink href={work.liveSite} label={`${work.name} live site`}>
                    Live site
                    </ProjectLink>
                    <ProjectLink href={work.repo} label={`${work.name} GitHub repository`}>
                    GitHub
                    </ProjectLink>
                </motion.div>
                </motion.div>
            </div>
            ))}
        </div>
        </section>
    );
}