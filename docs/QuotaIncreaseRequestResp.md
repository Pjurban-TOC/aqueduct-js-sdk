
# QuotaIncreaseRequestResp

Response for quota increase request. Matches `quotas.go:140` QuotaIncreaseRequestResp.

## Properties

Name | Type
------------ | -------------
`requestId` | string
`status` | string
`submittedAt` | Date
`expectedResponseTime` | string

## Example

```typescript
import type { QuotaIncreaseRequestResp } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "requestId": qir_01HQ3XYZABC123,
  "status": pending,
  "submittedAt": 2025-01-15T14:30Z,
  "expectedResponseTime": 24h,
} satisfies QuotaIncreaseRequestResp

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaIncreaseRequestResp
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


