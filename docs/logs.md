Send logs for certain events in specified channels to keep track of server activity.

## Events

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

## Commands

### /logs enable
Enable a log event.

?> After using this command, Lucie will ask you to specify a channel.

<details><summary>Options</summary>

- **Event\***: The log event. (One of the events in the list above)
</details>

### /logs disable
Disable a log event.

<details><summary>Options</summary>

- **Event\***: The log event. (One of the events in the list above)
</details>

### /logs list
List all enabled logs.