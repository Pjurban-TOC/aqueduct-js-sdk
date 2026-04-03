
# RetrievalResultSource

Source document metadata.

## Properties

Name | Type
------------ | -------------
`documentId` | string
`documentName` | string
`chunkIndex` | number

## Example

```typescript
import type { RetrievalResultSource } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "documentId": doc_01HQ3XYZABC123,
  "documentName": api-reference-v2.pdf,
  "chunkIndex": 12,
} satisfies RetrievalResultSource

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RetrievalResultSource
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


