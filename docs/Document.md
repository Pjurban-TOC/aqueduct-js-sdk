
# Document

Document in a knowledge base.

## Properties

Name | Type
------------ | -------------
`documentId` | string
`name` | string
`contentType` | string
`source` | [DocumentSource](DocumentSource.md)
`metadata` | { [key: string]: any; }
`chunkCount` | number
`status` | string
`errorMessage` | string
`createdAt` | Date
`indexedAt` | Date

## Example

```typescript
import type { Document } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "documentId": doc_01HQ3XYZABC123,
  "name": api-reference-v2.pdf,
  "contentType": application/pdf,
  "source": null,
  "metadata": {"category":"api","version":"2.0","department":"engineering"},
  "chunkCount": 45,
  "status": indexed,
  "errorMessage": null,
  "createdAt": 2025-01-15T14:30Z,
  "indexedAt": null,
} satisfies Document

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Document
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


