export function formatter(date: string) {
  const formatter = new Intl.DateTimeFormat(undefined, { dateStyle: "medium" });
  return formatter.format(new Date(date));
}
