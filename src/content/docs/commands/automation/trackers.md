---
title: Trackers
description: Trackers are channels that display statistics about your server, e.g. a channel that shows how many people are in your server.
---

Trackers are channels that display statistics about your server, e.g. a channel that shows how many people are in your server. This is typically in the form of a locked voice channel with a name similar to "Members: 153".

Trackers are automatically updated whenever a member leaves or a new member joins.

## Commands

### /tracker

Allows you to set up tracker channels to keep track of server statistics.

<details><summary>Default required permissions</summary>

- **Manage channels**

</details>

#### /tracker create

Create a new tracker

<details><summary>Options</summary>

- **channel\***: Channel to link to the tracker
- **type\***: The type of the tracker
  - Member count (including bots)
  - Bot count
  - Human count

</details>

#### /tracker edit

Edit an existing tracker

#### /tracker delete

Delete an existing tracker

#### /tracker list

List all existing trackers
