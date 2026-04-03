
# AssetMetricBatch

Batch of frontend asset performance metrics for ingestion.

## Properties

Name | Type
------------ | -------------
`sessionId` | string
`tenantId` | string
`userId` | string
`userAgent` | string
`pageUrl` | string
`metrics` | [Array&lt;AssetMetric&gt;](AssetMetric.md)
`timestamp` | Date
`connectionType` | string
`downlinkMbps` | number
`rttMs` | number

## Example

```typescript
import type { AssetMetricBatch } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "sessionId": ses_01HQ3XYZABC123,
  "tenantId": tnt_acme-corp_a1b2c3,
  "userId": usr_johndoe_abc123,
  "userAgent": Mozilla/5.0 (Windows NT 10.0; Win64; x64),
  "pageUrl": https://app.acme.example.com/dashboard,
  "metrics": null,
  "timestamp": 2025-01-15T14:30Z,
  "connectionType": 4g,
  "downlinkMbps": 10,
  "rttMs": 50,
} satisfies AssetMetricBatch

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AssetMetricBatch
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


