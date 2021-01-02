import { format, addDays } from 'date-fns'

export const formatDate = (date: Date): string => {
  const addedDate = addDays(new Date(date), 1)
  return format(addedDate, 'dd/MM/yyyy')
}
