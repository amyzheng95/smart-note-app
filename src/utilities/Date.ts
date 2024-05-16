function padNumber(num: number) {
  const numStr = num.toString();
  if (numStr.length <= 1) {
    return `0${numStr}`;
  }
  return numStr;
}

export function getNow() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  return `${padNumber(month)}/${padNumber(day)}/${padNumber(year)}`;
}
