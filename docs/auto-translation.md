The auto-translations module includes automatic translations, flag translations, manual message translations and command translations.

## 1. Auto-translation

Automatically replaces messages in foreign languages with a translated version in the form of a webhook.

?> Auto-translation currently only supports English. Use flag or command translation for other languages.

## 2. Flag translation

React to a message with a flag to translate it to that language. Lucie will only respond if it supports the language and can find a translation.

In case you find an unsupported language, please report it in our [Support server](https://lucie.gg/server).

## 3. Manual translation

In case auto-translation didn't work, you can manually translate a message by doing the following:

<!-- tabs:start -->

<!-- tab:PC -->
1. Right-click on the message.
2. Hover over "Apps" and select Translate.

<!-- tab:Mobile -->
1. Hold down on the message.
2. Tap "Apps" and then "Translate".

<!-- tabs:end -->

?> Manual translation currently only supports English. Use flag or command translation for other languages.

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
Shows a list of the flags of all languages Lucie supports.