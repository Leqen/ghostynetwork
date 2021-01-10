const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

 
    const say = new Discord.MessageEmbed()
       .setColor(message.guild.me.displayColor)
    .addField(`Ceza Süreleri`, [`
      
       :small_blue_diamond: Chat Kirletme -> **30 Dakika (Uyarının Ardından)**
       :small_blue_diamond: Küfür,Argo,Kısaltma Küfür -> **5 Saat Mute**
       :small_blue_diamond: Yetkili Küfür,Hakaret -> **3 Gün Mute**
       :small_blue_diamond: Reklam Yapmak -> **Sınırsız Uzaklaştırma**
       :small_blue_diamond: Dış Ticaret -> **Sınırsız Uzaklaştırma**
       :small_blue_diamond: Sunucu Aşağılama,Kötüleme,Küfür -> **1 Hafta Mute**
       :small_blue_diamond: Milli,Dini ve Siyasi Değerleri Aşağılama,Hakaret,Küfür -> **1Hafta - 1 Ay Mute**
       :small_blue_diamond: Sunucuda Bug Bulup,Bunu Yetkililere Bildirmeden Kullanmak -> **Sınırsız Uzaklaştırma** 
   
      `])
   .setFooter('Ghosty Network Ceza', client.user.avatarURL());

    message.channel.send(say);

   }
   
exports.conf = {
     enabled: true,
     guildOnly: false,
     aliases: ['ceza'],
     permLevel: 2
   };
   
   exports.help = {
     name: 'ceza',
    description: 'ceza',
    }
    