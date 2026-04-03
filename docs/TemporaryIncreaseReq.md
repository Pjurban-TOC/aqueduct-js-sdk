
# TemporaryIncreaseReq

Temporary quota increase parameters. Matches `quotas.go:111` TemporaryIncreaseReq.

## Properties

Name | Type
------------ | -------------
`resource` | string
`amount` | number
`expiresAt` | Date

## Example

```typescript
import type { TemporaryIncreaseReq } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "resource": api_calls_per_hour,
  "amount": 5000,
  "expiresAt": 2025-01-16T00:00Z,
} satisfies TemporaryIncreaseReq

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TemporaryIncreaseReq
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


