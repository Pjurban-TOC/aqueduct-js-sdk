
# RetrievalRequest

Knowledge base retrieval request. Supports hybrid dense/sparse search per DAT [arXiv:2503.23013] which shows 26-31% NDCG improvement. 

## Properties

Name | Type
------------ | -------------
`knowledgeBaseId` | string
`query` | string
`topK` | number
`scoreThreshold` | number
`filter` | { [key: string]: any; }
`reranking` | [RetrievalRequestReranking](RetrievalRequestReranking.md)
`searchType` | string
`hybridWeights` | [RetrievalRequestHybridWeights](RetrievalRequestHybridWeights.md)

## Example

```typescript
import type { RetrievalRequest } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "knowledgeBaseId": kb_01HQ3XYZABC123,
  "query": How do I configure rate limiting?,
  "topK": 5,
  "scoreThreshold": 0.5,
  "filter": {"category":"api"},
  "reranking": null,
  "searchType": null,
  "hybridWeights": null,
} satisfies RetrievalRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RetrievalRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


