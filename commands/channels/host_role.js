module.exports = {
  name: "host_role",
  description: "Selects a role for the temporary voice channels' hosts.",
  description_localizations: {
    "es-ES": "Selecciona un rol para los anfitriones de los canales temporales de voz."
  },
  options: [
    {
      name: "role",
      name_localizations: {
        "es-ES": "rol"
      },
      description: "The new hosts' role.",
      description_localizations: {
        "es-ES": "El nuevo rol de anfitriones."
      },
      type: 8,
      required: true
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permission: false
};
