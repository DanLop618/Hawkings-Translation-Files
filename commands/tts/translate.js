module.exports = {
  name: "translate",
  description: "When active, your messages will be translated to the server's language before being read.",
  description_localizations: {
    "es-ES": "Si se activa, tus mensajes serán traducidos al idioma del servidor antes de ser leídos."
  },
  options: [
    {
      name: "active",
      name_localizations: {
        "es-ES": "activo"
      },
      description: "If this feature should be enabled.",
      description_localizations: {
        "es-ES": "Si ésta función debería estar habilitada."
      },
      type: 5,
      required: true
    }
  ],
  dm_permissions: false
};
