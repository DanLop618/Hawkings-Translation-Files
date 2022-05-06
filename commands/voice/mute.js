module.exports = {
  name: "mute",
  description: "Prevents an user or an entire channel from speaking.",
  description_localizations: {
    "es-ES": "Silencia a un usuario o a un canal completo."
  },
  options: [
    {
      name: "user",
      description: "Mutes an user.",
      description_localizations: {
        "es-ES": "Silencia a un usuario."
      },
      type: 1,
      options: [
        {
          name: "user",
          name_localizations: {
            "es-ES": "usuario"
          },
          description: "User to mute.",
          description_localizations: {
            "es-ES": "El usuario a silenciar."
          },
          type: 6,
          required: true
        }
      ]
    },
    {
      name: "channel",
      description: "Mutes an entire channel.",
      description_localizations: {
        "es-ES": "Silencia a un canal completo."
      },
      type: 1,
      options: [
        {
          name: "channel",
          name_localizations: {
            "es-ES": "canal"
          },
          description: "Channel to mute.",
          description_localizations: {
            "es-ES": "El canal a silenciar."
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
