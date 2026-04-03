
# FeatureFlag

A feature flag controlling runtime behavior. Matches `config.go` FeatureFlag struct.

## Properties

Name | Type
------------ | -------------
`name` | string
`enabled` | boolean
`description` | string

## Example

```typescript
import type { FeatureFlag } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": enable-rag-v2,
  "enabled": true,
  "description": Enables the v2 RAG pipeline with hybrid search.,
} satisfies FeatureFlag

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as FeatureFlag
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


