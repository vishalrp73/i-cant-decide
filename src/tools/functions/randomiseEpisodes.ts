import { Episode } from "./types";

export const randomiseEpisodes = (episodes: Episode[]): Episode[] => {
    for (let i = episodes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = episodes[i];
        episodes[i] = episodes[j];
        episodes[j] = temp;
      }
      return episodes;
};