module.exports = {
  name: "ignored_roles",
  description: "Add a new role to ignore, delete an existing one or list all ignored roles",
  description_localizations: {
    "es-ES": "Añade un nuevo rol a ignorar, elimina uno existente o enlista todos los roles ignorados."
  },
  options: [
    {
      name: "add",
      description: "Add a new role to ignore.",
      description_localizations: {
        "es-ES": "Añade un nuevo rol a ignorar."
      },
      type: 1,
      options: [
        {
          name: "role",
          name_localizations: {
            "es-ES": "rol"
          },
          description: "The role to ignore.",
          description_localizations: {
            "es-ES": "El rol a ignorar."
          },
          type: 8,
          required: true
        }
      ]
    },
    {
      name: "delete",
      description: "Delete an existing ignored role.",
      description_localizations: {
        "es-ES": "Elimina un rol ignorado existente."
      },
      type: 1,
      options: [
        {
          name: "role",
          name_localizations: {
            "es-ES": "rol"
          },
          description: "The ignored role to delete.",
          description_localizations: {
            "es-ES": "El rol ignorado a eliminar."
          },
          type: 8,
          required: true
        }
      ]
    },
    {
      name: "list",
      description: "Lists all ignored roles.",
      description_localizations: {
        "es-ES": "Enlista todos los roles ignorados."
      },
      type: 1
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
