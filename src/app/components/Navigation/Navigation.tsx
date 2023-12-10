'use client'
import Icon from '../Icon'
interface NavigationProps {
  isMobile: boolean,
  isOpen: boolean
}

const Navigation = ({isMobile, isOpen}: NavigationProps) => {
  return (
    <div className={`nav ${!isMobile ? 'lg:flex lg:flex-row gap-10 ml-10 flex-grow' : null } ${isMobile && isOpen ? 'mobile flex-col bg-purple p-10 rounded-lg absolute w-full top-20 animate-fadeIn' : isMobile && !isOpen ? 'hidden' : 'flex'}`}>
        <div className="nav-link my-2">Features</div>
        <div className="nav-link my-2">Pricing</div>
        <div className="nav-link my-2">Resources</div>
        <div className="nav-link justify-self-center ml-auto my-2">Login</div>
        <div className="nav-link my-2"><button className={`primary-btn ${isMobile ? 'w-100' : null}`}>Sign Up</button></div>
    </div>
  )
}

export default Navigation
