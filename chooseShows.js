import { exec } from 'child_process';
import inquirer from "inquirer";

import { getRandomNumber } from "./tools/functions/getRandomNumber.js";
import { randomiseEpisodes } from "./tools/functions/randomiseEpisodes.js";
import { fetchShow } from './tools/functions/fetchShow.js';


const chooseShow = (shows) => {
    const randomNumber = getRandomNumber(0, shows.length-1);
    return shows[randomNumber];
};

const fetchRandomEpisode = (shows) => {
    const chosenShow = chooseShow(shows);
    const fetchedEpisodes = fetchShow(chosenShow);
    const shuffleEpisodes = randomiseEpisodes(fetchedEpisodes);
    const randomNumber = getRandomNumber(0, shuffleEpisodes.length-1);
    return shuffleEpisodes[randomNumber];
};

inquirer.prompt([{
    type: 'checkbox',
    message: 'Select TV shows',
    name: 'tv_shows',
    choices: [
        new inquirer.Separator(' = The TV Shows = '),
        { name: "American Dad" },
        { name: "Bob's Burgers" },
        { name: "The Cleveland Show" },
        { name: "Family Guy" },
        { name: "Futurama" },
        { name: "It's Always Sunny in Philadelphia" },
        { name: "King of the Hill" },
        { name: "Scrubs" },
        { name: "The Simpsons" },
    ]
}]).then((answers) => {
    const tvShows = answers.tv_shows;
    const episode = fetchRandomEpisode(tvShows);

    const command = `open -a "Google Chrome" https://www.disneyplus.com/video/${episode.contentId}`;
    exec(command);


    // code for choosing and merging multiple shows into big array first
    // const data = [];
    // shows.forEach(show => {
    //     const fetched = fetchShow(show);
    //     data.push(...fetched);
    // });
    // const mergedData = [].concat(...data);
    // console.log(mergedData);

    // const randomiseEpisodes = randomiseEpisodes(mergedData);


}).catch(error => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
    } else {
        console.error(error);
    }
});