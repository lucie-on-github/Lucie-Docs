---
title: Auto-reactions
description: Auto-reactions are reactions that are automatically added to any new messages in a channel.
---

Auto-reactions are reactions that are automatically added to any new messages in a channel.

## Commands

### /autoreaction

Allows you to set up reactions that are automatically added to new messages in a channel.

<details><summary>Default required permissions</summary>

- **Manage channels**

</details>

#### /autoreaction add

Add an auto-reaction

<details><summary>Options</summary>

- **channel\***: The channel in which the reactions will be added to messages
- **emoji\***: The emoji to react with (to add multiple: separate them by commas, e.g.: ✅,❌)

</details>

#### /autoreaction remove

Remove an auto-reaction

<details><summary>Options</summary>

- **channel\***: The channel in which the reactions were supposed to be added to messages
- **emoji\***: The emoji that was supposed to be reacted with

</details>

#### /autoreaction list

List all auto-reactions in this server
