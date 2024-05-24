import { exec } from "child_process";
export const command = (episode) => {
    const command = `open -a "Google Chrome" https://disneyplus.com/video/${episode.contentId}`;
    exec(command);
    console.log("Opening", episode.title);
};
