
# SuspendTenantRequest

Request body for suspending a tenant. Matches tenant-service SuspendTenantRequest struct.

## Properties

Name | Type
------------ | -------------
`reason` | string
`details` | string
`suspensionType` | string
`gracePeriodDays` | number

## Example

```typescript
import type { SuspendTenantRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "reason": payment_failed,
  "details": Invoice INV-2025-0042 overdue by 30 days,
  "suspensionType": payment_hold,
  "gracePeriodDays": 30,
} satisfies SuspendTenantRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SuspendTenantRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


