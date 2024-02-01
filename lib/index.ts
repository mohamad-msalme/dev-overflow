export const formatNumberToK = (num: number) => {
  const absNum = Math.abs(num)

  if (absNum > 999) {
    const magnitude = 10 ** (Math.floor(Math.log10(absNum)) - 2)
    const rounded = Math.round(absNum / magnitude) / 10
    return `${rounded}K`
  }

  return num
}
