import { exec } from 'child_process';
import alwaysSunny from './tools/api-extracter/output/always-sunny.json' assert { type: "json" };
import americanDad from './tools/api-extracter/output/american-dad.json' assert { type: "json" };
import bobsBurgers from './tools/api-extracter/output/bobs-burgers.json' assert { type: "json" };
import clevelandShow from './tools/api-extracter/output/cleveland-show.json' assert { type: "json" };
import familyGuy from './tools/api-extracter/output/family-guy.json' assert { type: "json" };
import futurama from './tools/api-extracter/output/futurama.json' assert { type: "json" };
import kingOfTheHill from './tools/api-extracter/output/koth.json' assert { type: "json" };
import scrubs from './tools/api-extracter/output/scrubs.json' assert { type: "json" };
import simpsons from './tools/api-extracter/output/simpsons.json' assert { type: "json" };

import { getRandomNumber } from './tools/functions/getRandomNumber.js';
import { randomiseEpisodes } from './tools/functions/randomiseEpisodes.js';

const allShows = [alwaysSunny, americanDad, bobsBurgers, clevelandShow, familyGuy, futurama, kingOfTheHill, scrubs, simpsons];
const allEpisodes = [];

allShows.forEach(show => allEpisodes.push(...show));
const randomised = randomiseEpisodes(allEpisodes);
const randomNumber = getRandomNumber(allEpisodes.length);
const randomEpisode = randomised[randomNumber];
console.log(randomEpisode);

// const command = `open -a "Google Chrome" https://www.disneyplus.com/video/${randomEpisode.contentId}`;
// exec(command);