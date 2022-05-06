module.exports = {
  name: "server_language",
  description: "Sets up the server's default language.",
  description_localizations: {
    "es-ES": "configura el idioma predeterminado del servidor."
  },
  options: [
    {
      name: "most_common",
      name_localizations: {
        "es-ES": "mas_comunes"
      },
      description: "Most common languages.",
      description_localizations: {
        "es-ES": "Lista de idiomas más comunes."
      },
      type: 3,
      choices: [
        { name: "Español",   value: "es-US" },
        { name: "English",   value: "en-US" },
        { name: "Français",  value: "fr-FR" },
        { name: "Italiano",  value: "it-IT" },
        { name: "日本",      value: "ja-JP" },
        { name: "Português", value: "pt-BR" },
      ],
      required: false
    },
    {
      name: "language_code",
      name_localizations: {
        "es-ES": "codigo_idioma"
      },
      description: "Specific language code.",
      description_localizations: {
        "es-ES": "Un código de idioma específico."
      },
      type: 3,
      required: false
    }
  ],
  ddefault_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
