module.exports = {
  name: "alias",
  description: "Changes your server alias.",
  description_localizations: {
    "es-ES": "Cambia tu alias dentro del servidor."
  },
  options: [
    {
      name: "alias",
      description: "Your new alias.",
      description_localizations: {
        "es-ES": "Tu nuevo alias."
      },
      type: 3,
      required: true
    }
  ],
  dm_permissions: false
};
