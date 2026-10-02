    // Only digits, spaces, + - * / % ( ) and decimal points. With no letters and no quotes,
    // there is nothing in the string that can call a function or read a variable,
    // so it is safe to evaluate as plain maths.
    const MATH_ONLY = /^[\d\s+\-*/%().]+$/;

    function evaluateMath(expression: string): string | null {
    const cleaned = expression.trim().replace(/;$/, "");
    if (cleaned === "" || !MATH_ONLY.test(cleaned)) return null;

    try {
        const result: unknown = new Function(`return (${cleaned});`)();
        return typeof result === "number" && Number.isFinite(result) ? String(result) : null;
    } catch {
        // Not valid maths (for example "1 +"), so let the other checks try.
        return null;
    }
    }

    export function getOutput(code: string): string {
    const trimmed = code.trim();

    // 1. empty textarea
    if (trimmed === "") {
        return "// Try typing something and hit Run";
    }

    // 2. console.log("...") with matching quotes: ' " or `
    const textLog = trimmed.match(/console\.log\(\s*(["'`])(.*?)\1\s*\)/);
    if (textLog) {
        return textLog[2];
    }

    // 3. console.log(2 * 3): evaluate the maths inside
    const mathLog = trimmed.match(/console\.log\(([^"'`]+)\)/);
    if (mathLog) {
        const result = evaluateMath(mathLog[1]);
        if (result !== null) return result;
    }

    // 4. plain maths like "1 + 1" or "(2 + 3) * 4"
    const bareMath = evaluateMath(trimmed);
    if (bareMath !== null) {
        return bareMath;
    }

    // 5. mentions your name
    if (/alabi/i.test(trimmed)) {
        return "That's me!";
    }

    // 6. uses .map(
    if (trimmed.includes(".map(")) {
        return "[ transformed array ]";
    }

    // 7. a console.log we couldn't read: point people to what works
    if (trimmed.includes("console.log")) {
        return "Preview only: try console.log('hello') or a sum like 2 * 3";
    }

    // 8. fallback: nothing matched
    return "✓ Executed (no visible output)";
}