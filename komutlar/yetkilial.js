const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

 
    const say = new Discord.MessageEmbed()
       .setColor(message.guild.me.displayColor)
    .addField(`Yetkili Alım`, [`
      
    Yetkili Alım Kanalına Hoşgeldin!
    Yetkili Olmak İstiyorsan Formu Doldurup Bu Kanala Gönderebilirsin\n
    **FORM**
    __İsim:__
    __Yaş:__
    __Oyundaki Nick:__
    __Neden Sizi Seçmeliyiz:__
    __Günde Kaç Saat Aktifsiniz:__
    __Daha Önceden Deneyiminiz Varmı:__

   
     `])
   .setFooter('Ghosty Network Yetkili Alım', client.user.avatarURL());

    message.channel.send(say);

   }
   
exports.conf = {
     enabled: true,
     guildOnly: false,
     aliases: ['yform'],
     permLevel: 2
   };
   
   exports.help = {
     name: 'yetkilialm',
    description: 'yetkilial',
    }
    