
# DeletionRequestResponse

Response confirming creation of a deletion request with timeline and approval requirements.

## Properties

Name | Type
------------ | -------------
`deletionRequestId` | string
`tenantId` | string
`status` | string
`requiresApproval` | boolean
`approversRequired` | number
`softDeleteAt` | Date
`hardDeleteAt` | Date
`exportUrl` | string

## Example

```typescript
import type { DeletionRequestResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "deletionRequestId": delreq_01HQ3XYZABC123,
  "tenantId": tnt_acme-corp_a1b2c3,
  "status": pending_approval,
  "requiresApproval": true,
  "approversRequired": 2,
  "softDeleteAt": 2025-01-18T14:30Z,
  "hardDeleteAt": 2025-02-15T14:30Z,
  "exportUrl": https://exports.aqueduct.ai/tnt_acme-corp_a1b2c3/export-2025-01-15.tar.gz,
} satisfies DeletionRequestResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeletionRequestResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


