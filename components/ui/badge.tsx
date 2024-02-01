import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex py items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'uppercase text-[10px] font-medium leading-[130%] tracking-wider py-2 px-4 items-center justify-center rounded-md dark:bg-dark-300 dark:text-light-500 bg-light-800 text-light-400 outline-none border-none"',
        secondary:
          'dark:bg-dark-400 text-[10px] font-medium uppercase leading-[130%] dark:text-light-900 justify-center items-center p-[3px_4px_2px_3px] rounded-[2px] bg-light-700 text-dark-400',
        destructive:
          'text-[12] font-semibold leading-[130%] rounded-full py-[10px] px-5 justify-center items-center gap-[10px] dark:bg-dark-300 dark:text-light-900 bg-light-700 text-dark-500',
        outline:
          ' uppercase text-sm font-medium leading-[130%] tracking-wider py-3 px-6 justify-center items-center rounded-md dark:bg-dark-300 dark:text-light-500 bg-light-800 text-light-500 outline-none border-none'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  isActive?: boolean
}

function Badge({ className, variant, isActive, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className, {
        'dark:bg-dark-400 *:bg-accentIngredient *:bg-clip-text *:text-transparent bg-primary-100 ':
          isActive && variant === 'outline',
        ' bg-accentIngredient text-light-900':
          isActive && variant === 'destructive'
      })}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
