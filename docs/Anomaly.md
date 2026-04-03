
# Anomaly

Detected anomaly. Matches domain/anomaly.go Anomaly struct.

## Properties

Name | Type
------------ | -------------
`anomalyId` | string
`tenantId` | string
`metricName` | string
`currentValue` | number
`baselineValue` | number
`baselineMean` | number
`baselineStddev` | number
`zScore` | number
`deviationSigma` | number
`deviationPct` | number
`direction` | string
`detectedAt` | Date
`sustainedFrom` | Date
`resolvedAt` | Date
`status` | string
`severity` | string
`alertedAt` | Date
`alertCount` | number
`acknowledged` | boolean
`acknowledgedBy` | string
`acknowledgedAt` | Date
`description` | string
`message` | string
`metadata` | { [key: string]: any; }

## Example

```typescript
import type { Anomaly } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "anomalyId": anom_01HQ3XYZAB,
  "tenantId": tnt_acme-corp_a1b2c3,
  "metricName": event_count,
  "currentValue": 1200,
  "baselineValue": 200,
  "baselineMean": 195.5,
  "baselineStddev": 35.2,
  "zScore": 28.5,
  "deviationSigma": null,
  "deviationPct": 500,
  "direction": above,
  "detectedAt": 2025-01-15T14:30Z,
  "sustainedFrom": null,
  "resolvedAt": null,
  "status": active,
  "severity": warning,
  "alertedAt": null,
  "alertCount": 1,
  "acknowledged": false,
  "acknowledgedBy": null,
  "acknowledgedAt": null,
  "description": Event count for tenant exceeded 3-sigma threshold,
  "message": null,
  "metadata": null,
} satisfies Anomaly

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Anomaly
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


