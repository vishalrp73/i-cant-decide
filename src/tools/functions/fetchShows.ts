import alwaysSunny from '../../output/always-sunny.json' assert { type:  "json" };
import americanDad from '../../output/american-dad.json' assert { type:  "json" };
import bobsBurgers from '../../output/bobs-burgers.json' assert { type:  "json" };
import clevelandShow from '../../output/cleveland-show.json' assert { type:  "json" };
import familyGuy from '../../output/family-guy.json' assert { type:  "json" };
import futurama from '../../output/futurama.json' assert { type:  "json" };
import kingOfTheHill from '../../output/koth.json' assert { type:  "json" };
import scrubs from '../../output/scrubs.json' assert { type:  "json" };
import simpsons from '../../output/simpsons.json' assert { type:  "json" };
import modernFamily from '../../output/modern-family.json' assert { type:  "json" };
import eightSimple from '../../output/8-simple.json' assert { type:  "json" };

import { Episode } from './types';

export const fetchShows = ( show: string ): Episode[] | null => {
    switch (show) {
        case 'American Dad':
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
        case 'King of the Hill':
            return kingOfTheHill;
        case 'Scrubs':
            return scrubs;
        case 'The Simpsons':
            return simpsons;
        case 'Modern Family':
            return modernFamily;
        case '8 Simple Rules':
            return eightSimple;
        default:
            return null;
    }
};