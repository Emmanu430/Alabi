"use client"

import {X, Menu } from "lucide-react"
import { AnimatePresence, motion } from "motion/react";
import { useState} from "react"
import RollingText from "./ui/RollingText";

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navItems = 
    [
        {label: "Home", href: "/"},
        {label: "Playground", href: "/"},
        {label: "Project", href: "/"},
        {label: "About", href: "/"},
        {label: "Contact", href: "/"},
    ];
    return(
        <div>
            <nav className="z-50 bg-teal mt-5 p-5 fixed md:w-auto w-full md:left-5 md:right-5 lg:left-10 lg:right-10 flex justify-between items-center ">
            <div className="font-display text-xl">Alabi</div>
                <div className="flex items-center ">
                    <ul className="md:flex  gap-10 text-charcoal hidden ">
                        {navItems.map((navItem, index) => (
                            <RollingText 
                                href={navItem.href}
                                key ={index} 
                                className="hover:text-snow ">
                                {navItem.label}
                            </RollingText>
                        ))}
                    </ul>
            <motion.button
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu" }
            whileTap={{y: 1}}
            onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ?
                ( <X className="w-4 h-4 md:hidden" />) :
                (<Menu className="w-4 h-4 md:hidden" /> )
            }
            </motion.button>
                </div>
        </nav>
        <AnimatePresence initial={false} >
            {
                isMenuOpen ? 
                <motion.div 
                id="mobile-navigation-menu"
                initial={{opacity:0, y:-20}}
                animate={{opacity:1, y:0}}
                exit={{opacity:0, y:-20}}
                transition={{duration:0.3, ease: "easeInOut"}}
                key="box"
                className="z-50 md:hidden  flex bg-teal flex-col fixed w-full md:left-5 md:right-5 top-20 py-5  text-charcoal text-2xl text-left">
                    {navItems.map((navItem, index)=> (
                        <div key={index}
                        className={
                                index === navItems.length -1 ?
                                "pt-4" : "py-4 border-b-2 border-b-black"
                        }>
                            <a href={navItem.href} onClick={()=>(setIsMenuOpen(false))}
                                className="text-2xl pl-5 active:text-snow">
                                {navItem.label}
                            </a>
                        </div>
                    ))}
                </motion.div> : null
            }
        </AnimatePresence>
        </div>
        
    )
}