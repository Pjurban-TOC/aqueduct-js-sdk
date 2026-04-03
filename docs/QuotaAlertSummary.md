
# QuotaAlertSummary

Brief alert info in quota status. Matches `quotas.go:88` QuotaAlertSummary.

## Properties

Name | Type
------------ | -------------
`resource` | string
`threshold` | string
`triggeredAt` | Date

## Example

```typescript
import type { QuotaAlertSummary } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "resource": api_calls_per_hour,
  "threshold": 80%,
  "triggeredAt": 2025-01-15T10:00Z,
} satisfies QuotaAlertSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaAlertSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


