module.exports = {
  name: 'default_name',
  description: 'Updates the temporary channels\' default name.',
  description_localizations: {
    "es-ES": "Actualiza el nombre por defecto de los canales temporales de voz."
  },
  options: [
    {
      name: 'name',
      name_localizations: {
        "es-ES": "nombre"
      },
      description: 'New default name.',
      description_localizations: {
        "es-ES": "El nuevo nombre por defecto."
      },
      type: 3,
      required: true
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permission: false
};
