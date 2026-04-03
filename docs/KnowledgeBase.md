
# KnowledgeBase

Knowledge base resource for RAG retrieval.

## Properties

Name | Type
------------ | -------------
`kbId` | string
`name` | string
`description` | string
`embeddingModel` | string
`chunkingConfig` | [ChunkingConfig](ChunkingConfig.md)
`vectorStoreConfig` | [KnowledgeBaseVectorStoreConfig](KnowledgeBaseVectorStoreConfig.md)
`documentCount` | number
`totalChunks` | number
`status` | string
`privacyConfig` | [RAGPrivacyConfig](RAGPrivacyConfig.md)
`createdAt` | Date
`updatedAt` | Date

## Example

```typescript
import type { KnowledgeBase } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "kbId": kb_01HQ3XYZABC123,
  "name": Product Documentation,
  "description": Internal product docs and API references,
  "embeddingModel": text-embedding-3-small,
  "chunkingConfig": null,
  "vectorStoreConfig": null,
  "documentCount": 150,
  "totalChunks": 2400,
  "status": active,
  "privacyConfig": null,
  "createdAt": 2025-01-15T14:30Z,
  "updatedAt": null,
} satisfies KnowledgeBase

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as KnowledgeBase
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


