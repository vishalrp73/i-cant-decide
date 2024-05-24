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
import { prompt } from "./tools/functions/index.js";
import { shows } from "./output/index.js";
let keepLoop = true;
const showNames = shows.map((show) => show.name);
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const answers = yield inquirer.prompt({
        type: "checkbox",
        message: "Select TV Shows",
        name: "tv_shows",
        choices: [new inquirer.Separator("--- TV Shows ---"), ...showNames],
    });
    const { tv_shows } = answers;
    prompt(tv_shows, keepLoop);
});
main();
