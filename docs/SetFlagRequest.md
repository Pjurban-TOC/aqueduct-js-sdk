
# SetFlagRequest

Request body for setting a feature flag value. Matches `config.go` SetFlagRequest struct.

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`description` | string

## Example

```typescript
import type { SetFlagRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "enabled": true,
  "description": Enables the v2 RAG pipeline with hybrid search.,
} satisfies SetFlagRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SetFlagRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


