
# RetrievalResponse


## Properties

Name | Type
------------ | -------------
`results` | [Array&lt;RetrievalResult&gt;](RetrievalResult.md)
`queryEmbeddingTimeMs` | number
`searchTimeMs` | number
`rerankTimeMs` | number

## Example

```typescript
import type { RetrievalResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "results": null,
  "queryEmbeddingTimeMs": null,
  "searchTimeMs": null,
  "rerankTimeMs": null,
} satisfies RetrievalResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RetrievalResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


