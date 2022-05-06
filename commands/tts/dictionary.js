module.exports = {
  name: "dictionary",
  description: "Registers a new dictionary entry, deletes an existing one or lists all available ones.",
  description_localizations: {
    "es-ES": "Registra una nueva entrada de diccionario, elimina una existente o enlista todas las disponibles."
  },
  options: [
    {
      name: "register",
      description: "Registers a new dictionary entry.",
      description_localizations: {
        "es-ES": "Registra una nueva entrada de diccionario."
      },
      type: 1,
      options: []
    },
    {
      name: "delete",
      description: "Deletes an existing dictionary entry.",
      description_localizations: {
        "es-ES": "Elimina una entrada de diccionario existente."
      },
      type: 1,
      options: [
        {
          name: "entry",
          name_localizations: {
            "es-ES": "entrada"
          },
          description: "The dictionary's entry to delete.",
          description_localizations: {
            "es-ES": "La entrada de diccionario a eliminar."
          },
          type: 3,
          required: true
        }
      ]
    },
    {
      name: "list",
      description: "Lists all available dictionary entries.",
      description_localizations: {
        "es-ES": "Enlista todas las entradas de diccionario disponibles."
      },
      type: 1,
      options: [
        {
          name: "page",
          name_localizations: {
            "es-ES": "pagina"
          },
          description: "List's page to display",
          description_localizations: {
            "es-ES": "Página de la lista a mostrar."
          },
          type: 3,
          required: false
        }
      ]
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
