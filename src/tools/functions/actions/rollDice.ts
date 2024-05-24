import inquirer from "inquirer";
import { Episode } from "../types";
import { command } from "../utils/index.js";
import { prompt } from "./prompt.js";

export const rollDice = async (
  tvShows: string[],
  episode: Episode,
  keepLoop: boolean
) => {
  const answers = await inquirer.prompt({
    type: "confirm",
    message: "Re-roll?",
    name: "choice",
  });

  const { choice } = answers;

  if (!choice) {
    keepLoop = false;
    command(episode);
    return;
  }

  prompt(tvShows, keepLoop);
};
