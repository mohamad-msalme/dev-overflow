import React from 'react'
import { Button } from '@/components/ui/button'
import { HomeFilters } from '@/components/home/HomeFilters'
import { LocalSearch } from '@/components/shared/search/LocalSearch'
import { HomeSideBar } from '@/components/home/HomeSideBar'
// p-8 lg:pt-12 lg:pl-12  sm:p-8
export default function Page() {
  return (
    <div className=" flex gap-10">
      <main className=" flex flex-col gap-10 flex-1  p-8 lg:pr-0 lg:pb-0 lg:basis-2/3">
        <div className=" flex flex-col items-start gap-8">
          <div className=" w-full flex justify-between items-center">
            <h1 className="dark:text-light-900 text-dark-200 text-h1-bold">
              All Questions
            </h1>
            <Button>
              <p>Ask a Question</p>
            </Button>
          </div>
          <div className=" w-full">
            <LocalSearch />
          </div>
          <HomeFilters />
        </div>
        <div>Quetions</div>
      </main>
      <HomeSideBar />
    </div>
  )
}
