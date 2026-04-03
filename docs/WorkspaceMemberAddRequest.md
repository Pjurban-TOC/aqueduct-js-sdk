
# WorkspaceMemberAddRequest

Request body for adding a workspace member.

## Properties

Name | Type
------------ | -------------
`userId` | string
`role` | string

## Example

```typescript
import type { WorkspaceMemberAddRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "userId": usr_janedoe_xyz789,
  "role": member,
} satisfies WorkspaceMemberAddRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WorkspaceMemberAddRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


