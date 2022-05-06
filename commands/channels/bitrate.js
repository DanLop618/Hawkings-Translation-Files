module.exports = {
  name: "bitrate",
  description: "Changes the temporary voice channel's bitrate.",
  description_localizations: {
    "es-ES": "Ajusta la tasa de bits del canal de voz temporal."
  },
  options: [
    {
      name: "bitrate",
      name_localizations: {
        "es-ES": "tasa"
      },
      description: "The new bitrate.",
      description_localizations: {
        "es-ES": "La nueva tasa de bits."
      },
      type: 10,
      maxValue: 256,
      minValue: 8,
      required: true
    }
  ],
  dm_permission: false
};
