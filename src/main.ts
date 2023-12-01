import { exec } from "child_process";
import inquirer from "inquirer";

import {
  Episode,
  getRandomNumber,
  randomiseEpisodes,
  fetchShows,
} from "./tools/functions/index.js";

const pickShow = (shows: string[]) => {
  const randomNumber = getRandomNumber(0, shows.length - 1);
  return shows[randomNumber];
};

const fetchRandomEpisode = (shows: string[]): Episode | null => {
  const chosenShow = pickShow(shows);
  const fetchedEpisodes = fetchShows(chosenShow);

  if (fetchedEpisodes) {
    const shuffleEpisodes = randomiseEpisodes(fetchedEpisodes);
    const randomNumber = getRandomNumber(0, shuffleEpisodes.length - 1);
    return shuffleEpisodes[randomNumber];
  }

  return null;
};

let keepLoop: boolean = true;

const prompt = (tvShows: string[]) => {
  const episode = fetchRandomEpisode(tvShows);

  if (episode === null) {
    console.log("no episode found");
    return;
  }

  console.log("Chosen episode", episode);

  if (!keepLoop) {
    const command = `open -a "Google Chrome" https://disneyplus.com/video/${episode.contentId}`;
    exec(command);
    console.log("opening", episode.title);
    return;
  }

  rollDice(tvShows, episode);
};

const rollDice = async (tvShows: string[], episode: Episode) => {
  const answers = await inquirer.prompt({
    type: "confirm",
    message: "Re-roll?",
    name: "choice",
  });

  const { choice } = answers;

  if (!choice) {
    keepLoop = false;
    const command = `open -a "Google Chrome" https://disneyplus.com/video/${episode.contentId}`;
    exec(command);
    console.log("opening", episode.title);
    return;
  }

  prompt(tvShows);
};

const main = async () => {
  const answers = await inquirer.prompt({
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
};

main();
