
# FlagEvaluationResponse

Result of evaluating a feature flag, including tenant overrides. Matches `config.go` FlagEvaluationResponse struct.

## Properties

Name | Type
------------ | -------------
`flag` | string
`enabled` | boolean

## Example

```typescript
import type { FlagEvaluationResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "flag": enable-rag-v2,
  "enabled": false,
} satisfies FlagEvaluationResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FlagEvaluationResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


