
# PerformanceAlert

Performance threshold alert.

## Properties

Name | Type
------------ | -------------
`alertId` | string
`thresholdId` | string
`metricName` | [MetricName](MetricName.md)
`severity` | string
`status` | string
`thresholdValue` | number
`actualValue` | number
`affectedPct` | number
`message` | string
`tenantId` | string
`triggeredAt` | Date
`acknowledgedAt` | Date
`acknowledgedBy` | string
`resolvedAt` | Date
`labels` | { [key: string]: string; }

## Example

```typescript
import type { PerformanceAlert } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "alertId": alert_01HQ3XYZABC123,
  "thresholdId": null,
  "metricName": null,
  "severity": warning,
  "status": active,
  "thresholdValue": 2500,
  "actualValue": 3200,
  "affectedPct": 15.5,
  "message": LCP exceeds warning threshold,
  "tenantId": tnt_acme-corp_a1b2c3,
  "triggeredAt": 2025-01-15T14:30Z,
  "acknowledgedAt": null,
  "acknowledgedBy": null,
  "resolvedAt": null,
  "labels": null,
} satisfies PerformanceAlert

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PerformanceAlert
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


