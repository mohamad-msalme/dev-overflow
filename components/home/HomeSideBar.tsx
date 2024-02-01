import React from 'react'
import { Badge } from '../ui/badge'
import { TopQuetions } from './TopQuetions'
import { TopTags } from './TopTags'

export const HomeSideBar: React.FC = () => {
  return (
    <aside className=" basis-1/3 hidden lg:block pt-8 px-4">
      <TopQuetions />
      <TopTags />
    </aside>
  )
}
