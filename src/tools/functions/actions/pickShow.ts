import { getRandomNumber } from "../utils/index.js";

export const pickShow = (shows: string[]) => {
  const randomNumber = getRandomNumber(0, shows.length - 1);
  return shows[randomNumber];
};
