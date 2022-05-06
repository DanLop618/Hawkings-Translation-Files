module.exports = {
  name: "unmute",
  description: "Unmutes an user or an entire channel.",
  description_localizations: {
    "es-ES": "Des-silencia a un usuario o a un canal completo."
  },
  options: [
    {
      name: "user",
      description: "Unmutes an user.",
      description_localizations: {
        "es-ES": "Des-silencia a un usuario."
      },
      type: 1,
      options: [
        {
          name: "user",
          name_localizations: {
            "es-ES": "usuario"
          },
          description: "User to unmute.",
          description_localizations: {
            "es-ES": "El usuario a des-silenciar."
          },
          type: 6,
          required: true
        }
      ]
    },
    {
      name: "channel",
      description: "Unmutes an entire channel.",
      description_localizations: {
        "es-ES": "Des-silencia a un canal completo."
      },
      type: 1,
      options: [
        {
          name: "channel",
          name_localizations: {
            "es-ES": "canal"
          },
          description: "Channel to unmute.",
          description_localizations: {
            "es-ES": "El canal a des-silenciar."
          },
          channel_types: [ 2 ],
          type: 7,
          required: true
        }
      ]
    }
  ],
  default_member_permissions: ( 1 << 22 ).toString(),
  dm_permission: false
};
