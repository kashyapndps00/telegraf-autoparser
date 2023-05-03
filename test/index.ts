import { Telegraf } from "telegraf";
import autoParse from "../src/index";
import dotenv from "dotenv";

dotenv.config({
  path:"../.env"
});

if(!process.env.BOT_TOKEN){
    throw new Error("BotError: Please Provide BOT_TOKEN")
}
const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(autoParse("HTML"))

bot.on("message", async (ctx) => {
  ctx.reply("<b>This is a reply message</b>");
});

bot.launch();
