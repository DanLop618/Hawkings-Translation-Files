module.exports = {
  name: "generator",
  description: "Creates a generator, deletes an existing one or lists all available ones.",
  description_localizations: {
    "es-ES": "Crea un generador de canales, elimina uno existente o enlista todos los disponibles."
  },
  options: [
    {
      name: "create",
      description: "Creates a new temporary voice channel generator.",
      description_localizations: {
        "es-ES": "Crea un nuevo generador de canales temporales de voz."
      },
      type: 1,
      options: [
        {
          name: "name",
          name_localizations: {
            "es-ES": "nombre"
          },
          description: "Generator's name.",
          description_localizations: {
            "es-ES": "Nombre del generador."
          },
          type: 3,
          required: true
        },
        {
          name: "category",
          name_localizations: {
            "es-ES": "categoría"
          },
          description: "Category in which the generator must be created.",
          description_localizations: {
            "es-ES": "La categoría en la que el generador deberia ser creado."
          },
          channel_types: [ 4 ],
          type: 7,
          required: true
        }
      ]
    },
    {
      name: "delete",
      description: "Deletes a temporary voice channel generator.",
      description_localizations: {
        "es-ES": "Elimina un generador de canales temporales de voz."
      },
      type: 1,
      options: [
        {
          name: "generator",
          name_localizations: {
            "es-ES": "generador"
          },
          description: "Generator to delete.",
          description_localizations: {
            "es-ES": "Generador a eliminar."
          },
          channel_types: [ 2 ],
          type: 7,
          required: true
        }
      ]
    },
    {
      name: "list",
      description: "Display all available temporary voice generators.",
      description_localizations: {
        "es-ES": "Enlista todos los generadores de canales temporales de voz disponibles."
      },
      type: 1,
      options: []
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permission: false
};
