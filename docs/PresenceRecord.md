
# PresenceRecord

Real-time presence state for a user in a conversation.

## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`conversationId` | string
`userId` | string
`status` | string
`cursorPosition` | number
`seq` | number
`lastSeenAt` | Date

## Example

```typescript
import type { PresenceRecord } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 550e8400-e29b-41d4-a716-446655440000,
  "tenantId": tnt_acme-corp_a1b2c3,
  "conversationId": conv_abc123,
  "userId": usr_johndoe_abc123,
  "status": active,
  "cursorPosition": null,
  "seq": 42,
  "lastSeenAt": 2026-04-01T14:30Z,
} satisfies PresenceRecord

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PresenceRecord
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


