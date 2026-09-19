"use client";
import { motion, type Variants } from "motion/react";
import { Phone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
}

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function Footer() {
return (
    <footer className="pl-5">
        <motion.div 
        variants={container} 
        initial="hidden" 
        animate="visible" 
        className="font-jetbrains-mono space-y-5">
            <Link 
            href="https://wa.me/2349025875565" 
            target="_blank" rel="noopener noreferrer" 
            className="flex gap-2 text-sm font-semibold text-charcoal">
                <Phone className="w-4 h-4" />
                <span>CONTACT</span>
            </Link>
            <motion.p variants={item}  
            className="text-snow text-2xl md:text-5xl" >
                Let's build something.
            </motion.p>
            <div className=" md:flex md:gap-7 md:max-w-full">
                <div className="font-mono grid grid-cols-2 gap-y-5  md:grid-cols-3  ">
                <Link href="mailto:alabii1.0e@gmail.com" target="_blank" rel="noopener noreferrer" className="flex font-jetbrains-mono text-teal text-sm font-medium">
                    <span>alabi@gmail.com</span>
                    <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link href="https://www.linkedin.com/in/emmanuel-oluwakayode-a9829333b/" target="_blank" rel="noopener noreferrer" className="flex text-teal text-sm font-medium">
                <span>LinkedIn</span>
                <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="https://github.com/Emmanu430" target="_blank" rel="noopener noreferrer" className="flex text-teal text-sm font-medium">
                <span>GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
            </Link>
            
            </div>
            <Link href= "/" className="font-jetbrains-mono max-w-53 w-full text-charcoal flex flex-col ">
                <span className="text-right">&copy; 2024 Alabi </span>
            <span>Designed & built from scratch</span>
            </Link>
            </div>
        </motion.div>
    </footer>
);
}
