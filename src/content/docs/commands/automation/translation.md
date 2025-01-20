---
title: Translation
description: The translations module includes automatic translations, flag translations, manual message translations and command translations.
---

The translations module includes automatic translations, flag translations, manual message translations and command translations.

:::note
Auto-translation and manual translations always use the server's language.
:::

## 1. Auto-translation

Automatically replaces messages in foreign languages with a translated version in the server's language in the form of a webhook.

## 2. Reaction translation

React to a message with a flag to translate it to that language. Lucie will only respond if it supports the language and can find a translation.

:::note
Use [/translation flags](#translation-flags) for a list of flags you can use.
:::

In case you find an unsupported language, please report it in our [Support server](https://lucie.gg/server).

## 3. Manual translation

In case auto-translation didn't work, you can manually translate a message by opening the context menu on a message and using the Translate command.

See [How to use context menu commands](/info/context-menu) for more details.

Manual translations will always try to translate messages to the server's language.

## 4. Command translation

See [/translate](#translate) for more information.

## Commands

### /autotranslation

Lets you configure auto-translation.

<details><summary>Default required permissions</summary>

- **Manage roles**

</details>

#### /autotranslation blacklist

Blacklist certain queries so they don't get auto-translated.

<details><summary>Options</summary>

- **action\***: The action to perform on the query.
  - Remove
  - Add
  - List
- **query**: The query to add/remove to the blacklist.

</details>

#### /autotranslation language

Sets the language for auto-translation.

<details><summary>Options</summary>

- **id\***: The flag or code of the language to translate the query to.

</details>

#### /autotranslation channel

Adds/removes an override for auto-translation language of a channel.

<details><summary>Options</summary>

- **channel\***: Channel to add an override in
- **id**: The flag or code of the language to. Leave empty to remove an override

</details>

#### /autotranslation preserve

Preserve the original message after translating it.

<details><summary>Options</summary>

- **enable\***: Whether original messages should be preserved.

</details>

#### /autotranslation info

Shows information about auto-translation settings of this server.

#### /autotranslation enable

Enables auto-translation in this server.

#### /autotranslation disable

Disables auto-translation in this server.

### /translate

Translates a query from one language to another.

<details><summary>Options</summary>

- **query\***: The query to translate.
- **language**: The flag or code of the language to translate the query to.

</details>

### /translation

Shows information about Lucie's translation features.

<details><summary>Default required permissions</summary>

- **Manage roles**

</details>

#### /translation flags

Shows a list of all flags that are linked to languages.

#### /translation hide

Hides the output of manual translations.

<details><summary>Options</summary>

- **enabled\***: Whether output of manual translations should be hidden.

</details>
