module.exports = {
  name: "default_voice",
  description: "Selects a default voice for the users into the server.",
  description_localizations: {
    "es-ES": "Selecciona una voz por defecto para los usuarios del servidor."
  },
  options: [],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
