const { MessageEmbed } = require('discord.js');
const Data = require('../../structures/Data.js');

class Embeds {

  // Constructor.
  constructor() {}

  // CONSTANTES //
  embedColor  = "#c6d9e3";
  embedFooter = "Developed by DanLop#6659 | Version: " + Data.version;

  // >>>>>>>>>>>>>>>>>>>>> ERRORES <<<<<<<<<<<<<<<<<<<<<< //

  // Error interno.
  internalError = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "An internal error ocurred while trying to update the bot's settings." )
    .setFooter({ text: "For detailed help join our Support Server" })
    .setColor( "RED" );

  // Comando premium.
  premiumCommand = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "You can only use this command on ` Upgraded Level 3 Servers ` or by being a ` Patreon ` supporter.\n\nWant to support? ❤" )
    .setColor( "RED" );

  // Permisos de Categoría.
  categoryPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription(
      "Looks like <@828540208743710741> does not have access to the category recieved. Be sure the ` VIEW_CHANNEL ` " +
      "and ` MANAGE_CHANNELS ` permissions are both allowed for the bot."
    ).setColor( "RED" );

  // Rol de host no configurado.
  noHostBinded = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "There is no **host role** configured within the server." )
    .setColor( "RED" );

  // Host activo en sala.
  activeHost =  new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "The channel's **host** is still connected to the channel." )
    .setColor( "RED" );

  // Sin permisos de host.
  hostPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "You must have **host permissions** to do that." )
    .setColor( "RED" );

  // Usuario no conectado a voz.
  notInVoiceChannel = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Target user is not connected to any voice channel." )
    .setColor( "RED" );

  // Usuario en cooldown.
  activeCooldown = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "You have to wait a moment before doing this." )
    .setColor( "RED" );

  // Argumentos inválidos.
  invalidArguments = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "One of the arguments recieved is invalid." )
    .setColor( "RED" );

  // Generador invalido
  invalidGenerator = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Channel selected is not a **Channel Generator**." )
    .setColor( "RED" );

  // Nada encontrado.
  notFound = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "This place looks quite empty..." )
    .setColor( "RED" );

  // Limite alcanzado.
  limitReached = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription(
      "Limit reached!\n" +
      "Try to free some space up or upgrade this server via **Patreon** ❤."
    ).setColor( "RED" )

  // Configurado anteriormente.
  alreadyConfigured = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "This is already configured this way." )
    .setColor( "RED" );

  // Característica deshabilitada
  featureDisabled = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription(
      "This feature is disabled.\n" +
      "Ask for an **administrator** or a **server manager** to enable it."
    ).setColor( "RED" );

  // Prohibido
  forbidden = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "This cannot be done!" )
    .setColor( "RED" );

  // No activo en Patreon.
  noPatreonSupporter = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "You must be a **Patreon** supporter for this." )
    .setColor( "RED" );

  // Comando específico de Guild.
  guildOnly = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "This can only be done into a Discord server." )
    .setColor( "RED" );

  // Permiso de gestión de mensajes
  manageMessagesPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Make sure <@828540208743710741> has ` MANAGE_MESSAGES ` permissions for this to work." )
    .setColor( "RED" );

  // Permisos de canales de texto.
  textPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Make sure <@828540208743710741> has ` VIEW_CHANNEL `, ` SEND_MESSAGES ` and ` READ_MESSAGE_HISTORY ` permissions for this to work." )
    .setColor( "RED" );

  // Permisos de gestión de servidor.
  managementPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "You must have ` MANAGE_SERVER ` permission for executing this." )
    .setColor( "RED" );

  // Permisos de ensordecer usuarios.
  deafenPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Make sure both you and <@828540208743710741> have the ` DEAFEN_MEMBERS ` permission for this to work." )
    .setColor( "RED" );

  // Permisos de silenciar usuarios.
  mutePermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Make sure both you and <@828540208743710741> have the ` MUTE_MEMBERS ` permission for this to work." )
    .setColor( "RED" );

  // Permisos para mover usuarios.
  movePermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Make sure both you and <@828540208743710741> have the ` MOVE_MEMBERS ` permission for this to work." )
    .setColor( "RED" );

  // Permisos de gestionar roles.
  manageRolesPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Make sure both you and <@828540208743710741> have the ` MANAGE_ROLES ` permission for this to work." )
    .setColor( "RED" );

  // Permisos para gestionar canales.
  manageChannelsPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Make sure both you and <@828540208743710741> have the ` MANAGE_CHANNELS ` permission for this to work." )
    .setColor( "RED" );

  // Jerarquía de roles.
  roleHierarchy = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription(
      "The role you are trying to bind is in a higher hierarchy than <@828540208743710741> highest role. " +
      "This means the bot won't be able to grant nor revoke this role, no matter what.\n\n" +
      "To fix this, give <@828540208743710741> a higher role in the roles hierarchy."
    ).setColor( "RED" );

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MENSAJES ESTÁTICOS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

  // Lista de voces
  voicesList = new MessageEmbed()
    .setTitle( "🔊 | Supported Voices" )
    .setDescription(
      "Select any of the following voices in the **Select Menu** beneath this message. " +
      "Once chosen, your messages, phrases and references will be read with that voice."
    ).setColor( this.embedColor );

  // Link de lista de idiomas
  languagesList = new MessageEmbed()
    .setTitle( "🌎 | Supported Languages" )
    .setDescription( "Visit [this link](https://cloud.google.com/text-to-speech/docs/voices) to see a fully detailed list of supported languagues." )
    .setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Información del bot.
  botInfo = new MessageEmbed()
    .setTitle( "📩 | About Hawking's" )
    .setThumbnail( Data.Clients.Discord.user.displayAvatarURL() )
    .setDescription(
      "<@828540208743710741> is a funny, fully customizable and complete **Text to Speech** bot. No more worries about boring and plane bots! With " +
      "<@828540208743710741> you'll always have fun adding custom phrases to your server, words into the server's dictionary and choosing into a big " +
      "(really big) list of available voices.\n\n" +
      "If you'd like to invite me to your server, click the button below! I promise you won't regret it."
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Votos de topGG.
  voteReminder = new MessageEmbed()
    .setTitle( "❤ | What about giving us a vote?" )
    .setDescription(
      "You'll help us a lot by just voting for <@828540208743710741> on [Top.gg](https://top.gg/bot/828540208743710741).\n\n" +
      "**Following features will be unlocked for 24 hours after voting:**\n" +
      "` Custom Aliases `\n" +
      "` Custom Speed `\n" +
      "` Custom Names on Temporary Channels `\n" +
      "` Random Jokes `"
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Ayuda general.
  generalHelp = new MessageEmbed()
    .setTitle("Hawking's Help")
    .setDescription(
      "Here you'll find everything you need to setup <@828540208743710741>. Choose any of the 4 modules listed beneath this message to " +
      "see all available commands in that module."
    ).addFields({
      name: "⚙ | Modules",
      value:
        "The list of available commands will show even if a module is disabled within the server.\n\n" +
        "` 🌍 | Global Commands `\n" +
        "` 🎤 | Text to Speech Commands `\n" +
        "` 🔧 | Voice Utilities Commands `\n" +
        "` 🔊 | Temporary Voice Channels Commands `",
      inline: false
    }).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Comandos globales
  globalhelp = new MessageEmbed()
    .setTitle("Hawking's - Global Help")
    .addFields(
      {
        name: '📗 | For All Users',
        value:
          '```diff\n' +
          '+ changelogs         + ping\n' +
          '+ help               + server\n' +
          '+ info               + user\n' +
          '+ patreon            + vote```\n',
        inline: false
      },
      {
        name: '📒 | For Patrons',
        value:
          '```fix\n' +
          '• upgrade\n' +
          '• downgrade```',
        inline: false
      },
      {
        name: '📕 | Server Management only',
        value:
          '```diff\n' +
          '- config\n' +
          '- modules```\n' +
          'Type `/help [cmd]` for a detailed description of a command.',
        inline: false
      }
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Comandos de Text to Speech
  textToSpeechHelp = new MessageEmbed()
    .setTitle("Hawking's - Text to Speech Help")
    .setDescription(
      "**__Note:__**\n" +
      "<@828540208743710741> can only read messages and recognize custom commands on **whitelisted** channels.\n\n" +
      "For detailed info please use `/help whitelist`"
    ).addFields(
      {
        name: '📗 | For all Users',
        value:
          '```diff\n' +
          '+ alias                + phrases list\n' +
          '+ dictionary list      + speed\n' +
          '+ jokes list           + sing\n' +
          '+ joke                 + translate\n' +
          '+ language             + voice```\n',
        inline: false
      },
      {
        name: '📕 | Server Management only',
        value:
          '```diff\n' +
          '- allowed_roles add    - inactivity_timer\n' +
          '- allowed_roles delete - jokes register\n' +
          '- allowed_roles list   - jokes delete\n' +
          '- banned_words ban     - max_length\n' +
          '- banned_words unban   - phrases_prefix\n' +
          '- banned_words list    - phrases register\n' +
          '- cleanup              - phrases delete\n' +
          '- default_voice        - references edit\n' +
          '- dictionary register  - references list\n' +
          '- default_voice        - restart\n' +
          '- dictionary delete    - server_language\n' +
          '- ignored_roles add    - whitelist\n' +
          '- ignored_roles delete\n' +
          '- ignored_roles list```\n' +
          'Type `/help [cmd]` for a detailed description of a command.',
        inline: false
      }
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Comandos de utilidades de voz.
  voiceUtilitiesHelp = new MessageEmbed()
    .setTitle("Hawking's - Voice Utils Help")
    .addFields(
      {
        name: '📕 | Server Management only',
        value:
          '```diff\n' +
          '- deafen             - undeafen\n' +
          '- disconnect         - unmute\n' +
          '- move               - voice_roles\n' +
          '- mute```\n' +
          'Type `/help [cmd]` for a detailed description of a command.',
        inline: false
      }
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Comandos de canales temporales
  temporaryChannelsHelp = new MessageEmbed()
    .setTitle("Hawking's - Temporary Voice Channels Help")
    .addFields(
      {
        name: '📗 | For Hosts',
        value:
          '```diff\n' +
          '+ bitrate            + channel_permissions```',
        inline: false
      },
      {
        name: '📕 | Server Management only',
        value:
          '```diff\n' +
          '- custom_names       - guest_role\n' +
          '- default_name       - host_role\n' +
          '- generator          - panel```\n' +
          'Type `/help [cmd]` for a detailed description of a command.',
        inline: false
      }
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Mensaje de bienvenida.
  welcomeMessage = new MessageEmbed()
    .setTitle('Hello There!')
    .setThumbnail(Data.Clients.Discord.user.displayAvatarURL())
    .setDescription(
      "Thanks for inviting <@828540208743710741> to your server.\n" +
      "This is a quick guide for start using me.\n"
    ).addFields(
      {
        name: '🔊 | Text to Speech',
        value:
          '  • Select a language using ` /server_language `\n' +
          '  • Whitelist some channels typing ` /whitelist `\n' +
          '  • Choose your favorite voice using ` /voice `\n' +
          '  • Register custom phrases with ` /phrases register `\n' +
          '  • Add some words into the server\'s dictionary ` /dictionary register `\n',
        inline: false
      },
      {
        name: '⏳ | Temporary Channels',
        value:
          '  • Create a generator using ` /generator create `\n' +
          '  • Setup a host role for the new channels ` /host_role `\n' +
          '  • Create a new interaction panel ` /panel `\n\n' +
          'You can use ` /help ` if you need it.\n' +
          'You can always view the current setup with ` /config `',
        inline: false
      }
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Panel de interacción
  interactionPanel = new MessageEmbed()
    .setTitle('🔊 | Temporary Channels Panel')
    .setDescription(
      "You can customise your channel with this **Interaction Panel**.\n" +
      "No commands needed! Ain't that cool?\n\n" +
      "` 💬 ` - Creates a temporary text channel.\n" +
      "` 🔒 ` - Switchs the channel's privacy.\n" +
      "` 🔎 ` - Switchs the channel's visibility.\n" +
      "` 🧭 ` - Changes the channel's region.\n" +
      "` 📝 ` - Changes the channel's name.\n" +
      "` 🎥 ` - Switchs stream permission.\n" +
      "` 🎤 ` - Switchs activity voice mode.\n" +
      "` ➕ ` - Adds a slot.\n" +
      "` ➖ ` - Removes a slot.\n" +
      "` 👑 ` - Claims the channel's hosting."
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Lista de selección de roles temporales
  selectRole = new MessageEmbed()
    .setTitle( "🔗 | Unbind Voice Role" )
    .setDescription( "Choose a voice role in the **Select Menu** to unbind it." )
    .setColor( this.embedColor );

  // Mensaje de éxito
  doneSuccessfully = new MessageEmbed()
    .setTitle( ":white_check_mark: | Success" )
    .setDescription( "Done successfully." )
    .setColor( "GREEN" );
}

module.exports = new Embeds();
