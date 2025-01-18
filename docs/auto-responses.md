Auto-responses are automatic messages that are sent when a member sends a certain keyword/keyphrase.

## Commands 

## /autoresponse blacklist
Create a list of channels that are ignored by the auto-responses system.

## /autoresponse blacklist add
- **Description:**  
  Adds a user or keyword to the autoresponse blacklist, preventing it from triggering autoresponses.

- **Options:**
  - `--user [username]` : Specifies the username to add to the blacklist.
  - `--keyword [word]` : Adds a specific keyword to the blacklist to prevent autoresponses from triggering with that word.



## /autoresponse blacklist remove
- **Description:**  
  Removes a user or keyword from the autoresponse blacklist, allowing autoresponses to trigger again.

- **Options:**
  - `--user [username]` : Specifies the username to remove from the blacklist.
  - `--keyword [word]` : Removes a specific keyword from the blacklist, allowing autoresponses with that word again.
