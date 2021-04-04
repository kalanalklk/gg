const discord = require("discord.js");
const fs = require("fs");
const canvacord = require("canvacord");
const { Client } = require("discord.js-commando");

module.exports.run = async (client, msg, args) => {
    const member = msg.author;
    fs.readFile(`./files/${member.id}.file`, (err,data)=>{


        var xp = parseInt(data.toString() , 10);
        
    var level = xp / 100
    var levelf = level.toFixed(0)
    var levels = 0;
   
if(levelf > level){
    levels = levelf - 1;
}
if(levelf < level){
    levels = levelf;
}
var xpx = level - levels;
    const rank = new canvacord.Rank()
    .setAvatar(msg.author.displayAvatarURL({dynamic: false, format: 'png'}))
    .setCurrentXP(40)
    .setLevel(2)
    .setProgressBar('#FFA500',"COLOR")
    .setUsername(msg.author.username);
 rank.build().then(data =>{
     const attachment = new discord.MessageAttachment(data, "rank.png");
     msg.reply(attachment);
 });  
})
}
module.exports.config = {
    name: 'rank',
    aliases: ['level']
}