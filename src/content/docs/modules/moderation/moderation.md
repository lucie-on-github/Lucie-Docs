---
title: Moderation
---

## Commands

### /ban

Ban a member.

<details><summary>Options</summary>

- **user\***: User to ban
- **reason**: Reason for the ban
- **purge**: Delete user's messages from previous 7 days

</details>

<details><summary>Default required permissions</summary>

- **Ban members**

</details>

### /kick

Kick a member.

<details><summary>Options</summary>

- **user\***: User to kick
- **reason**: Reason for the kick

</details>

<details><summary>Default required permissions</summary>

- **Kick members**

</details>

### /moderation

Configure moderation settings for this server.

<details><summary>Default required permissions</summary>

- **Manage roles**

</details>

#### /moderation notifications

Enable/disable DM notifications to members for moderation events.

<details><summary>Options</summary>

- **enable\***: Send DM notifications to members.

</details>

#### /moderation info

Shows information about moderation settings of this server.

### /mute

Mute a member.

<details><summary>Options</summary>

- **user\***: User to mute
- **duration\***: Duration of the mute (e.g., 5m, 1h, 2d)
- **reason**: Reason for the mute

</details>

<details><summary>Default required permissions</summary>

- **Moderate members**

</details>

### /purge

Purge messages in a channel.

<details><summary>Options</summary>

- **amount**: The amount of messages to purge. (max. 100)

</details>

<details><summary>Default required permissions</summary>

- **Manage messages**

</details>

### /unban

Unban a member.

<details><summary>Options</summary>

- **user\***: User to unban
- **reason**: Reason for the unban

</details>

<details><summary>Default required permissions</summary>

- **Ban members**

</details>

### /unmute

Unmute a member.

<details><summary>Options</summary>

- **user\***: User to unmute

</details>

<details><summary>Default required permissions</summary>

- **Moderate members**

</details>

### /warn

Warn a member.

<details><summary>Options</summary>

- **user\***: User to warn
- **reason\***: Reason for the warning

</details>

<details><summary>Default required permissions</summary>

- **Moderate members**

</details>

### /warning

Manage warnings of a user.

<details><summary>Default required permissions</summary>

- **Moderate members**

</details>

#### /warning list

List all warnigns of a user.

<details><summary>Options</summary>

- **user\***: User to get the warnings from

</details>

#### /warning delete

Delete a warning of a user.

<details><summary>Options</summary>

- **user\***: User to delete the warning from
- **id\***: The ID of the warning

</details>
