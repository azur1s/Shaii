import { tts } from "../../logic/logic.sakuria";
import { defineCommand } from "../../types";
import Discord from "discord.js";

export default defineCommand({
  name: "tts",
  description: "Turn a string into text to speech",
  requiresProcessing: false,
  execute: async (message) => {
    const attachment = new Discord.MessageAttachment(await tts(message.args.join(" ")), 'tts.wav');
    return {files: [attachment]};
  },
});
