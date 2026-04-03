
# DashboardResponse

Main dashboard response. Matches handler/dashboard.go DashboardResponse.

## Properties

Name | Type
------------ | -------------
`summary` | [DashboardSummary](DashboardSummary.md)
`activeAnomalies` | number
`anomalies` | [Array&lt;Anomaly&gt;](Anomaly.md)
`timeRange` | [TimeRange](TimeRange.md)
`generatedAt` | Date

## Example

```typescript
import type { DashboardResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "summary": null,
  "activeAnomalies": 2,
  "anomalies": null,
  "timeRange": null,
  "generatedAt": null,
} satisfies DashboardResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DashboardResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


