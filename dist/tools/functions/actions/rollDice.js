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
import { command } from "../utils/index.js";
import { prompt } from "./prompt.js";
export const rollDice = (tvShows, episode, keepLoop) => __awaiter(void 0, void 0, void 0, function* () {
    const answers = yield inquirer.prompt({
        type: "confirm",
        message: "Re-roll?",
        name: "choice",
    });
    const { choice } = answers;
    if (!choice) {
        keepLoop = false;
        command(episode);
        return;
    }
    prompt(tvShows, keepLoop);
});
