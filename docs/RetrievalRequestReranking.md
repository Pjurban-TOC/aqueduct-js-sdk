
# RetrievalRequestReranking

Configurable re-ranking per TREC 2025 RAG Track [arXiv:2603.09891]. 

## Properties

Name | Type
------------ | -------------
`enabled` | boolean
`model` | string
`topN` | number

## Example

```typescript
import type { RetrievalRequestReranking } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "enabled": null,
  "model": cohere-rerank-v3,
  "topN": null,
} satisfies RetrievalRequestReranking

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RetrievalRequestReranking
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


