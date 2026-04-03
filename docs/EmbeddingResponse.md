
# EmbeddingResponse


## Properties

Name | Type
------------ | -------------
`object` | string
`data` | [Array&lt;EmbeddingResponseDataInner&gt;](EmbeddingResponseDataInner.md)
`model` | string
`usage` | [EmbeddingResponseUsage](EmbeddingResponseUsage.md)

## Example

```typescript
import type { EmbeddingResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "object": null,
  "data": null,
  "model": text-embedding-3-small,
  "usage": null,
} satisfies EmbeddingResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as EmbeddingResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


