import { exec } from "child_process";
import inquirer from 'inquirer';
import { getRandomNumber, randomiseEpisodes, fetchShows } from './tools/functions/index.js';
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
let stopLoop = false;
const reRoll = (episode) => {
    inquirer.prompt({
        type: 'confirm',
        message: 'Re-roll?',
        name: 'choice'
    }).then(answers => {
        if (answers.choice) {
            prompt();
        }
        if (!answers.choice) {
            stopLoop = true;
            const command = `open -a "Google Chrome" https://disneyplus.com/video/${episode.contentId}`;
            exec(command);
        }
    });
};
const prompt = () => {
    inquirer.prompt({
        type: 'checkbox',
        message: "Select TV Shows",
        name: 'tv_shows',
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
            { name: "8 Simple Rules" }
        ]
    }).then(answers => {
        const tvShows = answers.tv_shows;
        const episode = fetchRandomEpisode(tvShows);
        if (episode === null) {
            console.log('No episode found');
            return;
        }
        console.log('Chosen Episode:', episode);
        if (!stopLoop) {
            reRoll(episode);
        }
        ;
        if (stopLoop) {
            const command = `open -a "Google Chrome" https://disneyplus.com/video/${episode.contentId}`;
            exec(command);
        }
    }).catch(error => {
        if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
        }
        else {
            console.error(error);
        }
    });
};
inquirer.prompt({
    type: 'checkbox',
    message: "Select TV Shows",
    name: 'tv_shows',
    loop: true,
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
        { name: "8 Simple Rules" }
    ]
}).then(answers => {
    const tvShows = answers.tv_shows;
    const episode = fetchRandomEpisode(tvShows);
    console.log("Chosen Episode:", episode);
    if (episode === null) {
        console.log('No episode found');
        return;
    }
    if (!stopLoop) {
        reRoll(episode);
    }
    ;
    if (stopLoop) {
        const command = `open -a "Google Chrome" https://disneyplus.com/video/${episode.contentId}`;
        exec(command);
    }
    ;
}).catch(error => {
    if (error.isTtyError) {
        console.log("Prompt couldn't be rendered in the current environment");
    }
    else {
        console.error(error);
    }
});
