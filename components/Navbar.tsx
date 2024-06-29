"use client"
import React from "react"
import { useEffect, useState } from "react"

export default function Navbar({ id }: { id: number }) {
    const [state,setState] = useState<number>(id)
    const navbarItems = ["Home","Stack","Project","Contact"]

    return (
        <>
            <div className="w-screen flex justify-center gap-5 sticky top-0 p-10 bg-black lg:gap-10 ">
                {
                    navbarItems.map((value,key) => (
                        <React.Fragment key={key}>
                            <NabarItem name={value} id={key} state={state}/>
                        </React.Fragment>
                    ))
                }
            </div>
        </>
    )
}

const NabarItem : React.FC<{name : string , id : number , state : number}> = ({name , id , state}) => {
    const [color,setColor] = useState<string>("text-white")
    useEffect(() => {
        if (state == id) {
            setColor("text-orange-500")
        } else {
            setColor("text-white")
        }
    },[color])
    
    return (
        <>
            <p className={`text-xl font-bold ${color} lg:text-4xl`}>{name}</p>
        </>
    )
}