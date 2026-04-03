
# SuspendTenantResponse

Response confirming tenant suspension with computed timeline dates.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`status` | string
`suspendedAt` | Date
`gracePeriodEnds` | Date
`deletionEligibleAt` | Date

## Example

```typescript
import type { SuspendTenantResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": tnt_acme-corp_a1b2c3,
  "status": suspended,
  "suspendedAt": 2025-01-15T14:30Z,
  "gracePeriodEnds": 2025-02-14T14:30Z,
  "deletionEligibleAt": 2025-02-14T14:30Z,
} satisfies SuspendTenantResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SuspendTenantResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


