export interface DateTime {
  date: string;
  time: string;
}

export function splitDate(date: string): DateTime {
  const reg = /[T+-Z]/; // split at these chars
  return {
    date: date.split(reg)[0],
    time: date.split(reg)[1],
  };
}

export function joinDate(date: string, time: string): string {
  return date + 'T' + time;
}
