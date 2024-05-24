import { pickShow } from "../actions/index.js";
import { randomiseEpisodes, getRandomNumber } from "../utils/index.js";
import { shows } from "../../../output/index.js";
export const fetchRandomEpisode = (tvShows) => {
    var _a;
    const chosenShow = pickShow(tvShows);
    const showEpisodes = (_a = shows.find((show) => show.name === chosenShow)) === null || _a === void 0 ? void 0 : _a.episodes;
    if (!showEpisodes)
        return null;
    const shuffleEpisodes = randomiseEpisodes(showEpisodes);
    const randomNumber = getRandomNumber(0, shuffleEpisodes.length - 1);
    return shuffleEpisodes[randomNumber];
};
