const discord = require('discord.js')
const client = new discord.Client()
const canvacord = require('canvacord')
const path = require('path');
const prefix = "$";
const fs = require('fs');
const ffmeg = require('ffmpeg');
const version = '1.6';
client.on('ready' , async () =>{
    console.log('Immortal-manager is online');
    console.log('Immortal Manager 1.6 - Made by KaLaNaLK');
    console.log(`
-----------------██╗███╗░░░███╗███╗░░░███╗░█████╗░██████╗░████████╗░█████╗░██╗░░░░░
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
    const guild = client.guilds.cache.get('677717294327267358');
    const servericon = guild.iconURL();
    const serverbanner = guild.bannerURL();
    const user = msg.author;
    const member = msg.member;
    const useravatar =  user.displayAvatarURL()
    const lobbychat = '677717294763212810';
    const photos = '760026888839888916';
    var permissionsmember = member.permissions.toArray();
    var permission = '';
    permissionsmember.forEach(permission1=>{permission = permission + '\n' + permission1})
    var memberrole = '';
    member.roles.cache.forEach(role=>{
        memberrole = memberrole + '<@' +  role + '>';
    })
    let rolemap = msg.guild.roles.cache
    .sort((a, b) => b.position - a.position)
    .map(r => r)
    .join(",");
    const infombed = new discord.MessageEmbed()
    .setTitle('`Immortal Gamers Info`')
    .setThumbnail(servericon)
    .setColor('RED')
    .setDescription('')
    .addFields({
        name:'Server Name : ' , value:guild.name.toString()},
        {name: 'Server ID : ', value:guild.id},
        {name: 'Member Count', value:guild.memberCount},
        {name: 'Members Online', value:guild.members.cache.filter(member => member.presence.status !== "offline").size},
        {name: 'Region' , value:guild.region},
        {name: 'Roles',value: guild.roles.cache.size},
        {name: 'Top Role', value: guild.roles.highest},
        {name: 'Afk Channel' , value:guild.afkChannel || 'No AFK Channel'},
        {name: 'Server Owner', value:guild.owner.displayName || 'IGS么𝐌𝐫_𝐒𝐢𝐧𝐡𝐚'},
        {name: 'Server Created Date' , value:new Date(guild.createdAt).toLocaleDateString()},
        {name: 'Server Created At', value: new Date(guild.createdTimestamp).toTimeString()},
        {name: 'Server Description', value:guild.description || 'No Description'},
        {name: 'Bot Info',value:':'},{name: 'Ping',value:`${client.ws.ping} ms`},{name: 'Version',value:version},{name: 'Prefix',value:prefix},{name: 'Server Banner ',value:':'})
        .setImage(serverbanner || 'https://i.ibb.co/ZG1XwTJ/papst-preview.png');
        const memberinfombed = new discord.MessageEmbed()
        .setTitle("Here's the information about `"+ `${member.displayName}` + "`")
        .setThumbnail(useravatar)
        .setColor('RANDOM')
        .setDescription('')
        .addFields({
            name:'User ID',value:user.id},
            {name:'Nickname' , value: member.nickname},
            {name: 'Tag', value:user.tag},
            {name: 'Joined Discord On', value: new Date(user.createdAt).toLocaleDateString()},
            {name: 'Joined Discord At', value: new Date(user.createdTimestamp).toLocaleTimeString()},
            {name: 'Joined Server On', value: new Date(member.joinedAt).toLocaleDateString()},
            {name: 'Joined Server At', value: new Date(member.joinedTimestamp).toLocaleTimeString()},
            {name: 'Status', value: user.presence.status},
            {name: 'Highest Role', value:member.roles.highest},
            {name: 'Roles Count', value: member.roles.cache.size + '\n(Use `$roles {mention_user}` command for view all roles)'},
            {name: 'Permission Count', value: permissionsmember.length +'\n(Use `$permissions {mention_user}` command for view all permissions)'},
            {name: 'Current Voice Channel',value:member.voice.channel  || 'Not Connected To the voice'}
        );
        const badwordembed = new discord.MessageEmbed()
        .setTitle('Bad Word Detected 🤬')
        .setColor('RED')
        .setDescription(`${msg.member.displayName}'s Message has been Deleted because It Contains Bad Word(s).\n Please Dont Use Bad Words.`)
        .setThumbnail('https://i.ibb.co/bJKD1j0/temp.png');
        const linkembed = new discord.MessageEmbed()
        .setTitle('Posting links is prohibited in this channel 👻')
        .setColor('RED')
        .setThumbnail('https://i.ibb.co/vqkFJbP/Http-Link-ss-1920.jpg')
        .setDescription('`' + msg.member.displayName + '`' + ` Posting links is prohibited in this channel 👾 \n Your message has been posted on <#782583758137982976>` );
        const inviteembed = new discord.MessageEmbed()
        .setTitle('Promoting Servers Is Prohibited')
        .setColor('RED')
        .setDescription(`${msg.member.displayName} , your message has been deleted because it contains a discord invite from an another server.\n please ask an admin for post this invite`)
        .setThumbnail('https://i.ibb.co/YWRK0Fg/noadv.jpg')
   
   
    switch(msg.content){
        case `${prefix}info`:
            msg.reply(infombed)
            return;
            case `${prefix}myinfo`:
            msg.reply(memberinfombed)
            return;
        
            
            
    }
    if(msg.content == `${prefix}ping`){
        msg.reply(`${client.ws.ping} ms 😆`);
        }
    if(msg.content.startsWith(`${prefix}roles`)){
const username = msg.content.replace(`${prefix}roles ` , '').replace('<@!' , '').replace('>','')
const user = guild.members.cache.get(username)
const rls = user.roles.cache.map(r => `${r}`).join('\n');

msg.reply(`${user.displayName} has following roles.\n${rls}`)
    }
    if(msg.content.startsWith(`${prefix}permissions`)){
        const username = msg.content.replace(`${prefix}permissions ` , '').replace('<@!' , '').replace('>','')
        const user = guild.members.cache.get(username)
        var permissionsmember = user.permissions.toArray();
        var permission = '';
        permissionsmember.forEach(permission1=>{permission = permission + '\n' + permission1})
        msg.reply(`${user.displayName} has following Permissions.\n${permission}`)
            }
    const badwords = ['hutta','huththa','pakaya','kariya','ponnaya','wesi','hukapan','hukahan','hukanawa','hukapn','hutto','huththo','pako','pakya','pakyo','hukhn','ponnayo','kariyo'];
    if(badwords.some(v => msg.content.includes(v))) {
        msg.delete();
msg.reply(badwordembed);
    }
    if(msg.content.includes('http://') || msg.content.includes('https://'))
    {
    if(msg.channel.id === lobbychat || msg.channel.id === photos)
    {
        if(!msg.content.includes('https://discord.gg/')){
        const linkchannel =  client.channels.cache.get('782583758137982976');
        linkchannel.send(`A message from ${msg.member.displayName} 🧐 \n\n ${msg.content}`);
        msg.delete();

        msg.reply(linkembed);
    }
    }
}
if(msg.content.includes('https://discord.gg/') && !msg.member.roles.cache.has('677720395989778463'))
{
    const waringadmin = new discord.MessageEmbed()
    .setTitle('For all admins 🤔 ,')
    .setDescription(`${msg.member.displayName} is trying to send a discord invite. And the message was temporarily deleted by me. \n If you agree to post the invite please copy the message content and post it on <#782583758137982976>`)
    .setColor('RED')
    .addFields({name:'Message Content',value:msg.content},
    {name:'Date' , value : new Date(msg.createdAt).toLocaleDateString()},
    {name: 'Time' , value: new Date(msg.createdTimestamp).toLocaleTimeString()},
    {name: 'Member ID' , value: msg.member.id},
    {name: 'Channel', value:msg.channel.name},
    {name: 'Channel Id' , value:msg.channel.id},
    {name: 'Message Status', value:'Deleted by Immortal Manager'});
   
    msg.delete();
msg.channel.send(inviteembed);
guild.members.cache.forEach(member1=>{if(member1.roles.cache.has('677720395989778463')){
    member1.send(waringadmin);
}})
}
var run = '0️⃣';
    var ll = '1️⃣';
    var awk = '2️⃣';
    var Quack = '3️⃣';
    var sad = '4️⃣';
    var yous = '5️⃣';
    var musicm = '6️⃣';
    var s1 = '😅';
    var s2 = '😆';
    var s3 = '🤬';
    var s4 = '👺';
    var s5 = '😂';
    var s6 = '😁';
    var s7 = '😈';
    var s8 = '👹';
    var leaveemoji = '🔇';
    var leaveemoji2 = '❌';
const sounddb = new discord.MessageEmbed()
    .setTitle('Immortal Manager - Sound Effects DB 1.0')
    .setDescription('React the message to play following sound effects')
    .setColor('GREEN')
    .setThumbnail('https://i.ibb.co/6ZLmGB6/free-sound-effects.jpg')
    .addFields({
        name:run , value:'Run Sound Effect'
    },
    {name:ll , value:'Laughing lion'},{name:awk , value:'AWKWARD Silence'},{name:Quack , value:'Quack'},{name:sad , value:'Sad Trombone'}, {name:yous , value:'You Serious?'}, {name:musicm , value:'Music Meme'},
    {name:s1 , value:'Sinhala/p^k^k obala'}, {name:s2 , value:'Sinhala/kauda katha karanne'}, {name:s3 , value:'Sinhala/wasudewa'}, {name:s4 , value:'Sinhala/haiyo'}, {name:s5 , value:'Sinhala/man mara kar^yek'},
    {name:s6 , value:'Sinhala/kasippu gahalada'},{name:s7 , value:'Sinhala/kiyla kapapan'},{name:s8 , value:'Sinhala/marisi danna epa'});
if(msg.content === '$play' && msg.channel.id === '818203345146871838'){
    
if(msg.channel.id === '818203345146871838'){
    msg.channel.messages.fetch().then((oldmessages) => {if(oldmessages !== null){msg.channel.bulkDelete(oldmessages)}})
}
    
    let sounddbreact = await msg.channel.send(sounddb);
    
    sounddbreact.react(run);
    sounddbreact.react(ll);
    sounddbreact.react(awk);
    sounddbreact.react(Quack);
    sounddbreact.react(sad);
    sounddbreact.react(yous);
    sounddbreact.react(musicm);
    sounddbreact.react(s1);
    sounddbreact.react(s2);
    sounddbreact.react(s3);
    sounddbreact.react(s4);
    sounddbreact.react(s5);
    sounddbreact.react(s6);
    sounddbreact.react(s7);
    sounddbreact.react(s8);
    sounddbreact.react(leaveemoji);
    sounddbreact.react(leaveemoji2);
    const bot = guild.members.cache.get('803281207105945610');
client.on('messageReactionAdd', async (reaction , ruser)=>{
    var soundeffect = '';
    if(!ruser.bot){
    switch (reaction.emoji.name){
        case run:soundeffect = 'run.mp3'
        break;
        case ll:soundeffect = 'll.mp3';
        break;
            case awk:soundeffect = 'awk.mp3';
            break;
                case Quack:soundeffect = 'quack.mp3';
                break;
                    case sad:soundeffect = 'sad.mp3';
                    break;
                        case yous:soundeffect = 'yous.mp3';
                        break;
                            case musicm:soundeffect = 'musicm.mp3';
                            break;
                                case s1:soundeffect = 's1.wav';
                                break;
                                    case s2:soundeffect = 's2.wav';
                                    break;
                                        case s3:soundeffect = 's3.wav';
                                        break;
                                            case s4:soundeffect = 's4.wav';
                                            break;
                                                case s5:soundeffect = 's5.wav';
                                                break;
                                                    case s6:soundeffect = 's6.wav';
                                                    break;
                                                        case s7:soundeffect = 's7.wav';
                                                        break;
                                                            case s8:soundeffect = 's8.wav';
                                                            break;
                                                            case leaveemoji:
                                                                
                                                        if(bot.voice.channel && guild.members.cache.get(ruser.id).permissions.has('ADMINISTRATOR')){
                                                            
                                                            if(bot.voice.mute === false){
                                                                bot.voice.setMute(true,'no reason :)')
                                                                console.log(`${ruser.tag} muted the bot`)
                                                            }
                                                            else
                                                            {
                                                                bot.voice.setMute(false,'no reason :)')
                                                            console.log(`${ruser.tag} unmuted the bot`)
                                                        }
                                                        }
                                                                break;
                                                                case leaveemoji2:if(bot.voice.channel != null){
                                                                   
                                                                }
                                                            break;
    }
    
    var VC = msg.member.voice.channel;
    if (!VC)
        return msg.reply("You can't use this command without connecting to a voice channel.")
const connection = await VC.join();

var path1 = './im_sounddb-sounds/' + soundeffect;

        const dispatcher = connection.play(path1);
dispatcher.setVolume(5/5);
        dispatcher.on('error', err =>{console.log(err)});
        dispatcher.on("end", end => {dispatcher.setVolume(0/5)});
    
 }
   
    
})
    
 
}
else if(msg.content === '$play' && msg.channel.id !=='818203345146871838'){
    msg.reply('Your are not in correct text channel. Use this command in <#818203345146871838>')
}
if(msg.content === '$restart_bot'){
    if(msg.member.roles.cache.has('677720395989778463')){
        
    }
else{
    msg.reply('You dont have permission to use this command')
    
}
}

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
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${valrole.name} role because of playing VALORANT. play more games to get auto-roles 🥳`)
    }
    if(member.presence.activities.toString().includes(`Tom Clancy's Rainbow Six Siege`) && !member.roles.cache.has('720839433066381332')){
        member.roles.add(rainbowsixrole);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${rainbowsixrole.name} role because of playing Tom Clancy's Rainbow Six Siege. Play more games to get auto-roles 🥳`)
        
    }
    if(member.presence.activities.toString().includes('RAGE Multiplayer') && !member.roles.cache.has('813997034624778310')){
        member.roles.add(rage);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${rage.name} role because of playing RAGE Multiplayer. play more games to get auto-roles 🥳`)
        
    }
    if(member.presence.activities.toString() === 'Apex Legends' && !member.roles.cache.has('752131319848239118')){
        member.roles.add(apex);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${apex.name} role because of playing Apex Legends. play more games to get auto-roles 🥳`)
    }
    if(member.presence.activities.toString().includes('Counter-Strike: Global Offensive') && !member.roles.cache.has('752131807843188748')){
        member.roles.add(csgo);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${csgo.name} role because of playing Counter-Strike: Global Offensive. play more games to get auto-roles 🥳`)
    }
    if(member.presence.activities.toString().includes('League of Legends') && !member.roles.cache.has('752129534203134064')){
        member.roles.add(lol);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${lol.name} role because of playing League of Legends. play more games to get auto-roles 🥳`)
    }
    if(member.presence.activities.toString().includes(`PlayerUnknown's Battlegrounds`) || member.presence.activities.toString().includes(`PUBG LITE`) && !member.roles.cache.has('713271447505862697')){
        member.roles.add(pubg);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${pubg.name} role because of playing PlayerUnknown's Battlegrounds. play more games to get auto-roles 🥳`)
    }
    if(member.presence.activities.toString().includes(`Grand Theft Auto V`) && !member.roles.cache.has('713038463754305536')){
        member.roles.add(gtav);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${gtav.name} role because of playing Grand Theft Auto V. play more games to get auto-roles 🥳`)
    }
    if(member.presence.activities.toString().includes(`Minecraft`) && !member.roles.cache.has('713270731311546450')){
        member.roles.add(minecraft);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${minecraft.name} role because of playing Minecraft. play more games to get auto-roles 🥳`)
    }
    if(member.presence.activities.toString().includes(`Sea of Thieves`) && !member.roles.cache.has('794625909998485545')){
        member.roles.add(sot);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${sot.name} role because of playing Sea of Thieves. play more games to get auto-roles 🥳`)
    }
    if(member.presence.activities.toString().includes(`Brawlhalla`) && !member.roles.cache.has('752131447493623818')){
        member.roles.add(braw);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${braw.name} role because of playing Brawlhalla. play more games to get auto-roles 🥳`)
    }
    if(member.presence.activities.toString().includes(`Satisfactory`) && !member.roles.cache.has('814050669333708800')){
        member.roles.add(satis);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${satis.name} role because of playing Satisfactory. play more games to get auto-roles 🥳`)
    }
    if(member.presence.activities.toString().includes(`TruckersMP`) && !member.roles.cache.has('814052101906366494')){
        member.roles.add(truckers);
    client.channels.cache.get(channelid).send(`<@${member.id}> was promoted to ${truckers.name} role because of playing TruckersMP (ETS 2). play more games to get auto-roles 🥳`)
    }
    
   })
  }, 60000);

