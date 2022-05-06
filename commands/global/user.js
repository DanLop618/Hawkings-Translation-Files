module.exports = {
  name: "user",
  description: "Displays some user's data.",
  description_localizations: {
    "es-ES": "Muestra los datos de un usuario específico."
  },
  options: [
    {
      name: "target",
      name_localizations: {
        "es-ES": "usuario"
      },
      description: "User to display",
      description_localizations: {
        "es-ES": "Usuario a mostrar."
      },
      type: 6,
      required: false
    }
  ],
  dm_permissions: false
};
