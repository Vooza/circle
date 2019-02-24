const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTQ5MDM5MDk0MDA5NjkyMTYx.D1OGAA.YTJIdFsWty1m3FJpzekorC8d6rw');