    "use client";

    import { useState } from "react";
    import Button from "../ui/Button";
    import { getOutput } from "@/lib/getOutput";
    import { RiPlayFill } from "@remixicon/react";

    export default function CodeEditor() {
    const [code, setCode] = useState("console.log('hello world')");
    const [log, setLog] = useState("");
    const [isRunning, setIsRunning] = useState(false);

    const lines = code.split("\n");

    const handleRun = () => {
        setIsRunning(true);
        setTimeout(() => {
        setLog(getOutput(code));
        setIsRunning(false);
        }, 480);
    };

    return (
        <div className="w-full lg:max-w-170 bg-surface border border-edges transition-colors focus-within:border-teal">
        {/* Chrome bar */}
        <div className="flex justify-between items-center py-3 px-4 border-b border-b-edges">
            <span className="text-charcoal font-mono text-xs">playground.js</span>
            <div className="flex items-center justify-center gap-1.5">
            <div className="rounded-full w-2.5 h-2.5 bg-charcoal"></div>
            <div className="rounded-full w-2.5 h-2.5 bg-charcoal/70"></div>
            <div className="rounded-full w-2.5 h-2.5 bg-charcoal/40"></div>
            </div>
        </div>

        <div className="flex">
            {/* Line numbers. Same leading-6 as the textarea, so every row lines up. */}
            <div
            aria-hidden="true"
            className="flex flex-col items-end px-3 py-2 border-r border-edges select-none"
            >
            {lines.map((_, index) => (
                <span key={index} className="text-charcoal font-mono text-sm leading-6">
                {index + 1}
                </span>
            ))}
            </div>

            {/* rows grows with the code and wrap="off" keeps one line = one row,
                so the line numbers can never drift out of alignment.
                text-base on mobile stops iOS from zooming in when you tap the editor. */}
            <textarea
            data-lenis-prevent
            aria-label="Code editor"
            className="min-w-0 w-full resize-none overflow-x-auto bg-surface py-2 pl-4 font-mono text-base leading-6 text-snow focus:outline-none md:text-sm"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={Math.max(4, lines.length)}
            wrap="off"
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
            />
        </div>

        {/* Footer bar */}
        <div className="flex justify-between items-center border-t border-edges py-3 px-4">
            <span className="text-charcoal font-mono text-xs">
            JavaScript &bull; {lines.length} lines
            </span>
            {/* A <button> may only contain inline content, so spans instead of <p>/<div> */}
            <Button onClick={handleRun} disabled={isRunning}>
            {isRunning ? (
                <span className="block text-xs p-2">Running...</span>
            ) : (
                <span className="flex items-center gap-1.5 text-xs p-2">
                <RiPlayFill className="w-4 h-4" />
                <span>Run</span>
                </span>
            )}
            </Button>
        </div>

        {/* The live region stays in the page, so screen readers announce the output when it appears */}
        <div aria-live="polite">
            {log && (
            <p className="text-teal font-mono border-t border-edges py-3 px-4 text-xs">
                output <span className="text-snow text-base">{log}</span>
                <span aria-hidden="true" className="cursor-blink text-teal text-base">
                |
                </span>
            </p>
            )}
        </div>
        </div>
    );
}