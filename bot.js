const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
client.user.setGame(!help,"https://www.twitch.tv/NICKMERCS%22)
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log([Start] ${new Date()});
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(Logged in as * [ " ${client.user.username} " ]);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(servers! [ " ${client.guilds.size} " ]);
  console.log(Users! [ " ${client.users.size} " ]);
  console.log(channels! [ " ${client.channels.size} " ]);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
}); 
client.on("message", message => {
              var args = message.content.substring(prefix.length).split(" ");
              if (message.content.startsWith(prefix + "clear")) {
                  if(!message.channel.guild) return message.reply(':x: ليس لديك رتبة ادمن ');
     if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(':no_entry_sign:  MANAGE_MESSAGES ليس لديك رتبة ادمن او بريم :no_entry_sign: ');
          var msg;
          msg = parseInt(); ///KillerFox AlphaCodes

        message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error); ///KillerFox AlphaCodes
        message.channel.sendMessage("", {embed: { ///KillerFox AlphaCodes
          title: " :arrow_right: تــم مسح الشات :arrow_left: ",
          color: 0x06DF00,
          footer: { ///KillerFox AlphaCodes

          }
        }}).then(msg => {msg.delete(10000)});
                            }


  });
  client.on('message', msg => {

  if (msg.content === '!help') {

    msg.reply('!bc و اكتب الرسالة');

  }

});
