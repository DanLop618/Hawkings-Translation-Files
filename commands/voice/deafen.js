module.exports = {
  name: "deafen",
  description: "Deafens and mutes an user or an entire channel.",
  description_localizations: {
    "es-ES": "Ensordece y silencia a un usuario o un canal completo."
  },
  options: [
    {
      name: "user",
      description: "Deafens an user.",
      description_localizations: {
        "es-ES": "Ensordece a un usuario."
      },
      type: 1,
      options: [
        {
          name: "user",
          name_localizations: {
            "es-ES": "usuario"
          },
          description: "User to deafen.",
          description_localizations: {
            "es-ES": "El usuario a ensordecer."
          },
          type: 6,
          required: true
        }
      ]
    },
    {
      name: "channel",
      description: "Deafens an entire channel.",
      description_localizations: {
        "es-ES": "Ensordece a un canal completo."
      },
      type: 1,
      options: [
        {
          name: "channel",
          name_localizations: {
            "es-ES": "canal"
          },
          description: "Channel to deafen.",
          description_localizations: {
            "es-ES": "El canal a ensordecer."
          },
          channel_types: [ 2 ],
          type: 7,
          required: true
        }
      ]
    }
  ],
  default_member_permissions: ( 1 << 23 ).toString(),
  dm_permission: false
};
