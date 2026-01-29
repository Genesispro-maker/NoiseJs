
export function formatTime(time: number) {
  if (isNaN(time)) return;

  const abs = Math.abs(time);

  const min = Math.floor(abs / 60);
  const sec = Math.floor(abs % 60);

  return `${min}:${sec}`
}