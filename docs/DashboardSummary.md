
# DashboardSummary

Dashboard summary. Matches aggregation/service.go DashboardSummary.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`start` | Date
`end` | Date
`totalEvents` | number
`uniqueUsers` | number
`totalErrors` | number
`errorRate` | number
`actionBreakdown` | { [key: string]: number; }
`aggregates` | [Array&lt;ActivityAggregate&gt;](ActivityAggregate.md)
`generatedAt` | Date

## Example

```typescript
import type { DashboardSummary } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": null,
  "start": null,
  "end": null,
  "totalEvents": 150000,
  "uniqueUsers": 1200,
  "totalErrors": 3450,
  "errorRate": 0.023,
  "actionBreakdown": {"document.view":80000,"auth.login":15000,"config.update":500},
  "aggregates": null,
  "generatedAt": null,
} satisfies DashboardSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DashboardSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


