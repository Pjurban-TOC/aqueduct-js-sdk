
# RetrievalResult

Single retrieval result with trust/confidence scores per Engineering the RAG Stack [arXiv:2601.05264]. 

## Properties

Name | Type
------------ | -------------
`content` | string
`score` | number
`source` | [RetrievalResultSource](RetrievalResultSource.md)
`metadata` | { [key: string]: any; }
`trustScore` | number

## Example

```typescript
import type { RetrievalResult } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "content": Rate limiting is configured per-tenant using the quota management API...,
  "score": 0.87,
  "source": null,
  "metadata": {"category":"api","version":"2.0"},
  "trustScore": 0.92,
} satisfies RetrievalResult

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RetrievalResult
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


