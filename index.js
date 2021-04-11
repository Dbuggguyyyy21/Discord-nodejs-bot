const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send("Hello world"));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setActivity("Your text", { type: "PLAYING"}).catch(console.error);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong!');
  }
});

client.login(process.env.BOT_TOKEN);