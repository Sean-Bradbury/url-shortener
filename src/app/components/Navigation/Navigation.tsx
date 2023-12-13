'use client'
import Icon from '../Icon'
interface NavigationProps {
  isMobile: boolean,
  isOpen: boolean
}

const Navigation = ({isMobile, isOpen}: NavigationProps) => {
  return (
    <div className={`nav ${!isMobile ? 'lg:flex lg:flex-row lg:ml-10 gap-10  flex-grow' : null } ${isOpen ? 'mobile flex-col bg-purple p-10 rounded-lg absolute w-full top-20 animate-fadeIn' : !isOpen ? 'hidden' : 'flex'}`}>
        <div className="nav-link my-7">Features</div>
        <div className="nav-link my-7">Pricing</div>
        <div className="nav-link my-7">Resources</div>
        <div className="d-lg-none my-7 bg-gray-dark h-px w-100 opacity-25"></div>
        <div className="nav-link justify-self-center ml-auto my-7">Login</div>
        <div className="nav-link my-7"><button className={`primary-btn ${isOpen ? 'w-full' : null}`}>Sign Up</button></div>
    </div>
  )
}

export default Navigation
