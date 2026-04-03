
# ReviewResultResponse

Result returned after a review action (approve, reject, or modify).

## Properties

Name | Type
------------ | -------------
`requestId` | string
`decision` | string
`reviewedBy` | string
`reviewedAt` | Date
`message` | string

## Example

```typescript
import type { ReviewResultResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "requestId": preq_01HQ3XYZABC123,
  "decision": approved,
  "reviewedBy": usr_operator_abc123,
  "reviewedAt": 2025-01-15T14:45Z,
  "message": Request approved and will continue processing,
} satisfies ReviewResultResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReviewResultResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


