
# StatusUpdateResponse

Response for tenant status update. Matches `tenants.go:124` StatusUpdateResponse.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`fromStatus` | string
`toStatus` | string
`reason` | string
`changedAt` | Date
`changedBy` | string

## Example

```typescript
import type { StatusUpdateResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": tnt_acme-corp_a1b2c3,
  "fromStatus": active,
  "toStatus": suspended,
  "reason": Suspended due to billing non-payment,
  "changedAt": 2025-01-15T14:30Z,
  "changedBy": usr_admin_xyz789,
} satisfies StatusUpdateResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as StatusUpdateResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


