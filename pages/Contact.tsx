"use client"
import { Icon } from "@iconify/react/dist/iconify.js"
import { motion } from "framer-motion"
export default function Contact() {
    return (
        <>
            <div className="w-screen h-screen bg-amber-600">
                <div className="container h-full text-white mx-auto flex gap-12 justify-center flex-col items-center">
                    <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.1 }} className="text-6xl font-black md:text-8xl lg:text-9xl ">
                        CONTACT
                    </motion.p>
                    <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.2}} className="flex gap-12">
                        <Icon icon="mdi:github"  className="bg-black rounded-full lg:h-14 lg:w-14 p-1" />
                        <Icon icon="ic:baseline-discord"  className="bg-black rounded-full lg:h-14 lg:w-14 p-1" />
                    </motion.div>
                </div>


            </div>
        </>
    )
}