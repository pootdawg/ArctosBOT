const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json'); //fetching and saving token
const cmd = require('./commands.js');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login(auth.token);

//Start

