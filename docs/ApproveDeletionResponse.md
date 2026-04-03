
# ApproveDeletionResponse

Response confirming a deletion approval with current approval tally.

## Properties

Name | Type
------------ | -------------
`requestId` | string
`status` | string
`approvals` | [Array&lt;ApprovalRecord&gt;](ApprovalRecord.md)
`approvalsRemaining` | number
`deletionWillProceed` | boolean

## Example

```typescript
import type { ApproveDeletionResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "requestId": delreq_01HQ3XYZABC123,
  "status": approved,
  "approvals": null,
  "approvalsRemaining": 0,
  "deletionWillProceed": true,
} satisfies ApproveDeletionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApproveDeletionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


