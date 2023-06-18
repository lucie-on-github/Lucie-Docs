The auto-translations module includes automatic translations, flag translations, manual message translations and command translations.

?> Auto-translation and manual translations always use the server's language.

!> This module is soon going to be renamed from Auto-translation to Translations.

## 1. Auto-translation

Automatically replaces messages in foreign languages with a translated version in the server's language in the form of a webhook.

## 2. Reaction translation

React to a message with a flag to translate it to that language. Lucie will only respond if it supports the language and can find a translation.

?> Use [/translation flags](#translation-flags) for a list of flags you can use.

In case you find an unsupported language, please report it in our [Support server](https://lucie.gg/server).

## 3. Manual translation

In case auto-translation didn't work, you can manually translate a message by opening the context menu on a message and using the Translate command.

See [How to use context menu commands](context-menu) for more details.

Manual translations will always try to translate messages to the server's language.

## 4. Command translation

### /translate
Translates a query from one language to another.

<details><summary>Options</summary>

- **Query\***: The query to translate.
- **Language**: The flag of the language to translate the query to. (Must be a flag emoji.)
  - For valid options: see [currently support flags list](#translation-flags).
</details>

## Commands

### /translation flags
Shows a list of the flags you can use to reference a language.

!> Lucie supports a lot more languages than just the ones from this list. Auto-translations can translate messages from any language that Lucie supports, while other translation methods like reaction translations and setting the server's languahe are restricted to the corresponding languages of these flags.  

## /autotranslation blacklist

## /autotranslation language