import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const hotQuetions = [
  'Would it be appropriate to point out an error in another paper during a referee report?',
  'How can an airconditioning machine exist?',
  'Interrogated every time crossing UK Border as citizen',
  'Low digit addition generator',
  'What is an example of 3 numbers that do not make up a vector?'
]

export const TopQuetions: React.FC = () => {
  return (
    <>
      <h3 className=" dark:text-light-900 text-dark-200 text-h3-bold mb-6">
        Hot Network
      </h3>
      <div className=" text-body-med text-dark-500 inline-flex dark:text-light-700  flex-col items-start gap-8 mb-16">
        {hotQuetions.map(title => (
          <Link className=" flex items-start gap-3 " href="/" key={title}>
            <p className=" text-body-med dark:text-light-700 text-dark-500">
              {title}
            </p>
            <Image
              width={20}
              height={20}
              src={'/assets/icons/chevron-right.svg'}
              alt=""
              className=" invert dark:invert-0"
            />
          </Link>
        ))}
      </div>
    </>
  )
}
