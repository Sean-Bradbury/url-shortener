'use client'
import React, {useState, useCallback, useEffect} from 'react'
import Image from 'next/image'
import Navigation from '../Navigation'
import Icon from '../Icon'

const Hero = () => {

  return (
    <section className='hero text-center lg:text-left relative flex flex-col lg:flex-row-reverse'>
        <div className='relative -right-10 flex justify-end lg:w-1/2'>
            <Image src='/img/parts/hero_image.png' alt='illustration' width={500} height={500} className='w-full h-auto object-contain lg:w-auto' />
        </div>
        <div className='my-10 lg:w-1/2'>
            <h1 className='hero-title text-black-text font-bold text-3xl lg:text-8xl'>More than just shorter links</h1>
            <p className='hero-description text-gray-dark mt-5 mb-10 text-lg lg:text-xl'>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
            <a className='primary-btn'>Get Started</a>
        </div>
    </section>
  )
}

export default Hero
