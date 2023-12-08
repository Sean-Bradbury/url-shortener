import React from 'react'

interface Props {
   isMobile?: boolean,
   isOpen?: boolean 
}

const Navigation = ({isMobile = true, isOpen = true}: Props) => {
  return (
    <div className={`nav flex ${!isMobile ? 'lg:flex-row ' : null } ${isMobile && isOpen ? 'flex-col bg-purple p-10 rounded-lg absolute w-4/5 left-[10%]' : 'hidden'}`}>
        <div className="nav-link">Features</div>
        <div className="nav-link">Pricing</div>
        <div className="nav-link">Resources</div>
        <div className="nav-link">Login</div>
        <div className="nav-link"><button className={`primary-btn ${isMobile ? 'w-100' : null}`}>Sign Up</button></div>
    </div>
  )
}

export default Navigation
