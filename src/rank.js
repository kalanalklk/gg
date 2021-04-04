const discord = require("discord.js")
const levels = require("discord-xp");
const canvacord = require("canvacord");
module.exports.run = async (bot, msg, args) =>{
const target = msg.author;
const user1 = await levels.fetch(target.id, msg.guild.id);
const neededXp = levels.xpFor(parseInt(user1.level) + 1);
if(!user1) return msg.reply("You dont have Xp");
const rank = new canvacord.Rank()
.setAvatar(msg.author.displayAvatarURL({dynamic:false, format:"png"}))
.setCurrentXP(user1.xp)
.setRequiredXP(neededXp)
.setStatus(msg.author.presence.status)
.setProgressBar('#FFA500','COLOR')
.setUsername(msg.author.username)
.setDiscriminator('0001')
rank.build()
.then(data =>{
    const attachment = new discord.MessageAttachment(data, 'icon.png')
    msg.channel.send(attachment);
})
}
module.exports.config = {
    name: "rank",
    aliases: ["level"]
}
