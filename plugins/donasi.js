let handler = async m => m.reply(`
╭─「 Donasi Contact 」
│ •  [0882-9186-5530][Panji|Dana]
│ •  [0895-3951-07887][Seno|Pulsa]
╰─
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
