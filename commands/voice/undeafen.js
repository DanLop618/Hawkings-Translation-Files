module.exports = {
  name: "undeafen",
  description: "Undeafens an user or an entire channel.",
  description_localizations: {
    "es-ES": "Desensordece a un usuario o a un canal completo."
  },
  options: [
    {
      name: "user",
      description: "Undeafens an user.",
      description_localizations: {
        "es-ES": "Desensordece a un usuario."
      },
      type: 1,
      options: [
        {
          name: "user",
          name_localizations: {
            "es-ES": "usuario"
          },
          description: "User to undeafen.",
          description_localizations: {
            "es-ES": "El usuario a desensordecer."
          },
          type: 6,
          required: true
        }
      ]
    },
    {
      name: "channel",
      description: "Uneafens an entire channel.",
      description_localizations: {
        "es-ES": "Desensordece a un canal completo."
      },
      type: 1,
      options: [
        {
          name: "channel",
          name_localizations: {
            "es-ES": "canal"
          },
          description: "Channel to undeafen.",
          description_localizations: {
            "es-ES": "El canal a desensordecer."
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
