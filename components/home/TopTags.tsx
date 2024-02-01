import React from 'react'
import { Badge } from '../ui/badge'
const tagsPopular = [
  {
    tagName: 'javascript',
    tag_id: 12364,
    number: '12364+'
  },
  {
    tagName: 'next.js',
    tag_id: 12364,
    number: '12364+'
  },
  {
    tagName: 'react.js',
    tag_id: 12364,
    number: '12364+'
  },
  {
    tagName: 'typescript',
    tag_id: 12364,
    number: '12364+'
  },
  {
    tagName: 'pythone',
    tag_id: 12364,
    number: '12364+'
  },
  {
    tagName: 'java',
    tag_id: 12364,
    number: '12364+'
  },
  {
    tagName: 'c++',
    tag_id: 12364,
    number: '12364+'
  },
  {
    tagName: 'c sharp',
    tag_id: 12364,
    number: '12364+'
  }
]

export const TopTags: React.FC = () => {
  return (
    <>
      <h3 className=" dark:text-light-900 text-dark-200 text-h3-bold mb-6">
        Popular Tags
      </h3>
      <div className=" flex flex-col items-start gap-4">
        {tagsPopular.map(({ tagName, tag_id, number }) => (
          <div
            key={tagName}
            className=" w-full flex justify-between items-center"
          >
            <Badge>
              <p>{tagName}</p>
            </Badge>
            <p className=" text-dark-500 dark:text-light-700 text-small-med">
              {number}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}
