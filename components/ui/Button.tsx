import {motion} from "motion/react"
interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children: React.ReactNode;
}

export default function Button({onClick, disabled, children}: ButtonProps){
    return(
        <motion.button
        whileTap={{scale: 0.97}}
        onClick={onClick}
        disabled={disabled}
        className="disabled:opacity-50 px-4 bg-teal text-charcoal text-xl">
            {children}
        </motion.button>
    )
}