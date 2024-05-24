import { pickShow } from "./pickShow.js";
import { fetchShows } from "./fetchShows.js";
import { randomiseEpisodes } from "./randomiseEpisodes.js";
import { getRandomNumber } from "./getRandomNumber.js";
export const fetchRandomEpisode = (shows) => {
    const chosenShow = pickShow(shows);
    const fetchedEpisodes = fetchShows(chosenShow);
    if (fetchedEpisodes !== null) {
        const shuffleEpisodes = randomiseEpisodes(fetchedEpisodes);
        const randomNum = getRandomNumber(0, shuffleEpisodes.length - 1);
        return shuffleEpisodes[randomNum];
    }
    return null;
};
