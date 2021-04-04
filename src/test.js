require("dotenv").config();
const{Client, GuildMember, DiscordAPIError} = require('discord.js')
let discord = require("discord.js")
let commando = require("discord.js-commando");
const path = require('path')
const fs = require('fs');
const { IncomingMessage } = require("http");
const client = new Client();
client.on('ready' , async () =>{
    console.log('Immortal-manager is online');
    console.log('Immortal Manager 1.0 - Made by KaLaNaLK');
    console.log(`██╗███╗░░░███╗███╗░░░███╗░█████╗░██████╗░████████╗░█████╗░██╗░░░░░
                 ██║████╗░████║████╗░████║██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██║░░░░░
                 ██║██╔████╔██║██╔████╔██║██║░░██║██████╔╝░░░██║░░░███████║██║░░░░░
                 ██║██║╚██╔╝██║██║╚██╔╝██║██║░░██║██╔══██╗░░░██║░░░██╔══██║██║░░░░░
                 ██║██║░╚═╝░██║██║░╚═╝░██║╚█████╔╝██║░░██║░░░██║░░░██║░░██║███████╗
                 ╚═╝╚═╝░░░░░╚═╝╚═╝░░░░░╚═╝░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░╚═╝╚══════╝
    
    ███╗░░░███╗░█████╗░███╗░░██╗░█████╗░░██████╗░███████╗██████╗░
    ████╗░████║██╔══██╗████╗░██║██╔══██╗██╔════╝░██╔════╝██╔══██╗
    ██╔████╔██║███████║██╔██╗██║███████║██║░░██╗░█████╗░░██████╔╝
    ██║╚██╔╝██║██╔══██║██║╚████║██╔══██║██║░░╚██╗██╔══╝░░██╔══██╗
    ██║░╚═╝░██║██║░░██║██║░╚███║██║░░██║╚██████╔╝███████╗██║░░██║
    ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚═╝`)
   client.user.setPresence(
    {
        activity:{
name:'Immortal GamersLK',
type: 'WATCHING' 
        }
    }
   )

});
client.login("ODAzMjgxMjA3MTA1OTQ1NjEw.YA7f7A.4y73FqXblZEKFShcApakb2qN2EQ");
client.on('message', async(msg) => {

       
    
})
setInterval(function(){
    const immortalgamers = client.guilds.cache.get('677717294327267358');
    var valrole = immortalgamers.roles.cache.get('720840740942381087');
    var rainbowsixrole = immortalgamers.roles.cache.get('720839433066381332');
    var minecraft = immortalgamers.roles.cache.get('713270731311546450');
    var csgo = immortalgamers.roles.cache.get('752131807843188748')
    var gtav = immortalgamers.roles.cache.get('713038463754305536')
    var pubg = immortalgamers.roles.cache.get('713271447505862697')
    var lol = immortalgamers.roles.cache.get('752129534203134064')
    var apex = immortalgamers.roles.cache.get('752131319848239118')
    var rage = immortalgamers.roles.cache.get('813997034624778310')
    var sot = immortalgamers.roles.cache.get('794625909998485545')
    var braw = immortalgamers.roles.cache.get('752131447493623818')
    var satis = immortalgamers.roles.cache.get('814050669333708800')
    var truckers = immortalgamers.roles.cache.get('814052101906366494')
    const channelid = '814185421562183711';

   immortalgamers.members.cache.forEach(member => {
    
    if(member.presence.activities.toString() === 'VALORANT' && !member.roles.cache.has('720840740942381087')){
        member.roles.add(valrole);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${valrole.name} role because of playing VALORANT. play more games to get auto-roles`)
    }
    if(member.presence.activities.toString().includes(`Tom Clancy's Rainbow Six Siege`) && !member.roles.cache.has('720839433066381332')){
        member.roles.add(rainbowsixrole);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${rainbowsixrole.name} role because of playing Tom Clancy's Rainbow Six Siege. Play more games to get auto-roles`)
        
    }
    if(member.presence.activities.toString().includes('RAGE Multiplayer') && !member.roles.cache.has('813997034624778310')){
        member.roles.add(rage);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${rage.name} role because of playing RAGE Multiplayer. play more games to get auto-roles`)
        
    }
    if(member.presence.activities.toString() === 'Apex Legends' && !member.roles.cache.has('752131319848239118')){
        member.roles.add(apex);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${apex.name} role because of playing Apex Legends. play more games to get auto-roles`)
    }
    if(member.presence.activities.toString().includes('Counter-Strike: Global Offensive') && !member.roles.cache.has('752131807843188748')){
        member.roles.add(csgo);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${csgo.name} role because of playing Counter-Strike: Global Offensive. play more games to get auto-roles`)
    }
    if(member.presence.activities.toString().includes('League of Legends') && !member.roles.cache.has('752129534203134064')){
        member.roles.add(lol);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${lol.name} role because of playing League of Legends. play more games to get auto-roles`)
    }
    if(member.presence.activities.toString().includes(`PlayerUnknown's Battlegrounds`) || member.presence.activities.toString().includes(`PUBG LITE`) && !member.roles.cache.has('713271447505862697')){
        member.roles.add(pubg);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${pubg.name} role because of playing PlayerUnknown's Battlegrounds. play more games to get auto-roles`)
    }
    if(member.presence.activities.toString().includes(`Grand Theft Auto V`) && !member.roles.cache.has('713038463754305536')){
        member.roles.add(gtav);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${gtav.name} role because of playing Grand Theft Auto V. play more games to get auto-roles`)
    }
    if(member.presence.activities.toString().includes(`Minecraft`) && !member.roles.cache.has('713270731311546450')){
        member.roles.add(minecraft);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${minecraft.name} role because of playing Minecraft. play more games to get auto-roles`)
    }
    if(member.presence.activities.toString().includes(`Sea of Thieves`) && !member.roles.cache.has('794625909998485545')){
        member.roles.add(sot);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${sot.name} role because of playing Sea of Thieves. play more games to get auto-roles`)
    }
    if(member.presence.activities.toString().includes(`Brawlhalla`) && !member.roles.cache.has('752131447493623818')){
        member.roles.add(braw);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${braw.name} role because of playing Brawlhalla. play more games to get auto-roles`)
    }
    if(member.presence.activities.toString().includes(`Satisfactory`) && !member.roles.cache.has('814050669333708800')){
        member.roles.add(satis);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${satis.name} role because of playing Satisfactory. play more games to get auto-roles`)
    }
    if(member.presence.activities.toString().includes(`TruckersMP`) && !member.roles.cache.has('814052101906366494')){
        member.roles.add(truckers);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${truckers.name} role because of playing TruckersMP (ETS 2). play more games to get auto-roles`)
    }
   })
  }, 60000);