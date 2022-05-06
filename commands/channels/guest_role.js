module.exports = {
  name: "guest_role",
  description: "Selects a role for the temporary voice channels' guests.",
  description_localizations: {
    "es-ES": "Selecciona un rol para los invitados en los canales temporales de voz."
  },
  options: [
    {
      name: "role",
      name_localizations: {
        "es-ES": "rol"
      },
      description: "The new guests' role.",
      description_localizations: {
        "es-ES": "El nuevo rol de invitados."
      },
      type: 8,
      required: true
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permission: false
}
