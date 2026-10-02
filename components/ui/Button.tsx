    "use client";

    import { motion } from "motion/react";
    import type { ReactNode } from "react";

    interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children: ReactNode;
    }

    export default function Button({ onClick, disabled, children }: ButtonProps) {
    return (
        <motion.button
        type="button"
        // No press effect while disabled, so a "Running..." button doesn't feel clickable
        whileTap={disabled ? undefined : { scale: 0.97 }}
        onClick={onClick}
        disabled={disabled}
        className="disabled:opacity-50 px-4 bg-teal text-charcoal text-xl"
        >
        {children}
        </motion.button>
    );
}