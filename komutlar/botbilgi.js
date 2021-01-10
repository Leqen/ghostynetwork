const Discord = require("discord.js"); 
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

   const say = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setTitle(':bar_chart: İstatistik;')
    .addField(':timer: Gecikme: ', client.ws.ping + 'ms')
    .addField(':construction_worker: Çalışma Süresi: ', `${duration}`)
    .addField(':desktop: Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .setFooter('Ghosty Network', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(say);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', 'bot-bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'bilgi-bot',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'istatistik [bot durumunu yazar]'
};