
# AuditLogQueryResponseAggregations

Optional aggregated statistics for the query.

## Properties

Name | Type
------------ | -------------
`totalRequests` | number
`totalTokens` | number
`totalCostUsd` | number
`avgLatencyMs` | number
`errorRate` | number
`p50LatencyMs` | number
`p95LatencyMs` | number
`p99LatencyMs` | number

## Example

```typescript
import type { AuditLogQueryResponseAggregations } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "totalRequests": null,
  "totalTokens": null,
  "totalCostUsd": null,
  "avgLatencyMs": null,
  "errorRate": null,
  "p50LatencyMs": null,
  "p95LatencyMs": null,
  "p99LatencyMs": null,
} satisfies AuditLogQueryResponseAggregations

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditLogQueryResponseAggregations
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


