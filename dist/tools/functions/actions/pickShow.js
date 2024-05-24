import { getRandomNumber } from "../utils/index.js";
export const pickShow = (shows) => {
    if (shows.length === 1)
        return shows[0];
    const randomNumber = getRandomNumber(0, shows.length - 1);
    return shows[randomNumber];
};
