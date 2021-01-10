const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if (!message.guild) return message.author.send('Bu Komutu Sadece Sunucularda Kulanabilirsiniz!');

 
    const say = new Discord.MessageEmbed()
       .setColor(message.guild.me.displayColor)
    .addField(`Kurallar`, [`
      
       :small_blue_diamond: Sunucu Sohbetini Kirletmek Yasaktır! (Büyük Harf Kullanımı - Spam - Harf Uzatma) Yasaktır!
       :small_blue_diamond: Hile Kullanımı Yasaktır!
       :small_blue_diamond: Her Türlü Küfür,Kısaltılmış Küfür,Hakaret,Argo Yasaktır!
       :small_blue_diamond: Reklam Yapmak Yasaktır! (DM'de Sayılır)
       :small_blue_diamond: Dış Ticaret Yasaktır!
       :small_blue_diamond: Bugdan Faydalanmak Yasaktır!
       :small_blue_diamond: Din, Irk ve Siyaset Konuşmak Yasaktır!
       :small_blue_diamond: Yetkilileri Oyalamak Yasaktır!
       :small_blue_diamond: Bot Komutları Sadece <#791931715996090388> Kanalında Kullanılmalıdır!
       :small_blue_diamond: <#782289457154883615> Kanalında Konuşmak, Bot Komut vb. Kullanmak Yasaktır!\n\n
       __**Sunucuya Katılan Her Üye İçin Kurallar Okunmuş Ve Kabul Edilmiş Sayılır**__
   
      `])
   .setFooter('Ghosty Network Kurallar', client.user.avatarURL());

    message.channel.send(say);

   }
   
exports.conf = {
     enabled: true,
     guildOnly: false,
     aliases: ['kurallar'],
     permLevel: 2
   };
   
   exports.help = {
     name: 'kurallar',
    description: 'kurallar',
    }
    