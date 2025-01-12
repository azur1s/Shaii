import logger from "./Logger.shaii";

interface IConfig {
  prefix: string;
  musicDirectory: string;
  token: string;
  mongo: string;
  chatLogChannel: string;
}

class Config {
  config!: IConfig;
  constructor() {
    try {
      var configJSON = require("../config.shaii.json");
    } catch (error) {
      logger.error("You don't have a config set, please fill in your config.shaii.json");
    }

    this.config = configJSON;
  }
}

const { config } = new Config();
export default config;
