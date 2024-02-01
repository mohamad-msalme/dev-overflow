'use client'

import React from 'react'
import { Badge } from '@/components/ui/badge'
import { QUETIONS_TYPE } from '@/constants'
import { useUrlSearchParams } from '@/hooks/useUrlSearchParams'

export const HomeFilters: React.FC = () => {
  const [, updateUrl, isActive] = useUrlSearchParams()
  return (
    <div className=" flex justify-start items-center gap-3 flex-wrap">
      {QUETIONS_TYPE.map(({ label, tag }, _, _arr) => (
        <Badge
          key={tag}
          variant="outline"
          isActive={isActive('tag', tag, _arr[0].tag)}
          className=" cursor-pointer"
          onClick={() => updateUrl('tag', tag)}
        >
          <p>{label}</p>
        </Badge>
      ))}
    </div>
  )
}
