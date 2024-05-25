const { SlashCommandBuilder } = require('discord.js')
const { useQueue } = require('discord-player')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Stop the music.'),
  execute (interaction) {
    const queue = useQueue(interaction.guild.id)
    queue.delete()
    interaction.reply('Stopping player...')
  }
}
