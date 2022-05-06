# 🚩 | Before Starting
### What do i have to translate?
The json keys must **not** be translated. <br>
These keys are the ones **Hawking's** use to identify the content that is going to be used.

Also, the ` id ` value must not be translated. <br>
So, with that said, the translation must look like this:
```json
// Original
{
  "value": "cleanup_all",
  "module": "` Text to Speech `",
  "title": "CleanUp All Whitelisted Channels",
  "description": "If this feature is enabled, all whitelisted channels will delete all messages once they're read.\n\n**Note:**\nThis will not affect those channels where <@828540208743710741> does not have `\u00A0VIEW_CHANNEL\u00A0` or `\u00A0MANAGE_MESSAGES\u00A0` permissions."
}

// Translated to es-ES
{
  "value": "cleanup_all",
  "module": "` Texto a Voz `",
  "title": "Auto-limpiar Canales",
  "description": "Si ésta función está activa, todos los canales de la lista blanca borrarán los mensajes una vez se hayan leído.\n\n**Nota**\nÉsto no afectará los canales en donde <@828540208743710741> no cuente con permisos de `\u00A0VER_CANAL\u00A0` o `\u00A0GESTIONAR_MENSAJES\u00A0`."
}
```

There are also a couple constants that are being used. <br>
- ` \u00A0 ` for creating blank spaces without line breaks.
- ` <@828540208743710741> ` **Hawking's** mentionable user into Discord.
- ` Command Names ` Command Names are static into every language

### Once done, save the JSON file with the language code you want to pull, for example: 
### ` pt-PT.json ` or ` it-IT.json `
