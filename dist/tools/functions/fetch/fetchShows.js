import { shows } from "../../../output/index.js";
const { americanDad, bobsBurgers, clevelandShow, familyGuy, futurama, alwaysSunny, kingOfTheHill, scrubs, simpsons, modernFamily, eightSimple, } = shows;
export const fetchShows = (show) => {
    switch (show) {
        case "American Dad":
            return americanDad;
        case "Bob's Burgers":
            return bobsBurgers;
        case "The Cleveland Show":
            return clevelandShow;
        case "Family Guy":
            return familyGuy;
        case "Futurama":
            return futurama;
        case "It's Always Sunny in Philadelphia":
            return alwaysSunny;
        case "King of the Hill":
            return kingOfTheHill;
        case "Scrubs":
            return scrubs;
        case "The Simpsons":
            return simpsons;
        case "Modern Family":
            return modernFamily;
        case "8 Simple Rules":
            return eightSimple;
        default:
            return null;
    }
};
