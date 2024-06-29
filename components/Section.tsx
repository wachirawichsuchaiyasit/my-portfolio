
const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="snap-always  snap-start">
        {children}
      </div>
    </>
  )
}

export default Section