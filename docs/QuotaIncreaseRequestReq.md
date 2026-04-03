
# QuotaIncreaseRequestReq

Self-service quota increase request. Matches `quotas.go:132` QuotaIncreaseRequestReq.

## Properties

Name | Type
------------ | -------------
`resource` | string
`requestedLimit` | number
`justification` | string
`urgency` | string

## Example

```typescript
import type { QuotaIncreaseRequestReq } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "resource": api_calls_per_hour,
  "requestedLimit": 20000,
  "justification": Launching new product feature that requires higher API throughput for our 50k users.,
  "urgency": normal,
} satisfies QuotaIncreaseRequestReq

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaIncreaseRequestReq
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


