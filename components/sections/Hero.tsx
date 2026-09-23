"use client"
import {motion, type Variants }from "motion/react"
import {Sparkle, Minus} from "lucide-react"

const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}


export default function Hero(){
    return(
    <main className="md:px-10 px-6 lg:px-20 flex flex-col md:justify-center  min-h-screen   pt-30 md:pt-0">
        <motion.div
        variants={container}
        animate="visible"
        initial="hidden"
        className="flex flex-col gap-10 ">
            <motion.div
            variants={item}
            className="flex items-center text-teal">
                <Sparkle className="inline-block mr-2 w-3 h-3" />
                <p className="font-mono text-sm md:text-lg">AVAILABLE FOR WORK</p>
            </motion.div>
            <motion.h1
            variants={item}
            className="font-display md:text-8xl text-5xl text-snow">Alabi Emmanuel.</motion.h1>
            <motion.p variants={item} className="text-charcoal md:text-2xl text-lg font-semibold font-sans">
                Computer Engineering student. Full-stack developer.
                <br className="hidden md:block"/>
                I build tools people actually use.
            </motion.p>
            <motion.div variants={item} className="flex items-center text-charcoal text-sm md:text-base animate-bounce">
                <Minus className="w-4 h-4" />
                <span>scroll to explore</span>
            </motion.div>
        </motion.div>
    </main>
        
    )
}
