import React from 'react'
import { NavBarLogo } from './NavBarLogo'
import { NavBarList } from './NavBarList'
import { NavBarFooter } from './NavBarFooter'

export const NavBar: React.FC = () => {
  return (
    <nav className=" shadow-light-nav border-r border-light-nav  dark:border-dark-300 dark:shadow-none row-span-2 text-h1-bold pl-6 pt-10 pr-6 pb-8 flex flex-col items-start shrink-0 justify-between max-sm:hidden">
      <div>
        <NavBarLogo />
        <NavBarList />
      </div>
      <NavBarFooter />
    </nav>
  )
}
