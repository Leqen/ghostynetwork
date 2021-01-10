const Discord = require("discord.js");
exports.run = function(client, message) {
  let membe = message.guild.member(message.author);
  var role = message.guild.roles.cache.find(
    role => role.id === "797817517027491872"//rol id unutmayalım :D
  );
  if (membe.roles.cache.has(role.id))
    return message.channel.send(
      "Zaten Güncelleme Rolüne Sahipsin! :x:"
    );
  membe.roles.add(role.id);
  const embed = new Discord.MessageEmbed()
    .setTitle(
      "Başarıyla Güncelleme Rolünü Aldın! :white_check_mark: "
    )
    .setColor("#2ab48e")
    .setDescription("");
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["güncelleme", "güncellemeler"],
  permLevel: 0
};
exports.help = {
  name: "güncelleme",
  description: "Güncelleme rolü",
  usage: "güncelleme"
};