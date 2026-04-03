
# QuotaAlertDetail

Quota alert detail. Matches `quotas.go:153` QuotaAlertDetail.

## Properties

Name | Type
------------ | -------------
`alertId` | string
`resource` | string
`threshold` | string
`currentValue` | number
`limitValue` | number
`triggeredAt` | Date
`acknowledged` | boolean
`acknowledgedBy` | string
`acknowledgedAt` | Date

## Example

```typescript
import type { QuotaAlertDetail } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "alertId": qa_01HQ3XYZABC123,
  "resource": api_calls_per_hour,
  "threshold": 80%,
  "currentValue": 8500,
  "limitValue": 10000,
  "triggeredAt": 2025-01-15T10:00Z,
  "acknowledged": false,
  "acknowledgedBy": usr_admin_xyz789,
  "acknowledgedAt": 2025-01-15T11:00Z,
} satisfies QuotaAlertDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaAlertDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


