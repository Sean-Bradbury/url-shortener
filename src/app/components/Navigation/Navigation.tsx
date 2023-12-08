import React from 'react'

interface Props {
   isMobile?: boolean,
   isOpen?: boolean 
}

const Navigation = ({isMobile = true, isOpen = true}: Props) => {
  return (
    <div className={`nav ${!isMobile  ? 'lg:flex lg:flex-row gap-10 ml-10 flex-grow' : null } ${isMobile && isOpen ? 'mobile flex-col bg-purple p-10 rounded-lg absolute w-full top-20' : isMobile && !isOpen ? 'hidden' : 'flex'}`}>
        <div className="nav-link">Features</div>
        <div className="nav-link">Pricing</div>
        <div className="nav-link">Resources</div>
        <div className="nav-link justify-self-center ml-auto">Login</div>
        <div className="nav-link"><button className={`primary-btn ${isMobile ? 'w-100' : null}`}>Sign Up</button></div>
    </div>
  )
}

export default Navigation
