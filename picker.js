const { exec } = require('child_process');
const alwaysSunny = require('./bad-files/always-sunny.json');
const americanDad = require('./bad-files/american-dad.json');
const bobsBurgers = require('./bad-files/bobs-burgers.json');
const clevelandShow = require('./bad-files/cleveland-show.json');
const familyGuy = require('./bad-files/family-guy.json');
const futurama = require('./bad-files/futurama.json');
const kingOfTheHill = require('./bad-files/koth.json');
const scrubs = require('./bad-files/scrubs.json');
const simpsons = require('./bad-files/simpsons.json');

const allShows = [alwaysSunny, americanDad, bobsBurgers, clevelandShow, familyGuy, futurama, kingOfTheHill, scrubs, simpsons];
const allEpisodes = [];

const randomiseEpisodes = (episodes) => {
    for (let i = episodes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = episodes[i];
        episodes[i] = episodes[j];
        episodes[j] = temp;
      }
      return episodes;
};

const getRandomNumber = (length) => {
    const randomNumber = Math.random() * length;
    return Math.floor(randomNumber);
}

allShows.forEach(show => allEpisodes.push(...show));
const randomised = randomiseEpisodes(allEpisodes);
const randomNumber = getRandomNumber(allEpisodes.length);
const randomEpisode = randomised[randomNumber];
console.log(randomEpisode);

// const command = `open -a "Google Chrome" https://www.disneyplus.com/video/${randomEpisode.contentId}`;
// exec(command);