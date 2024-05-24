import { getRandomNumber } from "./getRandomNumber.js";
export const pickShow = (shows) => {
    const randomNumber = getRandomNumber(0, shows.length - 1);
    return shows[randomNumber];
};
