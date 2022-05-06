module.exports = {
  name: "help",
  description: "Displays the bot's help.",
  description_localizations: {
    "es-ES": "Muestra la ayuda del bot."
  },
  options: [
    {
      name: "command",
      name_localizations: {
        "es-ES": "comando"
      },
      description: "Detailed info about a command",
      description_localizations: {
        "es-ES": "Información detallada acerca de un comando."
      },
      type: 3,
      required: false
    }
  ],
  dm_permissions: false
};
