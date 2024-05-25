const { Client, Collection, Events, GatewayIntentBits } = require('discord.js')
const { Player } = require('discord-player')
// const { YouTubeExtractor, VimeoExtractor, ReverbnationExtractor, AttachmentExtractor, SoundCloudExtractor, AppleMusicExtractor } = require('@discord-player/extractor')
const config = require('./config.json')
const fs = require('node:fs')
const path = require('node:path')

const token = process.env.TOKEN
const client = new Client({ intents: [GatewayIntentBits.Guilds, 'GuildVoiceStates'] })

const foldersPath = path.join(__dirname, 'commands')
const commandFolders = fs.readdirSync(foldersPath)
client.commands = new Collection()

const player = new Player(client, {
  blockStreamFrom: [
    // YouTubeExtractor.identifier, VimeoExtractor.identifier, AppleMusicExtractor.identifier, SoundCloudExtractor.identifier, ReverbnationExtractor.identifier, AttachmentExtractor.identifier
  ],
  blockExtractors: [
    // YouTubeExtractor.identifier, VimeoExtractor.identifier, AppleMusicExtractor.identifier, SoundCloudExtractor.identifier, ReverbnationExtractor.identifier, AttachmentExtractor.identifier
  ]
})

const loadDefaultExt = async () => {
  // const extractors = ['SpotifyExtractor', 'AppleMusicExtractor', 'SoundCloudExtractor', 'YouTubeExtractor', 'VimeoExtractor', 'ReverbnationExtractor', 'AttachmentExtractor']
  const extractors = ['YouTubeExtractor']
  await player.extractors.loadDefault((ext) => !extractors.includes(ext))
}
loadDefaultExt()

player.events.on('playerStart', (queue, track) => {
  queue.metadata.channel.send(`Started playing **${track.title}**!`)
})

player.events.on('playerError', (e) => {
  console.log('error.')
})

for (const folder of commandFolders) {
  const commandsPath = path.join(foldersPath, folder)
  const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'))
  for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)
    if ('data' in command && 'execute' in command) {
      client.commands.set(command.data.name, command)
    } else {
      console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`)
    }
  }
}

client.once(Events.ClientReady, readyClient => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`)
})

client.on(Events.ClientReady, () => {
  client.user.setActivity(config.activity, { type: config.activityType })
})

client.on(Events.InteractionCreate, async interaction => {
  if (!interaction.isChatInputCommand()) return

  const command = interaction.client.commands.get(interaction.commandName)

  if (!command) {
    console.error(`No command matching ${interaction.commandName} was found.`)
    return
  }

  try {
    await command.execute(interaction)
  } catch (error) {
    console.error(error)
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true })
    } else {
      await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
    }
  }
})

client.login(token)
