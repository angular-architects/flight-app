export function addMinutes(isoDate: string, minutes: number): string {
  const date = new Date(isoDate);
  const newDate = new Date(date.getTime() + 1000 * 60 * minutes);
  return newDate.toISOString();
}
