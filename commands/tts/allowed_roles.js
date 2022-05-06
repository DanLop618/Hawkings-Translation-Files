module.exports = {
  name: "allowed_roles",
  description: "Allow a role for using the bot, deletes an allowed one or lists all existing",
  description_localizations: {
    "es-ES": "Añade un nuevo rol a ignorar, elimina uno existente o enlista todos los roles ignorados."
  },
  options: [
    {
      name: "add",
      description: "Add a new allowed role.",
      description_localizations: {
        "es-ES": "Añade un nuevo permitido."
      },
      type: 1,
      options: [
        {
          name: "role",
          name_localizations: {
            "es-ES": "rol"
          },
          description: "The role to allow.",
          description_localizations: {
            "es-ES": "El rol a permitir."
          },
          type: 8,
          required: true
        }
      ]
    },
    {
      name: "delete",
      description: "Delete an existing allowed role.",
      description_localizations: {
        "es-ES": "Elimina un rol permitido existente."
      },
      type: 1,
      options: [
        {
          name: "role",
          name_localizations: {
            "es-ES": "rol"
          },
          description: "The allowed role to delete.",
          description_localizations: {
            "es-ES": "El rol permitido a eliminar."
          },
          type: 8,
          required: true
        }
      ]
    },
    {
      name: "list",
      description: "Lists all allowed roles.",
      description_localizations: {
        "es-ES": "Enlista todos los roles permitidos."
      },
      type: 1
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
