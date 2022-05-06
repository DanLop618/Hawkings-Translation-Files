module.exports = {
  name: "disconnect",
  description: "Disconnects an user or an entire voice channel.",
  description_localizations: {
    "es-ES": "Desconecta a un usuario o a un canal completo."
  },
  options: [
    {
      name: "user",
      description: "Disconnects an user.",
      description_localizations: {
        "es-ES": "Desconecta a un usuario."
      },
      type: 1,
      options: [
        {
          name: "user",
          name_localizations: {
            "es-ES": "usuario"
          },
          description: "User to disconnect.",
          description_localizations: {
            "es-ES": "El usuario a desconectar."
          },
          type: 6,
          required: true
        }
      ]
    },
    {
      name: "channel",
      description: "Disconnects an entire channel.",
      description_localizations: {
        "es-ES": "Desconecta a un canal completo."
      },
      type: 1,
      options: [
        {
          name: "channel",
          name_localizations: {
            "es-ES": "canal"
          },
          description: "Channel to disconnect.",
          description_localizations: {
            "es-ES": "El canal a desconectar."
          },
          channel_types: [ 2 ],
          type: 7,
          required: true
        }
      ]
    }
  ],
  default_member_permissions: ( 1 << 24 ).toString(),
  dm_permission: false
};
