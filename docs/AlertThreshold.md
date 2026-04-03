
# AlertThreshold

Alert threshold configuration for a metric.

## Properties

Name | Type
------------ | -------------
`thresholdId` | string
`metricName` | [MetricName](MetricName.md)
`warningThreshold` | number
`criticalThreshold` | number
`minAffectedPct` | number
`enabled` | boolean
`tenantId` | string
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { AlertThreshold } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "thresholdId": thr_01HQ3XYZABC123,
  "metricName": null,
  "warningThreshold": 2500,
  "criticalThreshold": 4000,
  "minAffectedPct": 10,
  "enabled": true,
  "tenantId": tnt_acme-corp_a1b2c3,
  "createdAt": null,
  "updatedAt": null,
} satisfies AlertThreshold

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AlertThreshold
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


