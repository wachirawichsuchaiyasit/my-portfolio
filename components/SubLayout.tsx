import Navbar from "./Navbar"

const SubLayout : React.FC<{children : React.ReactNode}> = ({children}) => {
    return (
        <>
            <div className="relative ">
                {/* <Navbar id={0}/> */}
                {children}
            </div>
        </>
    )
} 

export default SubLayout