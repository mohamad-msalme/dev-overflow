import Image from 'next/image'
import React from 'react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { NavBarList } from '../nav-bar/NavBarList'
import { NavBarFooter } from '../nav-bar/NavBarFooter'
export const MobileIcon: React.FC = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          width={24}
          height={24}
          src={'/assets/icons/hamburger.svg'}
          alt="Mobile-nav-icon"
          className="invert hidden max-sm:block dark:invert-0"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className=" w-max flex flex-col justify-between"
      >
        <div className=" pt-16">
          <NavBarList />
        </div>
        <NavBarFooter />
      </SheetContent>
    </Sheet>
  )
}
