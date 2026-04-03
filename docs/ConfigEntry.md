
# ConfigEntry

A configuration entry stored in the config-service KV store. Matches `config.go` ConfigEntry struct.

## Properties

Name | Type
------------ | -------------
`key` | string
`value` | any
`type` | string
`description` | string
`version` | number
`updatedAt` | Date
`updatedBy` | string

## Example

```typescript
import type { ConfigEntry } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "key": auth.session_timeout_minutes,
  "value": 30,
  "type": int,
  "description": Session timeout in minutes for all tenant users.,
  "version": 3,
  "updatedAt": 2025-06-10T09:15Z,
  "updatedBy": usr_admin_xyz789,
} satisfies ConfigEntry

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConfigEntry
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


