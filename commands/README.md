### 🚩 | Before Starting
Avoid using special characters such as `^~´"' for command or option names. <br>

Every name/description has its own localization body. <br>
You just need to add the language you'd like to pull inside of the respective localization body. ([Find the available locales here](https://discord.com/developers/docs/reference#locales))

#### For Example:
```js
// Original
module.exports = {
  name: "help",
  description: "Displays the bot's help.",
  description_localizations: {
  },
  options: [
    {
      name: "command",
      name_localizations: {
      },
      description: "Detailed info about a command",
      description_localizations: {
      },
      type: 3,
      required: false
    }
  ],
  dm_permissions: false
};

// Translated to es-ES
module.exports = {
  name: "help",
  description: "Displays the bot's help.",
  description_localizations: {
    "es-ES": "Muestra la ayuda del bot."
  },
  options: [
    {
      name: "command",
      name_localizations: {
        "es-ES": "comando"
      },
      description: "Detailed info about a command",
      description_localizations: {
        "es-ES": "Información detallada acerca de un comando."
      },
      type: 3,
      required: false
    }
  ],
  dm_permissions: false
};
```

- You must not add a new localization for the Command Names since they are static ones.
- Avoid changing any other command data. The pull won't be accepted if you do so.

### Once done, just save the new changes and make a ` Pull Request ` with the updated file.
