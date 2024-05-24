import { exec } from "child_process";
import { Episode } from "../types";

export const command = (episode: Episode) => {
  const command = `open -a "Google Chrome" https://disneyplus.com/video/${episode.contentId}`;
  exec(command);
  console.log("Opening", episode.title);
};
