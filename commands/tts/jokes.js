module.exports = {
  name: "jokes",
  description: "Registers a new joke, deletes an existing joke or lists all available ones.",
  description_localizations: {
    "es-ES": "Registra un nuevo chiste, elimina uno existente o enlista todos los disponibles."
  },
  options: [
    {
      name: "register",
      description: "Registers a new joke.",
      description_localizations: {
        "es-ES": "Registra un nuevo chiste."
      },
      type: 1,
      options: [
        {
          name: "joke",
          name_localizations: {
            "es-ES": "chiste"
          },
          description: "The joke to register.",
          description_localizations: {
            "es-ES": "El chiste a registrar."
          },
          type: 3,
          required: true
        }
      ]
    },
    {
      name: "delete",
      description: "Deletes an existing joke.",
      description_localizations: {
        "es-ES": "Elimina un chiste existente."
      },
      type: 1,
      options: [
        {
          name: "index",
          name_localizations: {
            "es-ES": "indice"
          },
          description: "The joke's index (position) to delete.",
          description_localizations: {
            "es-ES": "El índice (posición) del chiste a eliminar."
          },
          type: 10,
          required: true
        }
      ]
    },
    {
      name: "list",
      description: "Lists all available jokes.",
      description_localizations: {
        "es-ES": "Enlista todos los chistes disponibles."
      },
      type: 1,
      options: []
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
