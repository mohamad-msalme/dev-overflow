'use client'

import * as React from 'react'
import { Moon, Sun, ScreenShareIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

export const ModeToggle: React.FC = () => {
  const { setTheme, theme } = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className=" w-7 h-7 ">
          <Sun className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-primary-500" />
          <Moon className="absolute  rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-primary-500" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className={cn(' gap-2 mb-1', {
            ' text-primary-500 ': theme === 'light'
          })}
          onClick={() => setTheme('light')}
        >
          <Sun className=" " />
          <p>Light</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(' gap-2 mb-1', {
            ' text-primary-500 font-bold': theme === 'dark'
          })}
          onClick={() => setTheme('dark')}
        >
          <Moon className="" />
          <p>Dark</p>
        </DropdownMenuItem>
        <DropdownMenuItem
          className={cn(' gap-2 mb-1', {
            ' text-primary-500': theme === 'system'
          })}
          onClick={() => setTheme('system')}
        >
          <ScreenShareIcon />
          <p>System</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
