/* Hero.tsx */
'use client'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className="flex justify-center items-center bg-white flex-grow">
      <div className='text-gray-800'>
        <Link legacyBehavior href="/categoria/nobreaks-baterias"><a>Descarte de baterias</a></Link>
      </div>
    </div>
  )
}

export default Hero
