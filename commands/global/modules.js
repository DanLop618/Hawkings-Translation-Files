module.exports = {
  name: "modules",
  description: "Enables or disables a bot's module.",
  description_localizations: {
    "es-ES": "Activa o desactiva un módulo del bot."
  },
  options: [
    {
      name: "module",
      name_localizations: {
        "es-ES": "módulo"
      },
      description: "Module to enable/disable",
      description_localizations: {
        "es-ES": "Módulo a activar/desactivar."
      },
      type: 3,
      required: true,
      choices: [
        {
          name: "Text to Speech",
          name_localizations: {
            "es-ES": "Texto a Voz"
          },
          value: "tts"
        },
        {
          name: "Voice Utilities",
          name_localizations: {
            "es-ES": "Utilidades de Voz"
          },
          value: "voice"
        },
        {
          name: "Temporary Voice Channels",
          name_localizations: {
            "es-ES": "Canales Temporales de Voz"
          },
          value: "channels"
        }
      ]
    },
    {
      name: "enabled",
      name_localizations: {
        "es-ES": "activo"
      },
      description: "If this module should be enabled",
      description_localizations: {
        "es-ES": "Si éste módulo debería estar activo."
      },
      type: 5,
      required: true
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
