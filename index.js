const Discord = require('discord.js');
const client = new Discord.Client();

require('dotenv').config();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => streamWarning(msg));

function streamWarning(msg) {
    if (msg.content === "!live") {
        try {
            client.guilds.cache.forEach((guild) => {
                var messageToSend = ':point_right: :pineapple: https://www.twitch.tv/reiabacaxi :pineapple: :point_left:'; //marcar pessoal depois
                guild.channels.cache.forEach(channel => {
                    if (channel.isText()) {
                        channel.send(messageToSend);
                    }
                });
            });
        } catch (err) {
            console.log(`Just got an error: ${err}!`);
        }
    }
}

client.login(process.env.TOKEN);