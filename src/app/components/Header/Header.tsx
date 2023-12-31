'use client'
import React, {useState, useCallback, useEffect} from 'react'
import Image from 'next/image'
import Navigation from '../Navigation'
import Icon from '../Icon'

const Header = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleResize = useCallback(() => {
      if (window.innerWidth < 768) {
          setIsMobile(true);
      } else {
          setIsMobile(false);
          setIsOpen(false);
      }
  }, []);

  useEffect(() => {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <div className='flex relative'>
        <Image src='/img/svg/logo.svg' alt='logo' width={121} height={33} />
        <Navigation isMobile={isMobile} isOpen={isOpen} />
        <button className='absolute right-0 top-0 lg:hidden' onClick={() => setIsOpen(p => !p)}>
            <Icon type='hamburger' />
        </button>
    </div>
  )
}

export default Header
