"use client"
import {useState} from "react"
import Button from "../ui/Button";
import  {getOutput}  from "@/lib/getOutput"
import { RiPlayFill } from "@remixicon/react";


export default function CodeEditor() {

    const [code, setCode] = useState("console.log('hello world')");
    const [log, setLog] = useState("");
    const [isRunning, setIsRunning] = useState(false);
    const handleRun = () => {
        setIsRunning(true);
        setTimeout( ()=>{
            setLog(getOutput(code));
            setIsRunning(false);
        }, 480)
    }
    return(
        <div className="w-full lg:max-w-170 bg-surface border border-edges">
        <div className="flex justify-between items-center py-3 px-4 border-b-edges border-b">
        <span className="text-charcoal font-mono text-xs">playground.js</span>
        <div className="flex items-center justify-center gap-1.5">
            <div className="rounded-full w-2.5 h-2.5 bg-charcoal"></div>
            <div className="rounded-full w-2.5 h-2.5 bg-charcoal/70"></div>
            <div className="rounded-full w-2.5 h-2.5 bg-charcoal/40"></div>
        </div>
        </div>
        <div className="flex">
            <div className="flex flex-col items-end px-3 py-2 border-r border-edges select-none">
                {code.split("\n").map((_, index) => (
                <span key={index} className="text-charcoal font-mono text-sm leading-6">
                    {index + 1}
                </span>
            ))}
            </div>
        
            <textarea
            aria-label="Code editor"
            className="bg-surface text-snow w-full pl-4 py-2 font-mono text-sm leading-6 resize-none focus:outline-none"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={4}
            />
            </div>
            <div className="flex justify-between items-center border-t  border-edges py-3 px-4">
                <span className="text-charcoal font-mono text-xs">JavaScript &bull; {code.split("\n").length} lines</span>
                <Button onClick={handleRun} disabled={isRunning}>

                    {isRunning ? <p className="text-xs p-2">Running...</p> : <div className="flex items-center gap-1.5 text-xs p-2"><RiPlayFill  className="w-4 h-4 text-black" /> <span>Run</span></div>}
                </Button>
            </div>
        {log && 
            <p className="text-teal font-mono border-t border-edges py-3 px-4 text-xs">
                output <span className="text-snow text-base">{log}</span>
                <span className="cursor-blink text-teal text-base">|</span>
                </p>
                }
        </div>
    )
}