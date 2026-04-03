
# ReadinessResponse

Readiness probe response indicating dependency health.

## Properties

Name | Type
------------ | -------------
`status` | string
`checks` | [{ [key: string]: ReadinessResponseChecksValue; }](ReadinessResponseChecksValue.md)

## Example

```typescript
import type { ReadinessResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "status": ready,
  "checks": {"kv_store":{"status":"up","latency_ms":2},"tenant_service":{"status":"up","latency_ms":15}},
} satisfies ReadinessResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ReadinessResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


