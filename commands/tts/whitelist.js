module.exports = {
  name: "whitelist",
  description: "Adds a channel to the server's whitelist or removes it.",
  description_localizations: {
    "es-ES": "Añade un canal a la lista blanca del servidor o lo remueve."
  },
  options: [
    {
      name: "action",
      name_localizations: {
        "es-ES": "accion"
      },
      description: "The action to be performed on the channel.",
      description_localizations: {
        "es-ES": "La acción a realizarse con el canal."
      },
      type: 3,
      choices: [
        {
          name: "Add",
          name_localizations: {
            "es-ES": "Añadir"
          },
          value: "add"
        },
        {
          name: "Remove",
          name_localizations: {
            "es-ES": "Remover"
          },
          value: "remove"
        },
      ],
      required: true
    },
    {
      name: "channel",
      name_localizations: {
        "es-ES": "canal"
      },
      description: "Channel to update.",
      description_localizations: {
        "es-ES": "El canal a modificar."
      },
      channel_types: [ 0 ],
      type: 7,
      required: false
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
