import { fetchRandomEpisode } from "./fetchRandomEpisode.js";
import { command } from "./command.js";
import { rollDice } from "./rollDice.js";
export const prompt = (tvShows, keepLoop) => {
    const episode = fetchRandomEpisode(tvShows);
    if (episode === null) {
        console.log("No episode found");
        return;
    }
    console.log("Chosen episode:", episode);
    if (!keepLoop) {
        command(episode);
        return;
    }
    rollDice(tvShows, episode, keepLoop);
};
