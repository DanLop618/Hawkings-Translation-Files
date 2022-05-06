const { MessageEmbed } = require('discord.js');
const Data = require('../../structures/Data.js');

class Embeds {

  // Constructor.
  constructor() {}

  // CONSTANTES //
  embedColor  = "#c6d9e3";
  embedFooter = "Desarrollado por DanLop#6659 | Versión: " + Data.version;

  // >>>>>>>>>>>>>>>>>>>>> ERRORES <<<<<<<<<<<<<<<<<<<<<< //

  // Error interno.
  internalError = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Ocurrió un error interno al intentar actualizar la configuración del bot." )
    .setFooter({ text: "Para ayuda detallada ingresa a nuestro Servidor de Soporte" })
    .setColor( "RED" );

  // Permisos de Categoría.
  premiumCommand = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Solo puedes usar éste comando en ` Servidores Mejorados de Nivel 3 ` o siendo un donador de ` Patreon `\n\n¿Te gustaría donar? ❤" )
    .setColor( "RED" );

  categoryPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription(
      "Parece que <@828540208743710741> no tiene acceso a la categoría recibida. Asegúrate que los permisos ` VER_CANAL ` " +
      "y ` GESTIONAR_CANALES ` estén habilidatos para el bot."
    ).setColor( "RED" );

  // Rol de host no configurado.
  noHostBinded = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "No hay un **rol de host** configurado en el servidor." )
    .setColor( "RED" );

  // Host activo en sala.
  activeHost =  new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "El **host** aún está conectado en el canal." )
    .setColor( "RED" );

  // Sin permisos de host.
  hostPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Debes contar con **permisos de host** para hacer eso." )
    .setColor( "RED" );

  // Usuario no conectado a voz.
  notInVoiceChannel = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "El usuario no está conectado a un canal de voz." )
    .setColor( "RED" );

  // Usuario en cooldown.
  activeCooldown = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Espera un momento antes de volver a hacer eso." )
    .setColor( "RED" );

  // Argumentos inválidos.
  invalidArguments = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Uno de los argumentos recibidos fue inválido." )
    .setColor( "RED" );

  // Generador invalido
  invalidGenerator = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "El canal seleccionado no es un **Generador**." )
    .setColor( "RED" );

  // Nada encontrado.
  notFound = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Éste lugar se ve tan vacío..." )
    .setColor( "RED" );

  // Limite alcanzado.
  limitReached = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription(
      "¡Límite alcanzado!\n" +
      "Intenta liberar un poco de espacio o mejora éste servidor a través de **Patreon** ❤."
    ).setColor( "RED" )

  // Configurado anteriormente.
  alreadyConfigured = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Ya se ha configurado de ésta forma." )
    .setColor( "RED" );

  // Característica deshabilitada
  featureDisabled = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription(
      "Ésta cfunción está deshabilitada.\n" +
      "Dile a un **administrador** que la habilite."
    ).setColor( "RED" );

  // Prohibido
  forbidden = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "¡No puedes hacer eso!" )
    .setColor( "RED" );

  // No activo en Patreon.
  noPatreonSupporter = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Debes ser un miembro de **Patreon** para ésto." )
    .setColor( "RED" );

  // Comando específico de Guild.
  guildOnly = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Sólo puedes hacer eso dentro de un servidor de Discord." )
    .setColor( "RED" );

  // Permiso de gestión de mensajes
  manageMessagesPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Asegúrate que <@828540208743710741> cuenta con el permiso de ` GESTIONAR_MENSAJES ` para que ésto funcione." )
    .setColor( "RED" );

  // Permisos de canales de texto.
  textPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Asegúrate que <@828540208743710741> cuenta con los permisos de ` VER_CANAL `, ` ENVIAR_MENSAJES ` y ` LEER_HISTORIAL ` para que ésto funcione." )
    .setColor( "RED" );

  // Permisos de gestión de servidor.
  managementPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Debes tener el permiso de ` GESTIONAR_SERVIDOR ` para hacer eso." )
    .setColor( "RED" );

  // Permisos de ensordecer usuarios.
  deafenPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Asegúrate que tú y <@828540208743710741> cuenten con el permiso de ` ENSORDECER_MIEMBROS ` para que ésto funcione." )
    .setColor( "RED" );

  // Permisos de silenciar usuarios.
  mutePermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Asegúrate que tú y <@828540208743710741> cuenten con el permiso de ` SILENCIAR_MIEMBROS ` para que ésto funcione." )
    .setColor( "RED" );

  // Permisos para mover usuarios.
  movePermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Asegúrate que tú y <@828540208743710741> cuenten con el permiso de ` MOVER_MIEMBROS ` para que ésto funcione." )
    .setColor( "RED" );

  // Permisos de gestionar roles.
  manageRolesPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Asegúrate que tú y <@828540208743710741> cuenten con el permiso de ` GESTIONAR_ROLES ` para que ésto funcione." )
    .setColor( "RED" );

  // Permisos para gestionar canales.
  manageChannelsPermissions = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription( "Asegúrate que tú y <@828540208743710741> cuenten con el permiso de ` GESTIONAR_CANALES ` para que ésto funcione." )
    .setColor( "RED" );

  // Jerarquía de roles.
  roleHierarchy = new MessageEmbed()
    .setTitle( ":x: | Error" )
    .setDescription(
      "El rol que intentas configurar se encuentra en una jerarquía mayor que el rol más alto con el que <@828540208743710741> cuenta. " +
      "Ésto significa que el bot no será capáz de conceder ni revocar el rol, sin importar qué.\n\n" +
      "Para arreglarlo, concede a <@828540208743710741> un rol mayor en la jerarquía de roles."
    ).setColor( "RED" );

  // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MENSAJES ESTÁTICOS <<<<<<<<<<<<<<<<<<<<<<<<<<<<<< //

  // Lista de voces
  voicesList = new MessageEmbed()
    .setTitle( "🔊 | Voces Disponibles" )
    .setDescription(
      "Selecciona cualquiera de las voces listada en el **Menú de Selección** debajo de éste mensaje. " +
      "Una vez seleccionada, tus mensajes, frases y referencias serán leídos con ésta misma voz."
    ).setColor( this.embedColor );

  // Link de lista de idiomas
  languagesList = new MessageEmbed()
    .setTitle( "🌎 | Idiomas Soportados" )
    .setDescription( "Visita [éste link](https://cloud.google.com/text-to-speech/docs/voices) para ver una lista completa de **Idiomas Soportados**." )
    .setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Información del bot.
  botInfo = new MessageEmbed()
    .setTitle( "📩 | Sobre Hawking's" )
    .setDescription(
      "<@828540208743710741> es un entretenido, totalmente personalizable y genuinamente completo bot de **Text to Speech**. ¡No más bots aburridos y simples! Con " +
      "<@828540208743710741> siempre tendrás diversión añadiendo frases personalizadas, wpalabras al diccionario del servidor y eligiendo tu voz favorita dentro de " +
      "una amplia (muy amplia) lista de voces disponibles.\n\n" +
      "Si te gustaría invitarme a tu servidor, ¡Clickea el botón de debajo! Prometo que no te arrepentirás."
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

// es un divertido, totalmente personalizable y genuinamente completo bot de Text to Speech

  // Votos de topGG.
  voteReminder = new MessageEmbed()
    .setTitle( "❤ | ¿Qué tal un voto?" )
    .setDescription(
      "Ayudarías muchísimo a <@828540208743710741> con solo votar en [Top.gg](https://top.gg/bot/828540208743710741).\n\n" +
      "**Las siguientes funciones se desbloquearán por 24 hrs después de votar:**\n" +
      "` Alias Personalizados `\n" +
      "` Velocidad de Lectura Personalizada `\n" +
      "` Nombres Personalizados en Canales Temporales `\n" +
      "` Bromas Aleatorias `"
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Ayuda general.
  generalHelp = new MessageEmbed()
    .setTitle("Ayuda de Hawking's")
    .setDescription(
      "Aquí encontrarás todo lo necesario para configurar a <@828540208743710741>. Elige uno de los 4 módulos listados debajo para " +
      "ver todos los comandos disponibles del mismo."
    ).addFields({
      name: "⚙ | Módulss",
      value:
        "La lista de comandos se mostrará aún si el módulo está deshabilitado en el servidor.\n\n" +
        "` 🌍 | Comandos Globales `\n" +
        "` 🎤 | Text to Speech `\n" +
        "` 🔧 | Utilidades de Voz `\n" +
        "` 🔊 | Canales de Voz Temporales `",
      inline: false
    }).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Comandos globales
  globalhelp = new MessageEmbed()
    .setTitle("Hawking's - Ayuda Global")
    .addFields(
      {
        name: '📗 | Todos los Usuarios',
        value:
          '```diff\n' +
          '+ changelogs         + ping\n' +
          '+ help               + server\n' +
          '+ info               + user\n' +
          '+ patreon            + vote```\n',
        inline: false
      },
      {
        name: '📒 | Miembros de Patreon',
        value:
          '```fix\n' +
          '• upgrade\n' +
          '• downgrade```',
        inline: false
      },
      {
        name: '📕 | Administradores',
        value:
          '```diff\n' +
          '- config\n' +
          '- modules```\n' +
          'Envía `/help [cmd]` para obtener más detalles de un comando.',
        inline: false
      }
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Comandos de Text to Speech
  textToSpeechHelp = new MessageEmbed()
    .setTitle("Hawking's - Ayuda de Text to Speech")
    .setDescription(
      "**__Note:__**\n" +
      "<@828540208743710741> can only read messages and recognize custom commands on **whitelisted** channels.\n\n" +
      "For detailed info please use `/help whitelist`"
    ).addFields(
      {
        name: '📗 | Todos los Usuarios',
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
        name: '📕 | Administradores',
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
    .setTitle("Hawking's - Ayuda de Utilidades de Voz")
    .addFields(
      {
        name: '📕 | Administradores',
        value:
          '```diff\n' +
          '- deafen             - undeafen\n' +
          '- disconnect         - unmute\n' +
          '- move               - voice_role\n' +
          '- mute```\n' +
          'Envía `/help [cmd]` para obtener más detalles de un comando.',
        inline: false
      }
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Comandos de canales temporales
  temporaryChannelsHelp = new MessageEmbed()
    .setTitle("Hawking's - Ayuda de Canales Temporales")
    .addFields(
      {
        name: '📗 | Anfitriones de Canales',
        value:
          '```diff\n' +
          '+ bitrate            + channel_permissions```',
        inline: false
      },
      {
        name: '📕 | Administradores',
        value:
          '```diff\n' +
          '- custom_names       - guest_role\n' +
          '- default_name       - host_role\n' +
          '- generator          - panel```\n' +
          'Envía `/help [cmd]` para obtener más detalles de un comando.',
        inline: false
      }
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Mensaje de bienvenida.
  welcomeMessage = new MessageEmbed()
    .setTitle('¡Hola!')
    .setThumbnail(Data.Clients.Discord.user.displayAvatarURL())
    .setDescription(
      "Gracias por invitar a <@828540208743710741> a tu servidor.\n" +
      "Ésta es una guía rápida para comenzar a utilizarme.\n"
    ).addFields(
      {
        name: '🔊 | Text to Speech',
        value:
          '  • Elige un idioma para tu servidor con `   /server_language `\n' +
          '  • Agrega un canal a la lista blanca con `  /whitelist `\n' +
          '  • Elige tu voz favorita utilizando ` /voice `\n' +
          '  • Registra frases personalizadas con ` /phrases register `\n' +
          '  • Registra palabras en el diccionario con ` /dictionary register `\n',
        inline: false
      },
      {
        name: '⏳ | Canales Temporales',
        value:
          '  • Crea un generador utilizando ` /generator create `\n' +
          '  • Configura un rol para los anfitriones con ` /host_role `\n' +
          '  • Crea un panel de interacción usando ` /panel `\n\n' +
          'Puedes utilizar ` /help ` cada que lo necesites.\n' +
          'Siempre puedes ver la configuración del servidor con ` /config `',
        inline: false
      }
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Panel de interacción
  interactionPanel = new MessageEmbed()
    .setTitle('🔊 | Panel de Interacción')
    .setDescription(
      "Puedes personalizar tu canal con éste **Panel de Interacción**.\n" +
      "¡No necesitas comandos! Genial, ¿no?\n\n" +
      "` 💬 ` - Crea un canal de texto temporal.\n" +
      "` 🔒 ` - Alterna la privacidad del canal.\n" +
      "` 🔎 ` - Alterna la visibilidad del canal.\n" +
      "` 🧭 ` - Cambia la región del canal.\n" +
      "` 📝 ` - Actualiza el nombre de tu canal.\n" +
      "` 🎥 ` - Alterna los permisos de transmisión.\n" +
      "` 🎤 ` - Alterna el modo de actividad de voz.\n" +
      "` ➕ ` - Añade un espacio extra.\n" +
      "` ➖ ` - Remueve un espacio.\n" +
      "` 👑 ` - Reclama el anfitronaje del canal."
    ).setColor( this.embedColor )
    .setFooter({ text: this.embedFooter });

  // Lista de selección de roles temporales
  selectRole = new MessageEmbed()
    .setTitle( "🔗 | Desvicula un Rol de Voz" )
    .setDescription( "Selecciona un rol de voz del **Menú de Selección** para desvincularlo." )
    .setColor( this.embedColor );

  // Mensaje de éxito
  doneSuccessfully = new MessageEmbed()
    .setTitle( ":white_check_mark: | ¡Hecho!" )
    .setDescription( "Realizado con éxito." )
    .setColor( "GREEN" );
}

module.exports = new Embeds();
