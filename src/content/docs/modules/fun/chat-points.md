---
title: Chat points
description: Chat points are a great way to keep track of user activity and make chatting a fun competition for a place on the leaderboard.
---

Chat points are a great way to keep track of user activity and make chatting a fun competition for a place on the leaderboard.

Each member can gain between 5 and 20 chat points per message with a cooldown of one minute, to prevent spamming.

## Commands

### /leaderboard

Get the users with the most chat points in this server.

### /level

Get the current level and chat points of a user.

<details><summary>Options</summary>

- **user**: User to get the level of

</details>

### /levels

Configure levels settings for this server.

<details><summary>Default required permissions</summary>

- **Manage roles**

</details>

#### /levels channel

Set the channel for level-up notifications.

<details><summary>Options</summary>

- **channel\***: Channel to send notifications in whenever a member levels up.

</details>

#### /levels notifications

Enable/disable level-up notifications.

<details><summary>Options</summary>

- **enable\***: Send level-up notifications.

</details>

#### /levels info

Shows information about levels settings of this server.

### /rank

Lets you configura role rewards for chat points.

<details><summary>Default required permissions</summary>

- **Manage roles**

</details>

#### /rank add

Adds a new rank reward.

<details><summary>Options</summary>

- **level\***: The required level to gain this rank.
- **role\***: The reward of this rank.

</details>

#### /rank remove

Removes a rank reward.

<details><summary>Options</summary>

- **role\***: The reward of this rank.

</details>

#### /rank list

Lists all rank rewards in this server.

#### /rank stack

Lets you toggle whether members keep their previous rank rewards.

<details><summary>Options</summary>

- **enable\***: Whether to enable or disable rank reward stacking.

</details>
