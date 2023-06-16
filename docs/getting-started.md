## Navigating

Each of Lucie's modules have their own page which can be found in the sidebar.

Every module page contains the commands associated with that module. Below commands you can find the options, a description, examples and other information.

### Command options

The options are formatted in a bullet list of the name of each option and its description. A required option is indicated with an asterisk (*).

If an option has specific values to choose from, they will be formatted in an indented bullet list under the option they're associated with.

If an option has a default, minimum or maximum value or an example, it will be formatted between brackets (()).

### Sub-commands

Sub-commands are also formatted in a bullet list but are prefixed with a slash (/).

### Default required permissions

Some commands have default required permissions. This means that the command requires you to have certain permissions to be able to use it. This can be changed by members that have access to the integrations tab in the server settings. Default required permissions are either formatted in a bullet list below a certain command, or above all commands, the latter means the default required permissions apply to all commands in the adjacent list of commands.

### Example

#### /Command

This is the description.

<details><summary>Options</summary>

- **Foo\***: This option is required and has specific values.
	- Value 1
	- Value 2
- **Bar**: This option is optional.
</details>

<details><summary>Default required permissions</summary>

- **Administrator** (This means the command can only be run by admins by default.)
</details>

## Configuration

To see all of Lucie's modules, use **/module list**. Individual modules can be enabled/disabled by using **/module enable** and **/module disable**. To get a list of all commands you can use, use **/help**.

?> **/help** will return a different list of commands depending on the current context (a server or DMs). It might not show you all of Lucie's available commands.

## FAQ

### There is missing/wrong information in this documentation.

Writing documentation and mainting a bot takes time. So it's normal that this documentation is a bit behind on Lucie's features. We do our best to try and keep this documentation as up-to-date as possible but we're mere humans. Feel free to help us by contributing to this documentation on [GitHub](https://github.com/lucie-on-github/Lucie-Docs).

### Lucie's messages contain obscure content

Are you seeing something like :Checkmark: or :Cross:? This means Lucie is missing the permission to use external emojis. Check your channel and role settings to make sure Lucie has this permission.

Are you seeing "undefined"? This is an error. Please report it in our [support server](https://lucie.gg/server).

### "Application didn't respond"

If you see this message, it means Lucie has either run into an uncaught error or crashed. If you see this, please notify us about it in our [support server](https://lucie.gg/server) so we can quickly resolve the issue!
