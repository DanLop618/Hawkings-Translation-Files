### 🚩 | Before Starting
` embedColor ` variable must not be modified due this is a constant value. <br>
Also, the Embed Messages colors and emojis must not be translated/modified.

The attribute keys from objects must not be translated/modified. <br>
Major issues could appear if they get modified.

There are a couple constants:
- ` <@828540208743710741> ` is the constant **Hawking's** mentionable user into Discord.
- ` Command Names ` must not be translated/modified since they are static names.

Once said, the translation should look like this:
```js
// Original
internalError = new MessageEmbed()
  .setTitle( ":x: | Error" )
  .setDescription( "An internal error ocurred while trying to update the bot's settings." )
  .setFooter({ text: "For detailed help join our Support Server" })
  .setColor( "RED" );
    
// Translated to es-ES
internalError = new MessageEmbed()
  .setTitle( ":x: | Error" )
  .setDescription( "Ocurrió un error interno al intentar actualizar la configuración del bot." )
  .setFooter({ text: "Para ayuda detallada ingresa a nuestro Servidor de Soporte" })
  .setColor( "RED" );
```
