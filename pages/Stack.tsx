'use client'
import { motion } from "framer-motion"

export default function Stack() {
    return (
        <>
            <div className="w-screen h-screen bg-yellow-100 flex flex-col justify-center items-center">
                <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.1 }} className="text-6xl font-black md:text-8xl lg:text-9xl">
                    MY STACK
                </motion.p>
                <motion.div>

                </motion.div>
            </div>
        </>
    )
}