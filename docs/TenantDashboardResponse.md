
# TenantDashboardResponse

Tenant-specific dashboard. Matches handler/dashboard.go TenantDashboardResponse.

## Properties

Name | Type
------------ | -------------
`tenantId` | string
`summary` | [DashboardSummary](DashboardSummary.md)
`activeAnomalies` | number
`anomalies` | [Array&lt;Anomaly&gt;](Anomaly.md)
`timeRange` | [TimeRange](TimeRange.md)

## Example

```typescript
import type { TenantDashboardResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "tenantId": tnt_acme-corp_a1b2c3,
  "summary": null,
  "activeAnomalies": 0,
  "anomalies": null,
  "timeRange": null,
} satisfies TenantDashboardResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TenantDashboardResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


