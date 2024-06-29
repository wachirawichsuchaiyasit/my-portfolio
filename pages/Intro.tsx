import Image from "next/image"

export default function IntroHome() {
    return (
        <>

            <div className="h-screen w-screen  bg-[#E5D6C2] relative ">
                <div className="mx-auto container  w-screen h-screen p-5 ">
                    <div className="flex justify-between">
                        <div className="grid gap-1">
                            <div className="bg-black w-24 h-2 lg:w-44 lg:h-4"></div>
                            <div className="bg-orange-500 ms-auto w-12 h-2 lg:h-4 lg:w-24"></div>
                        </div>
                        <div className="flex gap-1">
                            <div className="bg-orange-500 w-6 h-2 lg:w-12 lg:h-4"></div>
                            <div className="bg-white w-24 h-2 lg:w-44 lg:h-4"></div>
                        </div>
                    </div>
                    <Image
                        src={"/image/logo.png"}
                        alt="Picture of the author"
                        width={1200}
                        height={1000}
                        className="mx-auto mt-12 lg:mt-24"
                    />
                    <p className="text-2xl text-center text-gray-700 font-black md:text-5xl lg:text-6xl">COMPUTER SCIENCE</p>

                    <div className="grid gap-5 mt-24  lg:grid-cols-2  lg:mt-96">
                        <div className="w-52 h-52 bg-lime-800 mx-auto z-20 md:w-72 md:h-72 lg:mx-0 lg:h-96 lg:w-96 shadow-2xl lg:shadow-3xl">
                            <Image
                                src={"/image/me.png"}
                                alt="Picture of the author"
                                width={1200}
                                height={1200}
                                className="z-10 mx-auto "
                            />

                        </div>

                        <Image
                            src={"/image/name.png"}
                            alt="Picture of the author"
                            width={1000}
                            height={1000}
                            className="z-10 mx-auto mt-12 md:w-[80%] lg:w-fit lg:mt-24"
                        />
                    </div>


                </div>
                <div className="bg-white w-screen h-16 absolute bottom-0 z-0 lg:h-60"></div>
            </div>
        </>
    )
}