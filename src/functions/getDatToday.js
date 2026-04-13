export function getDatToday() {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const fullDate = `${year}/${month}/${day}`;
  return fullDate;
}
