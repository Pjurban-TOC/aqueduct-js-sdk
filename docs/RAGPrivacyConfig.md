
# RAGPrivacyConfig

Privacy configuration for RAG retrieval. Per Privacy-Preserving RAG [arXiv:2412.04697], differential privacy budget parameters support HIPAA/FedRAMP compliance. 

## Properties

Name | Type
------------ | -------------
`dpEnabled` | boolean
`epsilon` | number
`accessControl` | string

## Example

```typescript
import type { RAGPrivacyConfig } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "dpEnabled": null,
  "epsilon": 1,
  "accessControl": null,
} satisfies RAGPrivacyConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RAGPrivacyConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


