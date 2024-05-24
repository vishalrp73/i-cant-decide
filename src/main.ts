import inquirer from "inquirer";
import { shows } from "./output/index.js";
import { prompt } from "./tools/functions/index.js";

let keepLoop: boolean = true;

const showNames = shows.map((show) => show.name);

const main = async () => {
  const answers = await inquirer.prompt({
    type: "checkbox",
    message: "Select TV Shows",
    name: "tv_shows",
    choices: [new inquirer.Separator("--- TV Shows ---"), ...showNames],
  });

  const { tv_shows } = answers;
  prompt(tv_shows, keepLoop);
};

main();
