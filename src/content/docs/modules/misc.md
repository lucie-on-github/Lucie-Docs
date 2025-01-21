---
title: Misc commands
description: A list of miscellaneous commands.
---

A list of miscellaneous commands.

## Commands

### /tweet

Creates a fake tweet.

<details><summary>Options</summary>

- **text\***: Content of the tweet.
- **author**: The author of the tweet.

</details>

### /advice

Sends you random advice.

### /affirmation

Sends you a random affirmation.

### /define

Sends the definition of a term from Urban Dictionary.

<details><summary>Options</summary>

- **term\***: The term to define

</details>

### /github

Sends information of a Github repo.

<details><summary>Options</summary>

- **owner\***: The name of the Github user or organization. (case insensitive)
- **repo\***: The name of the Github repo. (case insensitive)

</details>

### /giveaway

Creates a new giveaway.

<details><summary>Options</summary>

- **prize\***: The prize of the giveaway.
- **duration\***: Duration of the giveaway.
- **winners**: The amount of winners for the giveaway.
- **channel**: Channel for the giveaway.
- **host**: Host of the giveaway.

</details>

<details><summary>Default required permissions</summary>

- **Manage messages**

</details>

### /help

Shows information about how to use Lucie.

### /info

Get info about the server/the bot/a user.

#### /info server

Get info about the server.

#### /info bot

Get info about the bot.

#### /info user

Get info about a user.

<details><summary>Options</summary>

- **user**: The user whose information to get.

</details>

### /link

Shows one of Lucie's important links.

#### /link website

Lucie's official website with all the information you need.

#### /link server

Hub for feedback, bug reports and Lucie's community.

#### /link documentation

Comprehensive guides, documentation, and resources related to Lucie.

#### /link invite

Add Lucie to your server.

#### /link premium

Upgrade to Lucie Premium to unlock exclusive perks and features.

#### /link patreon

Become a patron to get exclusive perks and support Lucie.

### /links

Shows a list of Lucie's important links.

### /module

Allows you to configure Lucie's modules in this server.

<details><summary>Default required permissions</summary>

- **Manage roles**

</details>

#### /module enable

Enable a module.

#### /module disable

Disable a module.

#### /module list

List all modules.

### /poll

Creates a new poll.

<details><summary>Options</summary>

- **title\***: The title of the poll.
- **options\***: The options of the poll separated by a comma, e.g.: Apples, Pears, Oranges.

</details>

### /premium

Manage your premium perks.

<details><summary>Default required permissions</summary>

- **Administrator**

</details>

#### /premium add

Add premium to this server.

#### /premium remove

Remove premium from this server.

#### /premium info

Shows information about the premium status of this server.

### /welcome

Lets you configure welcome messages for new members.

<details><summary>Default required permissions</summary>

- **Manage channels**

</details>

#### /welcome random

Enables random welcome messages.

<details><summary>Options</summary>

- **channel\***: Channel for the welcome messages.

</details>

#### /welcome custom

Enables a custom welcome message.

<details><summary>Options</summary>

- **content\***: Content of the welcome message. Use '@user' and '@server' to mention the member or server.
- **channel\***: Channel for the welcome messages.

</details>

#### /welcome disable

Disables the welcome messages.

#### /welcome info

Shows info about the current welcome message of this server.
