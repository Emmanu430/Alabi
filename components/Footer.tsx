"use client";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
    const emailAddress = "alabii1.0e@gmail.com"
    const[isCopied, setIsCopied] = useState(false);
    const handleCopy = async () => {
        try{
            await navigator.clipboard.writeText(emailAddress);
            setIsCopied(true);
            setTimeout(()=>{
                setIsCopied(false);
            }, 2000);
        }catch(err){
            console.error("failed to copy text: ", err);
        }
    }
return (
    <footer className="pl-5 py-10 md:px-10 px-6 lg:px-15">
        <motion.div 
        variants={container} 
        initial="hidden" 
        animate="visible" 
        className="font-mono space-y-5">
            <p className=" uppercase flex gap-2 text-sm font-semibold text-charcoal">
                &sect; <span>contact</span>
            </p>
            <motion.p variants={item}  
            className="text-snow text-2xl md:text-5xl" >
                Let's build something.
            </motion.p>
            <div className=" flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <motion.div variants={item} className="font-mono flex flex-col gap-3 md:flex-row md:gap-5 lg:gap-20 lg:pt-5">
                    <div className="relative flex items-center gap-2 group">
                        <button 
                        aria-label="Copy email address to clipboard"
                        className="hover:text-white flex items-center gap-3 text-sm font-medium transition-all"
                        onClick={handleCopy}>
                            <div className="flex text-teal">
                                <span>{emailAddress}</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </button>

                        {!isCopied && (
                            <div className="absolute -top-5 left-1/4 -translate-x-1/4 px-2.5 py-1 text-xs font-semibold text-slate-950 bg-teal rounded shadow-md pointer-events-none transition-all duration-200 opacity-0 group-hover:opacity-100 group-hover:-translate-y-1">
                                Click to copy
                                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-teal" />
                            </div>
                        )}

                        <div
                            className={`absolute -top-5 left-1/4 -translate-x-1/4 px-2.5 py-1 text-xs font-semibold text-slate-950 bg-teal rounded shadow-md pointer-events-none transition-all duration-200 ${
                            isCopied 
                            ? "opacity-100 transform -translate-y-1 scale-100" 
                            : "opacity-0 transform translate-y-2 scale-95"
                            }`}
                            >
                                Copied!
                            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-teal" />
                        </div>
                    </div>
                    <Link href="https://www.linkedin.com/in/emmanuel-oluwakayode-a9829333b/" target="_blank" rel="noopener noreferrer" className="flex text-teal text-sm font-medium">
                        <span>LinkedIn</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                    <Link href="https://github.com/Emmanu430" target="_blank" rel="noopener noreferrer" className="flex text-teal text-sm font-medium">
                        <span>GitHub</span>
                        <ArrowUpRight className="w-4 h-4" />
                    </Link>
                </motion.div>
            <motion.div variants={item}  className="font-mono  text-charcoal text-xs flex flex-col ">
                <span className="lg:text-right ">&copy; {new Date().getFullYear()} Alabi </span>
            <span>Designed & built from scratch</span>
            </motion.div>
            </div>
        </motion.div>
    </footer>
);
}
