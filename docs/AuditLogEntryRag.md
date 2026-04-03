
# AuditLogEntryRag

RAG retrieval context for this request.

## Properties

Name | Type
------------ | -------------
`used` | boolean
`knowledgeBaseId` | string
`chunksRetrieved` | number
`retrievalScore` | number
`searchTimeMs` | number

## Example

```typescript
import type { AuditLogEntryRag } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "used": true,
  "knowledgeBaseId": kb_01HQ3XYZABC123,
  "chunksRetrieved": 5,
  "retrievalScore": 0.82,
  "searchTimeMs": 30,
} satisfies AuditLogEntryRag

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditLogEntryRag
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


