---
title: Tickets
description: Allows you to set up and use tickets systems. When someone opens a ticket, a new thread is created in the channel assigned to that tickets system.
---

Allows you to set up and use tickets systems. When someone opens a ticket, a new thread is created in the channel assigned to that tickets system. All members with the selected support roles will also be added to the thread. The response from the opener of the ticket to the prompt as well as the welcome message will be sent in the thread.

:::caution
This feature is part of the moderation module and currently can't be enabled/disabled separately.
:::

:::note
Ticket systems can only be created for text and announcement channels and are limited to one ticket system per channel.
:::

## Ticket systems

Each ticket system has a title, panel text, panel button, prompt, a welcome message and ticket handler roles.

The title, panel text and panel button will be the first things a member sees before they open a ticket. When they click the panel button, they will be asked to answer the prompt. Then a new thread will be created in the same channel. The opener of the ticket as well as all members with the ticket handler roles will be added to the thread, using a mention. Lastly, Lucie will send all relevant information, including what the member responded with to the prompt, in the newly created thread along with a button to close the ticket.

### Example

| Property | Value |
| --- | --- |
| Title | Support |
| Panel text | Open a ticket with the button below to contact support! |
| Panel button | Open ticket |
| Prompt | Please describe your issue.
| Welcome message | Thank you for contacting support. Our support agents will be with you shortly. |
| Ticket handler roles | @Support, @Staff |

## Commands

### /ticket create

<details><summary>Options</summary>

- **Channel\***: The channel of the tickets system.
</details>
### /ticket delete


<details><summary>Options</summary>
- **Channel\***: The channel of the tickets system.
</details>

### /ticket edit

<details><summary>Options</summary>

- **Channel\***: The channel of the tickets system.

### /ticket list
