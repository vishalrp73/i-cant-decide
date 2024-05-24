import inquirer from "inquirer";
import { prompt } from "./tools/functions/index.js";

let keepLoop: boolean = true;

const showMap = [
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
];

const main = async () => {
  const answers = await inquirer.prompt({
    type: "checkbox",
    message: "Select TV Shows",
    name: "tv_shows",
    choices: [new inquirer.Separator("--- TV Shows ---"), ...showMap],
  });

  const { tv_shows } = answers;
  prompt(tv_shows, keepLoop);
};

main();
