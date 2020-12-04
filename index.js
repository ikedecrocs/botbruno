require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	abacaxiStreaming(false);
});

// Quando o Bot está pronto para ser usado, ele chama a sua função principal.
client.on('message', (msg) => streamWarning(msg));

function abacaxiStreaming(newState) {
	if (newState) {
		client.user.setActivity('reiabacaxi', {
			type: 'STREAMING',
			url: 'https://www.twitch.tv/reiabacaxi',
		});
	} else {
		client.user.setActivity(', enquanto o reiabacaxi não está em live!', {
			type: 'PLAYING',
		});
	}
}

function streamWarning(msg) {
	//O número gigante é o ID do Bruno no banco de dados do Discord.
	// Quando o DEBUG terminar, colocar mais essa condição no if abaixo:
	
	if (msg.author.id === '277220094587830273' && !msg.author.bot) {
		if (msg.content === '!live') {
			abacaxiStreaming(true);
			try {
				client.guilds.cache.forEach((guild) => {
					var messageToSend =
						'**Estou ao vivo na Twitch!**\n:point_right: :pineapple: https://www.twitch.tv/reiabacaxi :pineapple: :point_left:';
					guild.channels.cache.forEach((channel) => {
						if (channel.isText()) {
							channel.send(messageToSend).catch((error) => {
								console.log(
									`Error trying to send message on ${channel.name}, ${error}!`
								);
								return;
							});
						}
					});
				});
			} catch (error) {
				console.log(`Fatal Error: ${err}!`);
			}
		}

		if (msg.content === '!endlive') {
			abacaxiStreaming(false);
			msg.reply(
				'É u-uma pena, grande se-senpai :pineapple: reiabacaxi :pineapple: ! Espero que o senhor me use amanhã de novo! Nyaa~ (^///^)'
			);
		}
	}
}

client.login(process.env.TOKEN);
