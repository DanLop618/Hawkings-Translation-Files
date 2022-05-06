module.exports = {
  name: "phrases_prefix",
  description: "Changes the prefix for reading phrases.",
  description_localizations: {
    "es-ES": "Cambia el prefijo para leer frases."
  },
  options: [
    {
      name: "prefix",
      name_localizations: {
        "es-ES": "prefijo"
      },
      description: "New phrases prefix.",
      description_localizations: {
        "es-ES": "El nuevo prefijo de frases."
      },
      type: 3,
      required: true
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
