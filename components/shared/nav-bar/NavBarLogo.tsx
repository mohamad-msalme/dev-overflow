import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const NavBarLogo: React.FC = () => {
  return (
    <Link
      href={'/'}
      className="flex items-center gap-1 mb-20 justify-center max-sm:mb-0"
    >
      <Image
        width={100}
        height={100}
        alt="Logo"
        src={'/assets/images/site-logo.svg'}
        className=" w-8 h-8"
      />
      <p className=" font-spaceGrotesk text-h2-bold max-md:hidden max-sm:block">
        Dev<span className=" text-primary">Overflow</span>
      </p>
    </Link>
  )
}
