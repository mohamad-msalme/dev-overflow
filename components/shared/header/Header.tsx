import React from 'react'
import { MobileIcon } from './MobileIcon'
import { NavBarLogo } from '../nav-bar/NavBarLogo'
import { ModeToggle } from '@/components/ModeToggle'
import { GlobalSearch } from '../search/GlobalSearch'
import { SignedIn, UserButton } from '@clerk/nextjs'

export const Header: React.FC = () => {
  return (
    <header className="  dark:shadow-none shadow-light-header dark:border-none border-b border-light-border-color flex items-center justify-between max-sm:px-4 backdrop-blur-[75px] bg-background-header">
      <div className=" hidden max-sm:block">
        <NavBarLogo />
      </div>
      <div className=" flex justify-center items-center w-full max-sm:hidden">
        <GlobalSearch />
      </div>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <div className=" h-11 w-11 flex items-center  justify-center">
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
        <MobileIcon />
      </div>
    </header>
  )
}
