
# DeleteTenantResponse

Response for tenant deletion. Matches `tenants.go:109` DeleteTenantResponse.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`status` | string
`scheduledFor` | Date
`exportRequested` | boolean
`message` | string

## Example

```typescript
import type { DeleteTenantResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": tnt_acme-corp_a1b2c3,
  "status": pending_deletion,
  "scheduledFor": 2025-01-18T14:30Z,
  "exportRequested": true,
  "message": Tenant scheduled for deletion. Data export will be available within 24 hours.,
} satisfies DeleteTenantResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeleteTenantResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


