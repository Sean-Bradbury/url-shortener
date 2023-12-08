import React from 'react'
import Image from 'next/image'
import Navigation from '../Navigation'
import Icon from '../Icon'

const Header = () => {
  return (
    <div className='flex relative w-11/12'>
        <Image src='/img/svg/logo.svg' alt='logo' width={128} height={77} />
        <Navigation />
        <div className='absolute right-0 top-0 lg:hidden'>
            <Icon type='hamburger' />
        </div>
    </div>
  )
}

export default Header
