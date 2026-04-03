
# AuditLogEntryModel

Model information for AI inference requests. Per TRiSM [arXiv:2506.04133], model lineage tracking is required. 

## Properties

Name | Type
------------ | -------------
`modelId` | string
`modelResolved` | string
`provider` | string
`modelVersion` | string
`routingPolicy` | string

## Example

```typescript
import type { AuditLogEntryModel } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "modelId": gpt-4o,
  "modelResolved": gpt-4o-2024-11-20,
  "provider": openai,
  "modelVersion": 2024-11-20,
  "routingPolicy": cost-optimized,
} satisfies AuditLogEntryModel

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditLogEntryModel
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


