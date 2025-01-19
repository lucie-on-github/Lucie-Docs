---
title: Auto-reactions
description: Auto-reactions are reactions that are automatically added to any new messages in a channel.
---

Auto-reactions are reactions that are automatically added to any new messages in a channel.

## Commands

### /autoreaction add

Add an auto-reaction to a channel.

<details><summary>Options</summary>

- **Channel\***: The channel in which the reactions will be added to messages. (Must be a normal text channel or an announcements channel)
- **Emoji\***: The emoji to react with (to add multiple: separate them by commas, e.g.: ✅,❌)

</details>

### /autoreaction remove

Remove an auto-reaction from a channel.

<details><summary>Options</summary>

- **Channel\***: The channel in which the reactions were supposed to be added to messages.
- **Emoji\***: The emoji that was supposed to be reacted with.

</details>

### /autoreaction list

List all auto-reactions in this server.
