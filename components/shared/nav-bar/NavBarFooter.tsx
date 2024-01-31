import React from 'react'
import { LoginBtn } from '@/components/LoginBtn'
import { LogoutBtn } from '@/components/LogoutBtn'
import { SignedIn, SignedOut } from '@clerk/nextjs'

export const NavBarFooter: React.FC = () => (
  <div className=" w-full">
    <SignedIn>
      <LogoutBtn />
    </SignedIn>
    <SignedOut>
      <LoginBtn />
    </SignedOut>
  </div>
)
