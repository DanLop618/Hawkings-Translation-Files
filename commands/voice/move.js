module.exports = {
  name: "move",
  description: "Moves an user on an entire voice channel to another one.",
  description_localizations: {
    "es-ES": "Mueve a un usuario o a un canal completo hacia otro canal."
  },
  options: [
    {
      name: "user",
      description: "Moves an user from one channel to another one.",
      description_localizations: {
        "es-ES": "Mueve a un usuario de un canal a otro."
      },
      type: 1,
      options: [
        {
          name: "user",
          name_localizations: {
            "es-ES": "usuario"
          },
          description: "User to move.",
          description_localizations: {
            "es-ES": "El usuario a mover."
          },
          type: 6,
          required: true
        },
        {
          name: "to",
          name_localizations: {
            "es-ES": "hacia"
          },
          description: "The channel to which the user will be moved.",
          description_localizations: {
            "es-ES": "El canal al que se moverá al usuario."
          },
          channel_types: [ 2 ],
          type: 7,
          required: true
        },
      ]
    },
    {
      name: "channel",
      description: "Moves an entire channel to another one.",
      description_localizations: {
        "es-ES": "Mueve a un canal completo hacia otro canal."
      },
      type: 1,
      options: [
        {
          name: "from",
          name_localizations: {
            "es-ES": "desde"
          },
          description: "Channel to move.",
          description_localizations: {
            "es-ES": "Canal de origen."
          },
          channel_types: [ 2 ],
          type: 7,
          required: true
        },
        {
          name: "to",
          name_localizations: {
            "es-ES": "hacia"
          },
          description: "The channel to which the users will be moved.",
          description_localizations: {
            "es-ES": "El canal de destino al que se moverán los usuarios."
          },
          channel_types: [ 2 ],
          type: 7,
          required: true
        },
      ]
    }
  ],
  default_member_permissions: ( 1 << 24 ).toString(),
  dm_permission: false
};
