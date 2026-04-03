
# QuotaCheckInternalResponse

Internal quota check response. Matches `quotas.go:175` QuotaCheckInternalResponse.

## Properties

Name | Type
------------ | -------------
`allowed` | boolean
`quotaStatus` | string
`currentUsage` | number
`limit` | number
`remaining` | number
`resetAt` | Date

## Example

```typescript
import type { QuotaCheckInternalResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "allowed": true,
  "quotaStatus": ok,
  "currentUsage": 2500,
  "limit": 10000,
  "remaining": 7500,
  "resetAt": 2025-01-16T00:00Z,
} satisfies QuotaCheckInternalResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaCheckInternalResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


