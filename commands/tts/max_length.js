module.exports = {
  name: "max_length",
  description: "The max length that all messages must have to be read. 0 means no limit.",
  description_localizations: {
    "es-ES": "La longitud máxima que los mensajes deben tener para ser leídos."
  },
  options: [
    {
      name: "length",
      name_localizations: {
        "es-ES": "longitud"
      },
      description: "Max character amount per message.",
      description_localizations: {
        "es-ES": "Cantidad máxima de caracteres por mensaje."
      },
      type: 10,
      maxValue: 175,
      minValue: 0,
      required: true
    }
  ],
  default_member_permissions: ( 1 << 5 ).toString(),
  dm_permissions: false
};
