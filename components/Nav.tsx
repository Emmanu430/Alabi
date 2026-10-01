    "use client";

    import { X, Menu } from "lucide-react";
    import { AnimatePresence, motion } from "motion/react";
    import { useState } from "react";
    import RollingText from "./ui/RollingText";

    const navItems = [
    { label: "Home", href: "#home" },
    { label: "Playground", href: "#playground" },
    { label: "Projects", href: "#projects" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
    ];

    export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
        <nav
            aria-label="Main"
            className="z-50 bg-teal mt-5 p-5 fixed md:w-auto w-full md:left-5 md:right-5 lg:left-10 lg:right-10 flex justify-between items-center"
        >
            <a href="#home" className="font-display text-xl">
            Alabi
            </a>

            <div className="flex items-center">
            <ul className="md:flex gap-10 text-charcoal hidden">
                {navItems.map((navItem) => (
                <RollingText
                    href={navItem.href}
                    key={navItem.href}
                    className="hover:text-snow"
                >
                    {navItem.label}
                </RollingText>
                ))}
            </ul>

            {/* md:hidden is on the button itself, so on desktop it is gone
                completely and can't be tabbed to. */}
            <motion.button
                type="button"
                className="md:hidden"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation-menu"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                whileTap={{ y: 1 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </motion.button>
            </div>
        </nav>

        <AnimatePresence initial={false}>
            {isMenuOpen ? (
            <motion.div
                id="mobile-navigation-menu"
                key="box"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="z-50 md:hidden flex bg-teal flex-col fixed w-full top-20 py-5 text-charcoal text-2xl text-left"
            >
                {navItems.map((navItem, index) => {
                const isLast = index === navItems.length - 1;
                return (
                    <div
                    key={navItem.href}
                    className={isLast ? "" : "border-b-2 border-b-black"}
                    >
                    {/* The padding is on the link, so the whole row is tappable */}
                    <a
                        href={navItem.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block pl-5 text-2xl active:text-snow ${
                        isLast ? "pt-4" : "py-4"
                        }`}
                    >
                        {navItem.label}
                    </a>
                    </div>
                );
                })}
            </motion.div>
            ) : null}
        </AnimatePresence>
        </>
    );
}