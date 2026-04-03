
# UsageSummaryResponse

Tenant usage summary. Matches `tenants.go:88` UsageSummaryResponse.

## Properties

Name | Type
------------ | -------------
`usersCount` | number
`requestsThisMonth` | number
`storageUsedGb` | number

## Example

```typescript
import type { UsageSummaryResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "usersCount": 150,
  "requestsThisMonth": 25000,
  "storageUsedGb": 12.5,
} satisfies UsageSummaryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageSummaryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


