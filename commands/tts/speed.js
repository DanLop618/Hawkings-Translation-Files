module.exports = {
  name: "speed",
  description: "Changes your messages reading speed.",
  description_localizations: {
    "es-ES": "Cambia la velocidad de lectura de tus mensajes."
  },
  options: [
    {
      name: "speed",
      name_localizations: {
        "es-ES": "velocidad"
      },
      description: "The new messages reading speed.",
      description_localizations: {
        "es-ES": "La nueva velocidad de lectura."
      },
      type: 10,
      choices: [
        {
          name: "0.5 - Slow",
          name_localizations: {
            "es-ES": "0.5 - Lento"
          },
          value: 05
        },
        {
          name: "1.0 - Normal",
          name_localizations: {
            "es-ES": "1.0 - Normal"
          },
          value: 10
        },
        {
          name: "1.5 - Fast",
          name_localizations: {
            "es-ES": "1.5 - Rápido"
          },
          value: 15
        },
        {
          name: "2.0 - Super Fast",
          name_localizations: {
            "es-ES": "2.0 - Super Rápido"
          },
          value: 20
        }
      ],
      required: true
    }
  ],
  dm_permissions: false
};
