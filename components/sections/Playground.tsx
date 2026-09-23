"use client"
import CodeEditor from "../ui/CodeEditor"

export default function Playground(){
    return(
        <main className="space-y-5 pt-20">
            <p className=" uppercase flex gap-2 text-sm font-semibold text-charcoal">
                &sect; <span>playground</span>
            </p>
            <h2 className="md:text-4xl text-3xl ">Try it yourself</h2>
            <p className="text-charcoal text-wrap ">Edit the code, hit Run, see the output. No frameworks, no setup.</p>
            <CodeEditor />
        </main>
    )
}