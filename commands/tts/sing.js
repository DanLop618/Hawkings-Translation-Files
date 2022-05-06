module.exports = {
  name: "sing",
  description: "Feeling like Hannah Montana, huh?",
  description_localizations: { "es-ES": "Así que te sientes como Hannah Montana, ¿verdad?" },
  options: [
    {
      name: "text",
      name_localizations: { "es-ES": "texto" },
      description: "Text to sing",
      description_localizations: { "es-ES": "El texto a cantar." },
      type: 3,
      required: true
    }
  ],
  default_member_permissions: "0",
  dm_permissions: false
};
