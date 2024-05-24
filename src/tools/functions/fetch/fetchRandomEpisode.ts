import { Episode } from "../types";
import { pickShow } from "../actions/index.js";
import { randomiseEpisodes, getRandomNumber } from "../utils/index.js";
import { shows } from "../../../output/index.js";

export const fetchRandomEpisode = (tvShows: string[]): Episode | null => {
  const chosenShow = pickShow(tvShows);
  const showEpisodes = shows.find((show) => show.name === chosenShow)?.episodes;

  if (!showEpisodes) return null;

  const shuffleEpisodes = randomiseEpisodes(showEpisodes);
  const randomNumber = getRandomNumber(0, shuffleEpisodes.length - 1);
  return shuffleEpisodes[randomNumber];
};
