module.exports = {
  name: "banned_words",
  description: "Bans a word, unbans a banned one or lists all banned ones.",
  description_localizations: {
    "es-ES": "Registra una nueva palabra baneada, elimina un registro existente o enlista todos los registros."
  },
  options: [
    {
      name: "ban",
      description: "Bans a word.",
      description_localizations: {
        "es-ES": "Banea una palabra."
      },
      type: 1,
      options: [
        {
          name: "word",
          name_localizations: {
            "es-ES": "palabra"
          },
          description: "The word to ban.",
          description_localizations: {
            "es-ES": "La palabra a banear."
          },
          type: 3,
          required: true
        }
      ]
    },
    {
      name: "unban",
      description: "Unbans a banned word.",
      description_localizations: {
        "es-ES": "Des-banea una palabra baneada."
      },
      type: 1,
      options: [
        {
          name: "word",
          name_localizations: {
            "es-ES": "palabra"
          },
          description: "The word wo unban.",
          description_localizations: {
            "es-ES": "La palabra a desbanear."
          },
          type: 3,
          required: true
        }
      ]
    },
    {
      name: "list",
      description: "Lists all banned words.",
      description_localizations: {
        "es-ES": "Enlista todas las palabras baneadas."
      },
      type: 1
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
