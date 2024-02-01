import { Badge } from '@/components/ui/badge'
import { formatNumberToK } from '@/lib'
import moment from 'moment'
import React from 'react'
import Metric from '../Metric'
import Link from 'next/link'

interface Props {
  _id: string
  title: string
  tags: { _id: string; name: string }[]
  author: { _id: string; name: string; picture: string }
  upvotes: number
  views: number
  answers: number
  createdAt: Date
}

export const CardQuetions: React.FC<Props> = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt
}) => {
  return (
    <div className="bg-light-900 dark:bg-[#13161CB2] shadow-light-300 dark:shadow-dark-100 rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="text-[10px] font-normal leading-[13px] text-dark-400 dark:text-light-700 line-clamp-1 flex sm:hidden">
            {moment(createdAt).fromNow()}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold text-[18px] font-semibold leading-[25.2px] text-dark-200 dark:text-light-900 line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map(({ _id, name }) => (
          <Badge key={_id}>{name} </Badge>
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3 flex">
        <div className=" mr-auto">
          <Metric
            imgUrl="/assets/icons/avatar.svg"
            alt="User"
            value={author.name}
            title={` - asked ${moment(createdAt).fromNow()}`}
            href={`/profile/${author._id}`}
            isAuthor
            textStyles="body-medium text-dark-400 dark:text-light-700"
          />
        </div>
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="Upvotes"
          value={formatNumberToK(upvotes)}
          title=" Votes"
          textStyles="small-medium text-dark-400 dark:text-light-800"
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatNumberToK(answers)}
          title=" Answers"
          textStyles="small-medium text-dark-400 dark:text-light-800"
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatNumberToK(views)}
          title=" Views"
          textStyles="small-medium text-dark-400 dark:text-light-800"
        />
      </div>
    </div>
  )
}
