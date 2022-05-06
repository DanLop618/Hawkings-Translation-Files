module.exports = {
  name: "restart",
  description: "Restarts the bot's voice sockets and memory cache (from the server).",
  description_localizations: {
    "es-ES": "Reinicia los sockets de voz y la caché del bot (en el servidor)."
  },
  options: [],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
