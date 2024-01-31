import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'

export const LoginBtn: React.FC = () => {
  return (
    <Link
      href="/sign-in"
      className={cn(
        'group flex text-dark-300 dark:text-light-900 p-4 gap-3 w-full rounded-md transition-all hover:bg-accentIngredient hover:text-light-900 '
      )}
    >
      <Image
        width={24}
        height={24}
        alt={''}
        src="/assets/icons/sign-up.svg"
        className={cn('invert dark:invert-0 group-hover:invert-0')}
      />
      <p
        className={cn(
          ' text-lg text-current dark:text-light-900 max-md:hidden max-sm:block '
        )}
      >
        Log in
      </p>
    </Link>
  )
}
