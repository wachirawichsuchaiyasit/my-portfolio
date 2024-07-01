'use client'
import { motion } from "framer-motion"
import Image from "next/image"
import React from "react"

export default function Stack() {
    const List = [
        {name:"React",logo:"react.png"},
        {name:"Next js",logo:"nextjs.png"},
        {name:"Golang",logo:"golang.png"},
        {name:"Php",logo:"php.png"}
    ]
    return (
        <>
            <div className="w-screen h-screen bg-yellow-100">
                <div className="container h-full mx-auto p-5">
                    <div className="grid h-full justify-center text-center items-center  lg:grid-cols-2">
                        <motion.p initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.1 }} className="text-6xl font-black md:text-8xl lg:text-9xl">
                            MY STACK
                        </motion.p>
                        <motion.div initial={{scale:0}} whileInView={{scale:1}} transition={{delay:0.2}} className="bg-yellow-300 justify-center md:h-[25rem] lg:h-[50rem] lg:w-[50rem] md:shadow-2xl lg:shadow-3xl p-5 flex gap-5 flex-wrap">
                            {
                                List.map((value,key)=>(
                                    <React.Fragment key={key}>
                                        <Items logo={`/image/${value.logo}`} name={value.name}/>
                                    </React.Fragment>
                                ))
                            }
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Items : React.FC<{logo:string , name : string}> = ({logo,name}) => {
    return (
        <>
            <div className="rounded-full h-fit px-5 py-2 bg-slate-50 flex items-center gap-5">
                <Image width={30} height={30} src={logo} alt={name}/>
                <p className="font-bold">{name}</p>
            </div>
        </>
    )
}