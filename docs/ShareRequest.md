
# ShareRequest

Request body for sharing a conversation.

## Properties

Name | Type
------------ | -------------
`targetUserId` | string
`targetRoleId` | string
`targetTeamId` | string
`permissions` | Array&lt;string&gt;
`expiresAt` | Date

## Example

```typescript
import type { ShareRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "targetUserId": null,
  "targetRoleId": null,
  "targetTeamId": null,
  "permissions": ["read"],
  "expiresAt": null,
} satisfies ShareRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ShareRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


