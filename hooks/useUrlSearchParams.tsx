'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'

export const useUrlSearchParams = () => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const handelClick = (name: string, value?: string) => {
    const urlSearchParams = new URLSearchParams(searchParams)
    if (value) {
      urlSearchParams.set(name, value)
    } else {
      urlSearchParams.delete(name)
    }
    replace(`${pathname}?${urlSearchParams.toString()}`)
  }

  const isActive = (name: string, value: string, defaultVal?: string) =>
    value === defaultVal
      ? searchParams.get(name) === value || !searchParams.get(name)
      : searchParams.get(name) === value

  return [searchParams, handelClick, isActive] as const
}
