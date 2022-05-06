module.exports = {
  name: "inactivity_timer",
  description: "The time (in seconds) the bot has to wait before leaving a voice channel due to inactivity.",
  description_localizations: {
    "es-ES": "El tiempo (en segundos) que el bot tiene que esperar antes de dejar un canal de voz por inactividad."
  },
  options: [
    {
      name: "time",
      name_localizations: {
        "es-ES": "tiempo"
      },
      description: "Time (in seconds).",
      description_localizations: {
        "es-ES": "El tiempo (en segundos)."
      },
      type: 10,
      maxValue: 900,
      minValue: 5,
      required: true
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
