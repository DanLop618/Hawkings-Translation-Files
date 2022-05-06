module.exports = {
  name: 'channel_permissions',
  description: 'Allows/Denies users from seeing and connecting to your temporary voice channel.',
  description_localizations: {
    "es-ES": "Permite/Prohibe a los usuarios ver y/o conectarse a tu canal de voz temporal."
  },
  options: [
    {
      name: 'allow',
      description: 'Allows an user to see and connect to your temporary voice channel.',
      description_localizations: {
        "es-ES": "Permite a un usuario el ver y conectarse a tu canal de voz temporal."
      },
      type: 1,
      options: [
        {
          name: 'user',
          name_localizations: {
            "es-ES": "usuario"
          },
          description: 'The user to allow.',
          description_localizations: {
            "es-ES": "El usuario a permitir."
          },
          type: 6,
          required: true
        }
      ]
    },
    {
      name: 'deny',
      description: 'Denies an user to see and connect to your temporary voice channel.',
      description_localizations: {
        "es-ES": "Prohibe a un usuario el ver y conectarse a tu canal de voz temporal."
      },
      type: 1,
      options: [
        {
          name: 'user',
          name_localizations: {
            "es-ES": "usuario"
          },
          description: 'The user to deny.',
          description_localizations: {
            "es-ES": "El usuario a prohibir."
          },
          type: 6,
          required: true
        }
      ]
    }
  ],
  dm_permission: false
};
