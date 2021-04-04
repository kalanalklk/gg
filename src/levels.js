const discord = require('discord.js')
const client = new discord.Client()
const canvacord = require('canvacord')
const {join} = require('path');
const disxp = require('discord-xp')
const fs = require('fs');
const { isFunction } = require('util');

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
disxp.setURL("")

client.on('message', async(msg) => {
    const server = client.guilds.cache.get('677717294327267358');
    if(!msg.guild)return;
    if(msg.author.bot)return;
const prefix = "$";
const args = msg.content.slice(prefix.length).trim().split(/+/g);
const command = args.shift().toLocaleLowerCase();
const rndxp = Math.floor(Math.random() * 9) + 1;
const levelup_true = await disxp.appendXp(msg.author.id, msg.guild.id, rndxp);
if(levelup_true){
    const user_user = await disxp.fetch(msg.author.id, msg.guild.id);
    msg.channel.send(`<@${msg.author.id}>has been leveled up ${user_user.level}`)
}
if(command === "myrank"){
    const user_user = await disxp.fetch(msg.author.id, msg.guild.id);
    msg.channel.send(user_user.level)
    
}
})
