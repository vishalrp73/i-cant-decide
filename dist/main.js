var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
import { getRandomNumber, randomiseEpisodes, fetchShows, } from "./tools/functions/index.js";
const pickShow = (shows) => {
    const randomNumber = getRandomNumber(0, shows.length - 1);
    return shows[randomNumber];
};
const fetchRandomEpisode = (shows) => {
    const chosenShow = pickShow(shows);
    const fetchedEpisodes = fetchShows(chosenShow);
    if (fetchedEpisodes) {
        const shuffleEpisodes = randomiseEpisodes(fetchedEpisodes);
        const randomNumber = getRandomNumber(0, shuffleEpisodes.length - 1);
        return shuffleEpisodes[randomNumber];
    }
    return null;
};
let keepLoop = true;
const prompt = (tvShows) => {
    const episode = fetchRandomEpisode(tvShows);
    if (episode === null) {
        console.log("no episode found");
        return;
    }
    console.log("Chosen episode", episode);
    if (!keepLoop) {
        const command = `open -a "Google Chrome" https://disneyplus.com/video/${episode.contentId}`;
        // exec(command);
        console.log("opening", episode.title);
        return;
    }
    rollDice(tvShows, episode);
};
const rollDice = (tvShows, episode) => __awaiter(void 0, void 0, void 0, function* () {
    const answers = yield inquirer.prompt({
        type: "confirm",
        message: "Re-roll?",
        name: "choice",
    });
    const { choice } = answers;
    console.log(choice);
    if (!choice) {
        keepLoop = false;
        const command = `open -a "Google Chrome" https://disneyplus.com/video/${episode.contentId}`;
        //     // exec(command);
        console.log("opening", episode.title);
        return;
    }
    prompt(tvShows);
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const answers = yield inquirer.prompt({
        type: "checkbox",
        message: "Select TV Shows",
        name: "tv_shows",
        choices: [
            new inquirer.Separator("--- TV Shows ---"),
            { name: "American Dad" },
            { name: "Bob's Burgers" },
            { name: "The Cleveland Show" },
            { name: "Family Guy" },
            { name: "Futurama" },
            { name: "It's Always Sunny in Philadelphia" },
            { name: "King of the Hill" },
            { name: "Scrubs" },
            { name: "The Simpsons" },
            { name: "Modern Family" },
            { name: "8 Simple Rules" },
        ],
    });
    const { tv_shows } = answers;
    prompt(tv_shows);
    //   const episode = fetchRandomEpisode(tv_shows);
    //   console.log("Chosen episode:", episode);
    //   if (episode === null) {
    //     console.log("No episode found");
    //     return;
    //   }
    //   if (!keepLoop) {
    //     const command = `open -a "Google Chrome" https://disneyplus.com/video/${episode.contentId}`;
    //     // exec(command);
    //     console.log("opening", episode.title);
    //     return;
    //   }
    //   console.log(1);
    //   rollDice(tv_shows);
});
main();
