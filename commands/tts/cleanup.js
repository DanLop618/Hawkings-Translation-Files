module.exports = {
  name: "cleanup",
  description: "Enables or disables the cleanup function on a channel.",
  description_localizations: {
    "es-ES": "Habilita o deshabilita la función de limpieza dentro de un canal."
  },
  options: [
    {
      name: "active",
      name_localizations: {
        "es-ES": "activo"
      },
      description: "If this feature should be enabled in the channel.",
      description_localizations: {
        "es-ES": "Si ésta función debería estar habilitada en el canal."
      },
      type: 5,
      required: true
    },
    {
      name: "channel",
      name_localizations: {
        "es-ES": "canal"
      },
      description: "Channel to setup.",
      description_localizations: {
        "es-ES": "Canal a configurar."
      },
      channel_types: [ 0 ],
      type: 7,
      required: false
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
