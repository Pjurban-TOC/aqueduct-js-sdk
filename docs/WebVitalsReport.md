
# WebVitalsReport

Comprehensive Web Vitals report (AC-UI-045-020).

## Properties

Name | Type
------------ | -------------
`fcp` | [WebVitalMetricSummary](WebVitalMetricSummary.md)
`lcp` | [WebVitalMetricSummary](WebVitalMetricSummary.md)
`fid` | [WebVitalMetricSummary](WebVitalMetricSummary.md)
`cls` | [WebVitalMetricSummary](WebVitalMetricSummary.md)
`ttfb` | [WebVitalMetricSummary](WebVitalMetricSummary.md)
`inp` | [WebVitalMetricSummary](WebVitalMetricSummary.md)
`tti` | [WebVitalMetricSummary](WebVitalMetricSummary.md)
`overallRating` | string
`totalSamples` | number
`cacheHitRate` | number
`cacheTargetMet` | boolean
`cdnLatencyP95` | number
`cdnTargetMet` | boolean
`activeAlertsCount` | number
`generatedAt` | Date

## Example

```typescript
import type { WebVitalsReport } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "fcp": null,
  "lcp": null,
  "fid": null,
  "cls": null,
  "ttfb": null,
  "inp": null,
  "tti": null,
  "overallRating": good,
  "totalSamples": 50000,
  "cacheHitRate": 0.995,
  "cacheTargetMet": true,
  "cdnLatencyP95": 42,
  "cdnTargetMet": true,
  "activeAlertsCount": 1,
  "generatedAt": null,
} satisfies WebVitalsReport

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebVitalsReport
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


