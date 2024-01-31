import React from 'react'
import { Input, InputProps } from '@/components/ui/input'
import Image, { ImageProps } from 'next/image'
import { Button, ButtonProps } from '@/components/ui/button'
import { cn } from '@/lib/utils'

type GlobalSearchProps = {
  inputProps?: InputProps
  buttonProps?: ButtonProps
  imgProps?: ImageProps
}
export const GlobalSearch: React.FC<GlobalSearchProps> = ({
  buttonProps,
  imgProps,
  inputProps
}) => {
  return (
    <div className=" border border-light-700 dark:border-0 flex-1 max-w-96  p-4 rounded-lg flex-col justify-center items-start gap-3 dark:bg-dark-ingredient bg-light-800 lg:max-w-[40rem]">
      <div className=" flex h-6 items-center gap-4 dark:text-light-500 text-light-400 w-full">
        <Button
          {...buttonProps}
          className={cn(
            ' bg-transparent hover:bg-transparent',
            buttonProps?.className
          )}
        >
          <Image
            width={24}
            height={24}
            {...imgProps}
            alt={imgProps?.alt ?? ''}
            src={imgProps?.src ?? '/assets/icons/search.svg'}
          />
        </Button>
        <Input
          type="text"
          placeholder="Search for Questions Here..."
          {...inputProps}
          className={cn(
            'text-par-reg font-inter outline-none border-0 placeholder:dark:text-light-500 placeholder:text-light-400',
            inputProps?.className
          )}
        />
      </div>
    </div>
  )
}
