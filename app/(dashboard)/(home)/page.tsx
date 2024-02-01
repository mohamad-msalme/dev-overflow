import React from 'react'
import { Button } from '@/components/ui/button'
import { HomeFilters } from '@/components/home/HomeFilters'
import { LocalSearch } from '@/components/shared/search/LocalSearch'
import { HomeSideBar } from '@/components/home/HomeSideBar'
import { CardQuetions } from '@/components/shared/cards/qutions/CardQuetions'
import NoResult from '@/components/NoResult'

const questions = [
  {
    _id: '1',
    title: 'Cascading Deletes in SQLAlchemy?',
    tags: [
      { _id: '1', name: 'python' },
      { _id: '2', name: 'sql' }
    ],
    author: { _id: '1', name: 'John Doe', picture: 'john.jpg' },
    upvotes: 101506,
    views: 1000007,
    answers: 50,
    createdAt: new Date('2022-12-01T12:00:00.000Z')
  },
  {
    _id: '2',
    title: 'How to center a div?',
    tags: [
      { _id: '3', name: 'html' },
      { _id: '4', name: 'css' }
    ],
    author: { _id: '2', name: 'Jane Smith', picture: 'jane.jpg' },
    upvotes: 35001,
    views: 150000002,
    answers: 30,
    createdAt: new Date('2023-09-02T10:30:00.000Z')
  }
]

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
        <div className="mt-10 flex w-full flex-col gap-6">
          {questions.length > 0 ? (
            questions.map(quetion => (
              <CardQuetions key={quetion._id} {...quetion} />
            ))
          ) : (
            <NoResult
              title="There's no question to show"
              description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
              link="/ask-question"
              linkTitle="Ask a question"
            />
          )}
        </div>
      </main>
      <HomeSideBar />
    </div>
  )
}
