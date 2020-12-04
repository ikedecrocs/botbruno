const Discord = require('discord.js');
require('dotenv').config()
const client = new Discord.Client();

//quando ficar on, é chamado
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

//toda mensagem, é chamado
client.on('message', (msg) => streamWarning(msg));

// function streamWarning(msg) {
//     if (msg.content === '!live') {
//         var messageToSend = '@everyone :point_right: :pineapple: https://www.twitch.tv/reiabacaxi :pineapple: :point_left:';
//         //client.guilds.cache.forEach(guild => guild.defaultChannel.send(messageToSend));
//         client.guilds.cache.forEach(guild => console.log(guild.name))
//     }
// }

function streamWarning(msg) {
    if (msg.content === "!live") {
        try {
            client.guilds.cache.forEach((guild) => {
                var messageToSend = ':point_right: :pineapple: https://www.twitch.tv/reiabacaxi :pineapple: :point_left:'; //marcar pessoal depois
                //guild.channels.cache.forEach((channel) => channel.send(messageToSend));
                guild.channels.cache.forEach(channel => {
                    if (channel.isText()) {
                        channel.send(messageToSend);
                        
                    }
                    // console.log(channel.isText());
                });
                // let channel = guild.channels.cache.find(channel => channel.name === 'rei-abacaxi');
                // if (channel != undefined) {
                //     channel.send(messageToSend);
                // }
            });
        } catch (err) {
            console.log("error");
        }
    }
}

client.login(process.env.TOKEN);