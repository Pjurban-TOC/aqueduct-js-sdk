
# CreateKnowledgeBaseRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`description` | string
`embeddingModel` | string
`chunkingConfig` | [ChunkingConfig](ChunkingConfig.md)
`vectorStoreConfig` | [CreateKnowledgeBaseRequestVectorStoreConfig](CreateKnowledgeBaseRequestVectorStoreConfig.md)
`privacyConfig` | [RAGPrivacyConfig](RAGPrivacyConfig.md)

## Example

```typescript
import type { CreateKnowledgeBaseRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "name": Product Documentation,
  "description": null,
  "embeddingModel": text-embedding-3-small,
  "chunkingConfig": null,
  "vectorStoreConfig": null,
  "privacyConfig": null,
} satisfies CreateKnowledgeBaseRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateKnowledgeBaseRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


