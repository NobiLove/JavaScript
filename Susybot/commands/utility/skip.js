const { SlashCommandBuilder } = require('discord.js')
const { useQueue } = require('discord-player')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('skip')
    .setDescription('Skip the current song.'),
  execute (interaction) {
    const queue = useQueue(interaction.guild.id)
    queue.node.skip()
    interaction.reply('Skipping song...')
  }
}
