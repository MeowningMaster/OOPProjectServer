# Carcassonne server
- [Actions](#actions)
  - [Incoming](#in-actions)
  - [Outgoing](#out-actions)
- [Tile](src/game/tile/tile.md)

# Actions
This section shows a list of incoming and outgoing messages with examples

## In actions
### PING
```jsonc
{ "action": "PING" }
```
### CREATE_TABLE
```jsonc
{
    "action": "CREATE_TABLE",
    "tableName": "Cool table"
}
```
### JOIN_TABLE
```jsonc
{
    "action": "JOIN_TABLE",
    "tableId": "TTEST"
}
```
### LEAVE_TABLE
```jsonc
{
    "action": "LEAVE_TABLE",
    "tableId": "TTEST"
}
```
### START_GAME
```jsonc
{ "action": "START_GAME" }
```
### PUT_TILE
```jsonc
{
    "action": "PUT_TILE",
    "position": { "x": 3, "y": 5 },
    "rotation": 1, // clockwise, default 0
    "meeple": 13 // default 0 = NONE
}
```
## Out actions
### PONG
```jsonc
{ "action": "PONG" }
```
### PLAYER_JOINED
```jsonc
{
    "action": "PLAYER_JOINED",
    "playerId": "P1IZ53",
    "color": {
        "r": 231,
        "g": 123,
        "b": 85
    }
}
```
### PLAYER_LEFT
```jsonc
{
    "action":"PLAYER_LEFT",
    "playerId":"PFVWXP"
}
```
### CREATE_TABLE_SUCCESS
```jsonc
{
    "action":"CREATE_TABLE_SUCCESS",
    "tableId":"TL081A",
    "color":{ "r": 214, "g": 45, "b": 94 } // player color
}
```
### JOIN_TABLE_SUCCESS
```jsonc
{
    "action": "JOIN_TABLE_SUCCESS",
    "tableId": "TTEST",
    "tableName": "Cool table",
    "players": [
        "PT89PB",
        "P1IZ53"
    ],
    "colors": [ // per player
        { "r": 214, "g": 45, "b": 94 },
        { "r": 231, "g": 123, "b": 85 }
    ]
}
```
### JOIN_TABLE_FAILURE
```jsonc
{
    "action":"JOIN_TABLE_FAILURE",
    "tableId":"TNONE"
}
```
### LEAVE_TABLE_SUCCESS
```jsonc
{
    "action":"JOIN_TABLE_FAILURE",
    "tableId":"TNONE"
}
```
### ERROR
```jsonc
{
    "action": "ERROR",
    "description": {
        "action": [
            "Invalid enum value. Expected 'PING' | 'CREATE_TABLE' | 'JOIN_TABLE' | 'LEAVE_TABLE' | 'START_GAME' | 'PUT_TILE', received 'JOIN_ABLE'"
        ]
    }
}
```
### GAME_STARTED
```jsonc
{"action":"GAME_STARTED"}
```
### GAME_ENDED
```jsonc
{
    "action":"GAME_ENDED",
    "scores": {
        "P12345": {
            "roads": 4,
            "towns": 12,
            "fields": 3,
            "monasteries": 5,
            "summary": 24
        },
        // ... for each player
    }
}
```
### TILE_DRAWN
```jsonc
{
    "action": "TILE_DRAWN",
    "tileType": 21, // starting from 1
    "seed": -947640883 // tile seed for front
}
```
### TILE_PUTTED
```jsonc
{
    "action": "TILE_PUTTED",
    "tile": {
        "type": 19, // starting from 1
        "position": {
            "x": 0,
            "y": 0
        },
        "rotation": 0, // clockwise
        "meeple": 5 // meeple place, else 0
    },
    "seed": -947640883 // tile seed for front
}
```

### OBJECT_FINISHED
```jsonc
{
   "action": "OBJECT_FINISHED",
   "object": {
      "type": 2, // closed object type id
      "tiles": [ // tiles with meeples to free
         { "x": 0, "y": 1 }
      ],
      "scores":[ // per player
         { "playerId": "PRZQLN", "amount": 4 }
      ]
   }
}
```
[Closed object type id](src/game/tile/tile.md#tile-objects)
