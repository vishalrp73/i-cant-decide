/**
 * this file is JS because fuck the Disney API types
 */

import extract from './extract.json' assert { type: "json"};
import * as fs from 'fs';


const files = {
    americanDad: "../../output/american-dad.json",
    americanDadDos: "../../output/american-dad-dos.json",
    familyGuy: "../../output/family-guy.json",
    alwaysSunny: "../../output/always-sunny.json",
    bobsBurgers: "../../output/bobs-burgers.json",
    simpsons: "../../output/simpsons.json",
    futurama: "../../output/futurama.json",
    clevelandShow: "../../output/cleveland-show.json",
    kingOfTheHill: "../../output/koth.json",
    modernFamily: "../../output/modern-family-json",
    eightSimple: "../../output/8-simple.json",
    noop: null,
};

const targetFile = files.americanDadDos;

const videos = extract.data.DmcEpisodes.videos;
console.log('target file', targetFile);

let JSONfile = fs.readFileSync(targetFile, 'utf-8');
let episodes = JSON.parse(JSONfile);

videos.forEach(video => {
    episodes.push({  internalTitle: video.internalTitle, title: video.text.title.full.program.default.content ,contentId: video.contentId })
});

JSONfile = JSON.stringify(episodes);

fs.writeFileSync(targetFile, JSONfile, 'utf-8');

console.log('final episode written:', episodes.at(-1));