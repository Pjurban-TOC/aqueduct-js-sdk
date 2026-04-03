
# WebVitalMetricSummary

Summary statistics for a single Web Vital metric.

## Properties

Name | Type
------------ | -------------
`metricName` | [MetricName](MetricName.md)
`p50` | number
`p75` | number
`p95` | number
`p99` | number
`rating` | string
`sampleCount` | number
`targetValue` | number
`targetMet` | boolean
`unit` | string
`trendPercent` | number

## Example

```typescript
import type { WebVitalMetricSummary } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "metricName": null,
  "p50": 1200,
  "p75": 1800,
  "p95": 2800,
  "p99": 4500,
  "rating": good,
  "sampleCount": 50000,
  "targetValue": 2500,
  "targetMet": true,
  "unit": ms,
  "trendPercent": -5.2,
} satisfies WebVitalMetricSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebVitalMetricSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


