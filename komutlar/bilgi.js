const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

 
    const say = new Discord.MessageEmbed()
        .setColor(message.guild.me.displayColor)
    .setTitle(message.guild.name)
    .addField("» Sunucu Durumu:",  ":green_circle: Aktif")
    .addField("» IP:", "PLAY.GHOSTYNW.TK")
    .addField("» Sürüm:", "1.8.x")
    .addField("İyi Oyunlar !")
    .setFooter('Ghosty Network', client.user.avatarURL)
    .setTimestamp()

    message.channel.send(say);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mcbilgi'],
    permLevel: 0
};

exports.help = {
    name: 'sunucu bilgi',
    description: 'sbilgi',
 }