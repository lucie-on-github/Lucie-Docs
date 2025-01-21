---
title: Logs
description: Send logs for certain events in specified channels to keep track of server activity.
---

Send logs for certain events in specified channels to keep track of server activity.

## Commands

### /logs

Allows you to set up logs to keep track of all kinds of server events.

<details><summary>Default required permissions</summary>

- **Manage roles**

</details>

#### /logs enable

Enable a log event

<details><summary>Options</summary>

- **event\***: The log event
  - Message delete
  - Message edit
  - Member join
  - Member leave
  - Roles update
  - Nickname update
  - Ban
  - Unban
  - Message bulk delete
  - Channel create
  - Channel delete
  - Channel update

</details>

#### /logs disable

Disable a log event

<details><summary>Options</summary>

- **event\***: The log event
  - Message delete
  - Message edit
  - Member join
  - Member leave
  - Roles update
  - Nickname update
  - Ban
  - Unban
  - Message bulk delete
  - Channel create
  - Channel delete
  - Channel update

</details>

#### /logs move

Move a log event

<details><summary>Options</summary>

- **event\***: The log event
  - Message delete
  - Message edit
  - Member join
  - Member leave
  - Roles update
  - Nickname update
  - Ban
  - Unban
  - Message bulk delete
  - Channel create
  - Channel delete
  - Channel update
- **channel\***: The channel to move the log event to

</details>

#### /logs list

Lists all enabled logs
