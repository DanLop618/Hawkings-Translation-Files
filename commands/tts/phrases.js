module.exports = {
  name: "phrases",
  description: "Registers a new phrase, deletes an existing phrase or lists all available ones.",
  description_localizations: {
    "es-ES": "Registra una nueva frase, elimina una existente o enlista todas las disponibles."
  },
  options: [
    {
      name: "register",
      description: "Registers a new phrase.",
      description_localizations: {
        "es-ES": "Registra una nueva frase."
      },
      type: 1,
      options: []
    },
    {
      name: "delete",
      description: "Deletes an existing phrase.",
      description_localizations: {
        "es-ES": "Elimina una frase existente."
      },
      type: 1,
      options: [
        {
          name: "phrase_id",
          name_localizations: {
            "es-ES": "identificador"
          },
          description: "The phrase's to delete identifier.",
          description_localizations: {
            "es-ES": "El identificador de la frase a eliminar."
          },
          type: 3,
          required: true
        }
      ]
    },
    {
      name: "list",
      description: "Lists all available phrases.",
      description_localizations: {
        "es-ES": "Enlista todas las frases disponibles."
      },
      type: 1,
      options: [
        {
          name: "page",
          name_localizations: {
            "es-ES": "pagina"
          },
          description: "List's page to display.",
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
