const Discord = require('discord.js')
const request = require('request')
const client = new Discord.Client();

exports.run = async (client, message, args) => {

  var url = "https://mcapi.tc/?" + args[0] + "/json";
  let reason = args.slice(0).join(' ');
    request(url, function (err, response, body) {
        if (err) {
            console.log(err);
            return message.channel.send(":x: Hata! Sunucu bilgileri alınırken beklenmedik bir hatayla karşılaştık.");
        }
            body = JSON.parse(body);
            if (body.status) {
                message.channel.send(':x: Böyle Bir Sunucu Yok Veya Şuanda Kapalı Lütfen İp Adresini Kontrol Et')
            }
            if (body.players || body.players == "0") {
              const embed = new Discord.MessageEmbed()
                .setColor('RANDOM')
                .setTitle('Minecraft Sunucu İstatistikleri')
                .addField('Sunucu Ip;', '▸ ' + reason , true)
                .addField('Çevrimiçi; ', '▸ ' + body.players + '/' + body.max_players , true)
                .addField('Sürüm;', '▸ ' + body.version, true)
                .setImage("http://status.mclive.eu/"+ reason +"/"+ body.hostname +"/25565/banner.png")
                .setThumbnail("https://eu.mc-api.net/v3/server/favicon/" + body.hostname)
                .setFooter('Ghosty Network Sunucu İstatistik')
              message.channel.send({embed})


}
    });
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mcsunucu', 'mc sunucu', 'mcserver'],
  permLevel: 0,
  kategori: "genel"
};

exports.help = {
  name: 'mcsunucu',
  description: 'Minecraft sunucu bilgisini verir.',
  usage: 'mcserver <sunucu IP>'
}