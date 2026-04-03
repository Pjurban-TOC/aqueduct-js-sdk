
# WorkspaceMemberRecord

Workspace membership record.

## Properties

Name | Type
------------ | -------------
`workspaceId` | string
`tenantId` | string
`userId` | string
`role` | string
`joinedAt` | Date

## Example

```typescript
import type { WorkspaceMemberRecord } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "workspaceId": ws_abc123,
  "tenantId": tnt_acme-corp_a1b2c3,
  "userId": usr_johndoe_abc123,
  "role": member,
  "joinedAt": 2026-04-01T09:00Z,
} satisfies WorkspaceMemberRecord

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMemberRecord
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


