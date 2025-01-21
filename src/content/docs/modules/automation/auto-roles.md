---
title: Auto-roles
description: Auto-roles are roles that are automatically assigned to certain members. Auto-roles can be assigned to humans, bots or both.
---

Auto-roles are roles that are automatically assigned to certain members. Auto-roles can be assigned to humans, bots or both.

## Commands

### /autorole

Allows you to set up roles that are automatically given when someone joins.

<details><summary>Default required permissions</summary>

- **Manage roles**

</details>

#### /autorole add

Add an autorole

<details><summary>Options</summary>

- **role\***: The role that will be automatically added to new members
- **type\***: The type of members to receive this role
  - Humans
  - Bots
  - All

</details>

#### /autorole remove

Remove an autorole

<details><summary>Options</summary>

- **role\***: The autorole to remove
- **type\***: The type of members that were supposed to receive this role
  - Humans
  - Bots
  - All

</details>

#### /autorole list

List all autoroles in this server
