import alwaysSunny from '../api-extracter/output/always-sunny.json' assert { type: "json" };
import americanDad from '../api-extracter/output/american-dad.json' assert { type: "json" };
import bobsBurgers from '../api-extracter/output/bobs-burgers.json' assert { type: "json" };
import clevelandShow from '../api-extracter/output/cleveland-show.json' assert { type: "json" };
import familyGuy from '../api-extracter/output/family-guy.json' assert { type: "json" };
import futurama from '../api-extracter/output/futurama.json' assert { type: "json" };
import kingOfTheHill from '../api-extracter/output/koth.json' assert { type: "json" };
import scrubs from '../api-extracter/output/scrubs.json' assert { type: "json" };
import simpsons from '../api-extracter/output/simpsons.json' assert { type: "json" };

export const fetchShow = ( show ) => {
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
        default:
            return null;
    }
};