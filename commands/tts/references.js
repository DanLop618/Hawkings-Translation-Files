module.exports = {
  name: "references",
  description: "Changes the bot's references to a certain type of messages or lists all.",
  description_localizations: {
    "es-ES": "Cambia las referencias del bot a cierto tipo de mensajes o enlista todas."
  },
  options: [
    {
      name: "edit",
      description: "Edits the references within the server.",
      description_localizations: {
        "es-ES": "Modifica las referencias del servidor."
      },
      type: 1,
      options: [],
      default_member_permissions: ( 1 << 5 ).toString(),
      dm_permissions: false
    },
    {
      name: "list",
      description: "Lists the references.",
      description_localizations: {
        "es-ES": "Enlista las referencias."
      },
      type: 1,
      options: [],
      default_member_permissions: ( 1 << 5 ).toString(),
      dm_permissions: false
    }
  ]
};
