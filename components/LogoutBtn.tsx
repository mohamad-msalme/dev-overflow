import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { SignOutButton } from '@clerk/nextjs'

export const LogoutBtn: React.FC = () => {
  return (
    <SignOutButton>
      <Button
        className={cn(
          'group justify-start  h-fit p-4 rounded-lg bg-transparent flex text-dark-300 dark:text-light-900 gap-3 w-full transition-all hover:bg-accentIngredient hover:text-light-900 '
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
          Log out
        </p>
      </Button>
    </SignOutButton>
  )
}
