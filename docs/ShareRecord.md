
# ShareRecord

Access share granting a user, role, or team access to a conversation.

## Properties

Name | Type
------------ | -------------
`id` | string
`tenantId` | string
`conversationId` | string
`sharedBy` | string
`targetUserId` | string
`targetRoleId` | string
`targetTeamId` | string
`permissions` | Array&lt;string&gt;
`expiresAt` | Date
`createdAt` | Date

## Example

```typescript
import type { ShareRecord } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": 550e8400-e29b-41d4-a716-446655440001,
  "tenantId": tnt_acme-corp_a1b2c3,
  "conversationId": conv_abc123,
  "sharedBy": usr_johndoe_abc123,
  "targetUserId": usr_janedoe_xyz789,
  "targetRoleId": role-admin,
  "targetTeamId": team-eng,
  "permissions": ["read","comment"],
  "expiresAt": null,
  "createdAt": 2026-04-01T10:00Z,
} satisfies ShareRecord

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ShareRecord
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


