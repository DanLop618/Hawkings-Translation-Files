module.exports = {
  name: "voice_roles",
  description: "Binds a new voice role, unbinds an existing voice role or lists all available ones.",
  description_localizations: {
    "es-ES": "Enlaza un nuevo rol de voz, desenlaza uno existente o enlista todos los disponibles."
  },
  options: [
    {
      name: "bind",
      description: "Binds a role to a voice channel.",
      description_localizations: {
        "es-ES": "Enlaza un rol a un canal de voz."
      },
      type: 1,
      options: [
        {
          name: "role",
          name_localizations: {
            "es-ES": "rol"
          },
          description: "The role to bind.",
          description_localizations: {
            "es-ES": "El rol a enlazar."
          },
          type: 8,
          required: true
        },
        {
          name: "channel",
          name_localizations: { "es-ES": "canal" },
          description: "Channel in which the role must be bind.",
          description_localizations: {
            "es-ES": "El canal donde el rol será enlazado."
          },
          channel_types: [ 2 ],
          type: 7,
          required: true
        },
        {
          name: "behaviour",
          name_localizations: {
            "es-ES": "comportamiento"
          },
          description: "The behaviour the rol must have.",
          description_localizations: {
            "es-ES": "El comportamiento que debe tener el rol."
          },
          type: 3,
          choices: [
            {
              name: "GRANT the role to the user.",
              name_localizations: {
                "es-ES": "CONCEDER el rol al usuario."
              },
              value: "GRANT"
            },
            {
              name: "REVOKE the role from the user.",
              name_localizations: {
                "es-ES": "REVOCAR el rol al usuario."
              },
              value: "REVOKE"
            },
            {
              name: "TEMPORARY grant the role while the user is connected to the channel.",
              name_localizations: {
                "es-ES": "TEMPORALMENTE conceder el rol mientras el usuario esté conectado al canal de voz."
              },
              value: "TEMPORARY"
            },
          ],
          required: true
        }
      ]
    },
    {
      name: "unbind",
      description: "Unbinds a role.",
      description_localizations: {
        "es-ES": "Desenlaza un rol de voz."
      },
      type: 1
    },
    {
      name: "list",
      description: "Lists all available voice roles.",
      description_localizations: {
        "es-ES": "Enlista todos los roles de voz disponibles."
      },
      type: 1
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
