const extract = require('./extract.json');
const fs = require('fs');

const files = {
    americanDad: 'american-dad.json',
    familyGuy: 'family-guy.json',
    alwaysSunny: 'always-sunny.json',
    bobsBurgers: 'bobs-burgers.json',
    simpsons: 'simpsons.json',
    futurama: 'futurama.json',
    clevelandShow: 'cleveland-show.json',
    kingOfTheHill: 'koth.json',
    scrubs: 'scrubs.json',
    twentyFour: '24.json',
};

const targetFile = files.twentyFour;

const videos = extract.data.DmcEpisodes.videos;
let JSONfile = fs.readFileSync(targetFile, 'utf-8');
let episodes = JSON.parse(JSONfile);

videos.forEach(video => {
    episodes.push({  title: video.internalTitle, contentId: video.contentId })
});

JSONfile = JSON.stringify(episodes);

fs.writeFileSync(targetFile, JSONfile, "utf-8");