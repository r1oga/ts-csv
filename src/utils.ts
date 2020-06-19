export const dateStringToDate = (dateString: string): Date => {
  const dateArr = dateString.split('/').map(numChar => +numChar)
  return new Date(Date.UTC(dateArr[2], dateArr[1] - 1, dateArr[0], 0, 0, 0))
}
