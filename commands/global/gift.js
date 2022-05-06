module.exports = {
  name: "gift",
  description: "Sends a premium subscription to a user.",
  description_localizations: {
    "es-ES": "Envía una suscripción premium a un usuario."
  },
  options: [
    {
      name: "user",
      name_localizations: {
        "es-ES": "usuario"
      },
      description: "The user to send the gift.",
      description_localizations: {
        "es-ES": "El usuario a enviar la suscripción."
      },
      type: 6,
      required: true
    }
  ],
  dm_permissions: false
};
