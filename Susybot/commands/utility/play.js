const { SlashCommandBuilder } = require('discord.js')
const { useMainPlayer } = require('discord-player')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Play a song.')
    .addStringOption(option =>
      option.setName('song')
        .setDescription('Song name.')
        .setRequired(true)
        .setMinLength(2)
        .setMaxLength(1000)),
  async execute (interaction) {
    const player = useMainPlayer()
    const channel = interaction.member.voice.channel
    if (!channel) return interaction.reply('You are not connected to a voice channel!')
    const query = interaction.options.getString('song', true)

    await interaction.deferReply()

    try {
      const { track } = await player.play(channel, query, {
        nodeOptions: {
          metadata: interaction
        }
      })

      return interaction.followUp(`**${track.title}** enqueued!`)
    } catch (e) {
      return interaction.followUp(`Something went wrong: ${e}`)
    }
  }
}
