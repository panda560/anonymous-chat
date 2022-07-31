let handler = async m => m.reply(` 
╭─「 *Donasi* 」 
│ • Gopay : +62 812-7367-7810
│ • XL ke nomor Angga : +62 819-5929-3465
╰────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
