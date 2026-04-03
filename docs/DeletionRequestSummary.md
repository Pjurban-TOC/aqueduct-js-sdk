
# DeletionRequestSummary

Abbreviated deletion request details for status responses.

## Properties

Name | Type
------------ | -------------
`requestId` | string
`requestedBy` | string
`requestedAt` | Date
`reason` | string

## Example

```typescript
import type { DeletionRequestSummary } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "requestId": delreq_01HQ3XYZABC123,
  "requestedBy": usr_owner_abc456,
  "requestedAt": 2025-01-15T14:30Z,
  "reason": customer_request,
} satisfies DeletionRequestSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeletionRequestSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


