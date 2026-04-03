
# ApproveDeletionRequest

Request body for approving a tenant deletion request. Requires system admin scope.

## Properties

Name | Type
------------ | -------------
`approvalConfirmation` | string

## Example

```typescript
import type { ApproveDeletionRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "approvalConfirmation": APPROVE DELETE Acme Corp,
} satisfies ApproveDeletionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApproveDeletionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


