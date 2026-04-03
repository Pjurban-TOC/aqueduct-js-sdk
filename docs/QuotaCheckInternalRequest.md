
# QuotaCheckInternalRequest

Internal quota check request. Matches `quotas.go:166` QuotaCheckInternalRequest.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`resource` | string
`amount` | number
`model` | string
`feature` | string

## Example

```typescript
import type { QuotaCheckInternalRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": tnt_acme-corp_a1b2c3,
  "resource": api_calls_per_hour,
  "amount": 1,
  "model": gpt-4,
  "feature": dlp_scanning,
} satisfies QuotaCheckInternalRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaCheckInternalRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


