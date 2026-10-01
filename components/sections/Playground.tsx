"use client"
import CodeEditor from "../ui/CodeEditor"

export default function Playground(){
    return(
        <section id="playground" className="space-y-5 pt-20">
            <p className="pb-5 uppercase flex gap-1 text-xs font-semibold text-charcoal">
                &sect; <span>playground</span>
            </p>
            <div className="space-y-5">
                <h2 className="md:text-4xl text-3xl ">Try it yourself</h2>
                <p className="text-charcoal text-wrap ">Edit the code, hit Run, see the output. No frameworks, no setup.</p>
                <CodeEditor />
            </div>
        </section>
    )
}