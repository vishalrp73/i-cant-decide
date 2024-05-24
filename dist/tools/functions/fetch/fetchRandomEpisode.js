import { pickShow } from "../actions/index.js";
import { randomiseEpisodes, getRandomNumber } from "../utils/index.js";
import { fetchShows } from "./fetchShows.js";
export const fetchRandomEpisode = (shows) => {
    console.log(shows);
    const chosenShow = pickShow(shows);
    const fetchedEpisodes = fetchShows(chosenShow);
    if (fetchedEpisodes !== null) {
        const shuffleEpisodes = randomiseEpisodes(fetchedEpisodes);
        const randomNum = getRandomNumber(0, shuffleEpisodes.length - 1);
        return shuffleEpisodes[randomNum];
    }
    return null;
};
