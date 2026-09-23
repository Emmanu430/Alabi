export  function getOutput(code: string): string {
    const trimmed = code.trim();

    // 1. console.log("...") — extract whatever's inside the quotes
    const logMatch = trimmed.match(/console\.log\(\s*["'`](.+?)["'`]\s*\)/);
    if (logMatch) {
        return logMatch[1];
    }

    // 2. simple arithmetic like "1 + 1"
    const mathMatch = trimmed.match(/^(\d+)\s*\+\s*(\d+)$/);
    if (mathMatch) {
        const sum = Number(mathMatch[1]) + Number(mathMatch[2]);
        return String(sum);
    }

    // 3. mentions your name
    if (/alabi/i.test(trimmed)) {
        return "That's me!";
    }

    // 4. uses .map(
    if (trimmed.includes(".map(")) {
        return "[ transformed array ]";
    }

    // 5. empty textarea
    if (trimmed === "") {
        return "// Try typing something and hit Run";
    }

    // 6. fallback — nothing matched
    return "✓ Executed (no visible output)";
}