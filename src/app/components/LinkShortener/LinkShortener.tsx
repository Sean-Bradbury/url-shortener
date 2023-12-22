import React from 'react'
import './link-shortener.scss'

const LinkShortener = () => {

  return (
    <section className='link-shortener bg-gray-light mt-36 px-10'>
        <form className='link-shortener-form bg-purple rounded-xl flex flex-col gap-5 p-5 lg:flex-row lg:p-10 -translate-y-1/2'> 
          <input type='text' placeholder='Shorten a link here...' className='rounded py-4 px-5 lg:flex lg:flex-grow lg:w-100'/>
          <button className='primary-btn rounded'>
            Shorten It!
          </button>
        </form>
    </section>
  )
}

export default LinkShortener
