
# GetAuditStats200ResponseTotals


## Properties

Name | Type
------------ | -------------
`totalRequests` | number
`totalTokens` | number
`totalCostUsd` | number
`errorRate` | number
`avgLatencyMs` | number
`p50LatencyMs` | number
`p95LatencyMs` | number
`p99LatencyMs` | number

## Example

```typescript
import type { GetAuditStats200ResponseTotals } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "totalRequests": 125000,
  "totalTokens": 45000000,
  "totalCostUsd": 523.45,
  "errorRate": 0.023,
  "avgLatencyMs": 850.5,
  "p50LatencyMs": 620,
  "p95LatencyMs": 2100,
  "p99LatencyMs": 4500,
} satisfies GetAuditStats200ResponseTotals

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as GetAuditStats200ResponseTotals
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


