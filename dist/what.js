var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import inquirer from "inquirer";
import { prompt } from "./tools/functions/prompt.js";
let keepLoop = true;
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const answers = yield inquirer.prompt({
        type: "checkbox",
        message: "Select TV Shows",
        name: "tv_shows",
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
            { name: "8 Simple Rules" },
        ],
    });
    const { tv_shows } = answers;
    prompt(tv_shows, keepLoop);
});
main();
