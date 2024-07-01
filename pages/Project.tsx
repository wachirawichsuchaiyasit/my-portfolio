"use client"
import { motion } from "framer-motion"
import { Icon } from "@iconify/react"

export default function MyProject() {
    return (
        <>
            <div className="w-screen h-screen bg-[#FDDE8D] flex flex-col items-center justify-center gap-12">
                <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.1 }} className="text-amber-900 text-center font-black lg:text-9xl ">
                    PROJECT
                </motion.p>
                <motion.button initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.2 }} className="rounded-2xl bg-amber-900 px-12 p-4 font-bold text-white lg:text-5xl">
                    <p className="gap-5 w-full flex items-center">
                        CLICK
                        <Icon icon="mingcute:arow-to-right-fill" className="lg:96" />
                    </p>
                </motion.button>
            </div>
        </>
    )
}

