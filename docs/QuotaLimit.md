
# QuotaLimit

Single quota limit with usage. Matches `quotas.go:79` QuotaLimit.

## Properties

Name | Type
------------ | -------------
`max` | number
`current` | number
`softLimit` | number
`percentUsed` | number
`resetDate` | Date

## Example

```typescript
import type { QuotaLimit } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "max": 10000,
  "current": 2500,
  "softLimit": 8000,
  "percentUsed": 25,
  "resetDate": 2025-02-01T00:00Z,
} satisfies QuotaLimit

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaLimit
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


