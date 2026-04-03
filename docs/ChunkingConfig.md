
# ChunkingConfig

Document chunking strategy configuration. Per Merola & Singh [arXiv:2504.19754], contextual retrieval preserves coherence but costs more compute. 

## Properties

Name | Type
------------ | -------------
`strategy` | string
`maxChunkSize` | number
`chunkOverlap` | number

## Example

```typescript
import type { ChunkingConfig } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "strategy": semantic,
  "maxChunkSize": 512,
  "chunkOverlap": 50,
} satisfies ChunkingConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ChunkingConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


