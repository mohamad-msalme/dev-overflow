'use client'
import React from 'react'
import Image from 'next/image'
import { navBarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import Link from 'next/link'
export const NavBarList: React.FC = () => {
  const pathName = usePathname()
  const isActive = (path: string) => pathName === path
  return (
    <div className=" flex flex-col items-start gap-6">
      {navBarLinks.map(({ label, imgURL, route }) => (
        <Link
          href={route}
          key={label}
          className={cn(
            'group flex text-dark-300 dark:text-light-900 p-4 gap-3 w-full rounded-md transition-all hover:bg-accentIngredient hover:text-light-900 ',
            {
              ' bg-accentIngredient text-base-bold text-light-900 font-bold':
                isActive(route)
            }
          )}
        >
          <Image
            width={24}
            height={24}
            alt={label}
            src={imgURL}
            className={cn('invert dark:invert-0 group-hover:invert-0', {
              'invert-0': isActive(route)
            })}
          />
          <p
            className={cn(
              ' text-lg text-current dark:text-light-900 max-md:hidden max-sm:block '
            )}
          >
            {label}
          </p>
        </Link>
      ))}
    </div>
  )
}
