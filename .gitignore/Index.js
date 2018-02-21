const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
var prefix = '!';

bot.on('ready', function () {
  bot.user.setPresence({ game: { name: 'LastWalls.fr'}})
  console.log("Bot LastWalls Connecté est prés pour l'emploit!")
})

bot.on('message', message => {
  if (message.content === '!aide') {
    message.author.createDM().then(channel => {
      message.reply(`Regarde en message privé`);
        channel.send({embed: {
          color: 234123,
          icon_url: bot.user.avatarURL,
          description: `
"Pour avoir les commandes c'est très simple"
"**!staff**" "Pour voir tous le staff !"
"**!installateur**" "Pour rejoindre le serveur."
"**!launcher**" Pour rejoindre le serveur."
"**!site**" Pour rejoindre le site."
"**!regles**" "Pour voir les règles !"
"**!help**" "Pour voir les commandes du bot Musique !"
"**!commandestaff**" Pour voir les commandes staff
`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par LastWalls'
            }  
          }})
      })
  }
});

bot.on('message', message => {
  if (message.content === '!installateur') {
      message.channel.send({embed: {
          color: 3447003,
          icon_url: bot.user.avatarURL,
          description: `
              **LastWalls**
**Télécharger le installateur**
[Click Ici](http://www.mediafire.com/file/28qg6zh6ur1b466/installer-LastWalls-Roleplay.jar)📁`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par LastWalls'
          }
      }});
  }
});

bot.on('message', message => {
  if (message.content === '!launcher') {
      message.channel.send({embed: {
          color: 3447003,
          icon_url: bot.user.avatarURL,
          description: `**LastWalls**
**Télécharger le launcher*
[Click Ici](https://cdn.discordapp.com/attachments/407594692700536833/408348468890042378/LastWalls.jar)📁`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par LastWalls'
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
[Click Ici](https://www.lastwalls.fr/)💻`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par LastWalls'
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
          LastWalls
Article 1 : Les joueurs sont égaux en droits sur le serveur, et ils auront le devoir de respecter les règles de ce dernier.
Article 2 : Toutes pubs par messages privés passant par l’intermédiaire de ce serveur seront sévèrement sanctionné.
Article 3 : Toutes diffamations sur d’autres joueurs du serveur ne sont pas acceptées. 
Article 4 : Tous propos homophobes, racistes ou portant atteinte au choix de religions ou aux origines d’un joueur sont punissables.
Article 5 : Toutes insultes, harcèlements ou propos portant atteinte à la dignités d’un joueur à son insu est punissable.
Article 6 : Tout abus de pouvoir de la part d’un membre du staff sur un joueur ou encore du chantage sur ce dernier et punissable (Adressez-vous à ses supérieurs).
Article 7 : Toutes propagations de contenues à caractères pornographiques ou pouvant heurter la sensibilité de certains n’est pas acceptées sur le serveur et sont punissables.
(Ces règles sont valables sur le serveur en jeu ainsi que sur le serveur Discord).`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par LastWalls'
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
          description: `Staff de LastWalls
_**Fondateur**_
- *TarKyo_159* !À ne pas contacter en cas de probléme
- *Esodyx*
- *ReA974*
- *KoWine/Justin Climb*
_**Responsable Modèration**_
- *Lieutenant de Botherel*
- *DACEY/Rusk David*
_**Modèrateur(ice)**_
         
- *B3arZko*
- *Arnouxs | Arnaud Carrera*
- *Lllyris*
- *Cobora*
_**Community Manageur**_
- *Alexidre*
_**Modèlisateur**_
- *Tortpold*
- *Kiozx*
- *_Celeno_*
              
_**Dèveloppeur**_
  **Recrutement ouvert**
[Click Ici](https://www.lastwalls.fr/forum/Recrutement-D%C3%A9vellopeur.9/)💻
           
_**Responsable Architecte**_
_**Architecte**_
- *SayCord*
  **Recrutement ouvert**
[Click Ici](https://www.lastwalls.fr/forum/Recrutement-Builder.8/)💻`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par LastWalls'
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
!supr Le nombre de message à suprimer`,
          timstamp: new Date(),
          footer: {
              icon_url: bot.user.avatarURL,
              text: 'Par LastWalls'
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
  if (msg.startsWith(prefix + 'SUPR')) {
      async function purge() {
          message.delete();

          if (message.member.roles.find("name", "Perm-All")) {
              message.channel.send('Il vous faut les perm: `Perm-All`');
              return;
          }

          if (isNaN(args[0])) {
              message.channel.send(`Utilisez s'il vous plaît un numéro \n Usage: prefix + clear <Nombre>`);
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
  member.guild.channels.find("name", "salon-bienvenue").send(`Bienvenue à toi **${member.user.username}** sur le serveur **LastWalls** :wink: !`);
    member.createDM().then(channel => {
      channel.send(`Bienvenue à toi ${member.user.username} sur le serveur **LastWalls - Roleplay**
      Pense bien à lire toutes les informations présentes dans **#Annonce** ou **#Regles** avant de continuer ta visite sur ce Discord !
      pour nous rejoindre c'est simple clique **ici** > https://www.lastwalls.fr/p/Nous%20rejoindre
      Si jamais tu rencontres le moindre problème, n'hésite pas à nous le dire dans **#general**.
      **Bonne visite** :wink:`) 
    })
});

bot.on('guildMemberAdd', member => {
  console.log('User ' + member.username + 'à rejoins le serveur ')
  var role = member.guild.roles.find('name', '👨🏻 Membre');
  member.addRole(role)
})

bot.on('guildMemberRemove', member => {
  member.guild.channels.find("name", "salon-bienvenue").send(
    `Au revoir **${member.user.username}** :hand_splayed:`)
})



bot.login('NDE1ODc2MzY1OTEzNDIzODc0.DW8SkA.2yIyPiGoRrABKUTBz3T8gatIrjY')
