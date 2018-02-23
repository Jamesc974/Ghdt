const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
var prefix = '!';

bot.on('ready', function () {
  bot.user.setPresence({ game: { name: 'Half.NorthLife.fr'}})
  console.log("Bot HNL Connecté est prés pour l'emploit!")
})

bot.on('message', message => {
  if (message.content === '!aide') {
    message.author.createDM().then(channel => {
      message.reply(`Regarde en message privé`);
        channel.send({embed: {
          color: 234123,
          icon_url: bot.user.avatarURL,
          description: `
Pour avoir les commandes c'est très simple
**!staff** Pour voir tous le staff !
**!addons** Pour avoir les addons du serveur.
**!site** Pour rejoindre le site.
**!regles** Pour voir les règles !
**!help** Pour voir les commandes du bot Musique !
**!cstaff** Pour voir les commandes staff
`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par Harf-NorthLife'
            }  
          }})
      })
  }
});

bot.on('message', message => {
  if (message.content === '!addons') {
      message.channel.send({embed: {
          color: 3447003,
          icon_url: bot.user.avatarURL,
          description: `
              **Harf-NorthLife**
**Télécharger les addons**
[Click Ici]()📁`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par Harf-NorthLife'
          }
      }});
  }
});


bot.on('message', message => {
  if (message.content === '!site') {
      message.channel.send({embed: {
          color: 3448263,
          icon_url: bot.user.avatarURL,
          description: `**LastWalls**
[Click Ici]()💻`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par Harf-NorthLife'
          }
      }});
  }
});

bot.on('message', message => {
  if (message.content === '!regles') {
      message.channel.send({embed: {
          color: 3447003,
          icon_url: bot.user.avatarURL,
          description: `
          Harf-NorthLife`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par Harf-NorthLife'
          }
      }});
  }
});

bot.on('message', message => {
  if (message.content === '!staff') {
    message.author.createDM().then(channel => {
      message.reply('Regarde en message privé');
        channel.send({embed: {
          color: 6547003,
          icon_url: bot.user.avatarURL,
          description: `Staff de Harf-NorthLife
_**Fondateur**_
- *TarKyo_159*
- *ReA974*
- *KoWine/Justin Climb*
_**Responsable Modèration**_
_**Modèrateur(ice)**_
_**Community Manageur**_              
_**Dèveloppeur**_
  **Recrutement ouvert**
[Click Ici]()💻`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par Harf-NorthLife'
          }
        }
      })
    })
}
});


bot.on('message', message => {
  if (message.content === '!commandstaff') {
    if (message.member.roles.find("name", "Perm-all")) {
      message.author.createDM().then(channel => {
        message.reply('Regarde en message privé');
          channel.send({embed: {
            color: 6547003,
            icon_url: bot.user.avatarURL,
            description: `
        **LastWalls**
!clear Le nombre de message à suprimer`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par Harf-NorthLife'
          }  
          }})
      })
    }
  }
});
// if (message.content === '!kick') {
    // if (!message.channel.permissionsFor(message.member).hasPermission("KICK_MEMBERS")){
      // message.reply("Tu n'a pas les permission")
    // }else{
      // var memberkick = message.mentions.users.first();
      // console.log(memberkick)
      // console.log(message.guild.member(memberkick).kickable)
      // if(!memberkick){
       // message.reply("L'utilisateur n'existe pas !")
      // }else{
        // if (!message.guild.member(memberkick).kickable){
          // message.reply("L'utilisateur ne peut pas étre Kick")
        // }else{
        // message.guild.member(memberkick).kick().then((member) => {
        // message.channel.send(`${member.displayname} a été Kick !`);
      // }).catch(() => {
        // message.channel.send("Kick Refusé !")
      // })
// }
// }}
// }
     
bot.on('message', message => {

  let msg = message.content.toUpperCase();
  let sender = message.author;
  let cont = message.content.slice(prefix.length).split(" ");
  let args = cont.slice(1);

  // Purge
  if (msg.startsWith(prefix + 'CLEAR')) {
      async function purge() {
          message.delete();

          if (message.member.roles.find("name", "Perm-All")) {
              message.channel.send('Il vous faut les perm: `Perm-All`');
              return;
          }

          if (isNaN(args[0])) {
              message.channel.send(`Utilisez s'il vous plaît un numéro \n Exemple: prefix + clear <Nombre>`);
              return;
          }

          const fetched = await message.channel.fetchMessages({limit: args[0]});
          message.channel.send(`Destruction de:  **${fetched.size}** message :ok_hand:`);
          console.log(`Destruction de: ${fetched.size} message Detruit`);

          message.channel.bulkDelete(fetched)
              .catch(error => message.channel.send(`Error: ${error}`));

      }

      purge();

  }
});



bot.on('guildMemberAdd', member => {
  member.guild.channels.find("name", "salon-bienvenue").send(`Bienvenue à toi **${member.user.username}** sur le serveur **Harf-NorthLife** :wink: !`);
    member.createDM().then(channel => {
      channel.send(`Bienvenue à toi ${member.user.username} sur le serveur **Harf-NorthLife - Roleplay**
      Pense bien à lire toutes les informations présentes dans **#Annonce** ou **#Regles** avant de continuer ta visite sur ce Discord !
      pour nous rejoindre c'est simple clique **ici** > https://
      Si jamais tu rencontres le moindre problème, n'hésite pas à nous le dire dans **#probleme**.
      **Bonne visite** :wink:`) 
    })
});

bot.on('guildMemberAdd', member => {
  console.log('User ' + member.username + 'à rejoins le serveur ')
  var role = member.guild.roles.find('name', '👔 Citoyen');
  member.addRole(role)
})

bot.on('guildMemberRemove', member => {
  member.guild.channels.find("name", "salon-bienvenue").send(
    `Au revoir **${member.user.username}** :hand_splayed:`)
})



bot.login(process.env.TOKEN)
