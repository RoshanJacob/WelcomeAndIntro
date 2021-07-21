console.log("Wheeee!");

require("dotenv").config();

const Discord = require("discord.js");

const client = new Discord.Client();

client.login(process.env.BTOKEN);

client.on("ready", () => {
  console.log("Ready to start!");

  console.log(`Logged terminal as ${client.user.tag}`);
});

const gotIt = require("./CommandHandler/commandHandler");
client.on("message", gotIt);
