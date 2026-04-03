
# ReactivateTenantResponse

Response confirming tenant reactivation.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`status` | string
`reactivatedAt` | Date
`reactivatedBy` | string

## Example

```typescript
import type { ReactivateTenantResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": tnt_acme-corp_a1b2c3,
  "status": active,
  "reactivatedAt": 2025-01-20T10:00Z,
  "reactivatedBy": usr_admin_xyz789,
} satisfies ReactivateTenantResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReactivateTenantResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


