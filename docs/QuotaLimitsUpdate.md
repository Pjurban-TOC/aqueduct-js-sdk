
# QuotaLimitsUpdate

Quota limit updates. Matches `quotas.go:103` QuotaLimitsUpdate. All fields optional.

## Properties

Name | Type
------------ | -------------
`users` | number
`requestsPerMonth` | number
`apiCallsPerHour` | number
`storageGb` | number

## Example

```typescript
import type { QuotaLimitsUpdate } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "users": 500,
  "requestsPerMonth": 100000,
  "apiCallsPerHour": 10000,
  "storageGb": 100,
} satisfies QuotaLimitsUpdate

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaLimitsUpdate
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


