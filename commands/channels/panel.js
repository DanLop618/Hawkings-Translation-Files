module.exports = {
  name: "panel",
  description: "Creates an interaction panel for the temporary voice channels into an specified channel.",
  description_localizations: {
    "es-ES": "Crea un panel de interacción para los canales temporales de voz en el canal especificado."
  },
  options: [
    {
      name: "channel",
      name_localizations: {
        "es-ES": "canal"
      },
      description: "Channel where the panel must be created.",
      description_localizations: {
        "es-ES": "El canal donde el panel debe ser creado."
      },
      channel_types: [ 0 ],
      type: 7,
      required: false
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permission: false
};
