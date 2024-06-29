"use client"
import {motion} from "framer-motion"

export default function Interview() {
    return (
        <>
            <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center text-center bg-orange-500">
                <motion.p initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.1}} className="text-bold font-black text-white text-7xl md:text-8xl lg:text-9xl">HELLO</motion.p>
                <motion.p initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.2}} className=" container text-slate-200 md:text-2xl lg:text-4xl">
                    I am studying at Kasetsart University. Computer Science Major I like to write code. So I tried to make projects for learning.
                </motion.p>
            </div>
        </>
    )
}