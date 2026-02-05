export const getStringDuration = (value: number) => {
  const min = Math.floor(value / 60);
  const sec = value - 60 * Math.floor(value / 60);
  return `${min}:${sec < 10 ? `0${sec}` : sec}`;
};
