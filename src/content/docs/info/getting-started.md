---
title: Getting started
---

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

:::caution
**/help** will return a different list of commands depending on the current context (a server or DMs). It might not show you all of Lucie's available commands.
:::
