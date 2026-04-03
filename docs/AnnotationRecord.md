
# AnnotationRecord

Comment anchored to a specific turn within a conversation.

## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`conversationId` | string
`turnIndex` | number
`authorUserId` | string
`body` | string
`parentAnnotationId` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { AnnotationRecord } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 550e8400-e29b-41d4-a716-446655440002,
  "tenantId": tnt_acme-corp_a1b2c3,
  "conversationId": conv_abc123,
  "turnIndex": 3,
  "authorUserId": usr_johndoe_abc123,
  "body": Great answer! @alice should review this.,
  "parentAnnotationId": null,
  "createdAt": 2026-04-01T10:00Z,
  "updatedAt": 2026-04-01T10:05Z,
} satisfies AnnotationRecord

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AnnotationRecord
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


