import React from 'react'
import Image from 'next/image'
import Navigation from '../Navigation'

const Header = () => {
  return (
    <div className='d-flex'>
        <Image src='/img/svg/logo.svg' alt='logo' width={128} height={77} />
        <Navigation />
    </div>
  )
}

export default Header
