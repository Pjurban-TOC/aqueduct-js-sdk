
# CollabActivityRecord

Collaboration activity event (share, annotation, mention, workspace membership change).

## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`actorUserId` | string
`type` | string
`resourceId` | string
`resourceType` | string
`metadata` | { [key: string]: string; }
`occurredAt` | Date

## Example

```typescript
import type { CollabActivityRecord } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 550e8400-e29b-41d4-a716-446655440003,
  "tenantId": tnt_acme-corp_a1b2c3,
  "actorUserId": usr_johndoe_abc123,
  "type": conversation_annotated,
  "resourceId": conv_abc123,
  "resourceType": conversation,
  "metadata": null,
  "occurredAt": 2026-04-01T10:00Z,
} satisfies CollabActivityRecord

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollabActivityRecord
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


