import {motion, useReducedMotion} from "motion/react"
import { useState, useRef } from "react"
    const outgoingVariants = {
        rest: {transform: "translateY(0%)"},
        active: {transform: "translateY(100%)"},
    }
    const incomingVariants = {
        rest: {transform: "translateY(-100%)"},
        active: {transform: "translateY(0%)"},
    }
    const transition = {
        duration: 0.3,
        ease: [0.338, 0.015, 0.395, 0.959] as const
    }
    interface TextProps{
        children: string;
        href: string;
        className?: string;
    }

export default function RollingText({children, href, className} : TextProps){
    const reduceMotion = useReducedMotion()
    const [active, setActive] = useState(false)
    
    const activeRef = useRef(false)
    const animating = useRef(false)
    const pendingRequest = useRef<boolean | null> (null)
    const hovered = useRef(false)
    const focused = useRef(false)

    const updateActive = (next: boolean) => {
        activeRef.current = next;
        setActive(next);
    };
    const requestActive = (next: boolean) => {
        if (reduceMotion) return;
        
        if (next === activeRef.current){
            pendingRequest.current = null;
            return;
        }
        if (animating.current){
            pendingRequest.current = next;
            return;
        }
        animating.current = true;
        updateActive(next);
    }
    const completeAnimation = () => {
        if(!animating.current) return;
        animating.current = false;
        if(pendingRequest.current !== null && pendingRequest.current !== activeRef.current){
            const next = pendingRequest.current;
            pendingRequest.current = null;
            animating.current = true;
            updateActive(next);
        }else{
            pendingRequest.current = null;
        };
    }
    return(
        <a 
        href={href}
        className={className}
        onMouseEnter={() => {
            hovered.current = true;
            requestActive(true);
        }}
        onMouseLeave={() =>{
            hovered.current = false;
            requestActive(focused.current);
        }}
        onFocus ={() =>{
            focused.current = true;
            requestActive(true);
        }}
        onBlur={() => {
            focused.current = false;
            requestActive(hovered.current);
        }}
        >
            <span className="relative block overflow-hidden whitespace-nowrap">
                <motion.span
                className="block"
                variants={outgoingVariants}
                initial ="rest"
                animate={active? "active" : "rest"}
                onAnimationComplete={completeAnimation}
                transition={transition}
                >
                    {children}
                </motion.span>
                <motion.span
                className="absolute inset-0 block"
                variants={incomingVariants}
                initial ="rest"
                animate={active? "active" : "rest"}
                transition={transition}
                >
                    {children}
                </motion.span>

            </span>
        </a>
    );
    
}