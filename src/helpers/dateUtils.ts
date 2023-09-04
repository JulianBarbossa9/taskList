import {DateTime} from "luxon"

export const dateToString = (updateAt: any) => {
  return DateTime.fromISO(updateAt).toLocaleString(DateTime.DATE_MED)
}