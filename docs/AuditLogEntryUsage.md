
# AuditLogEntryUsage

Token usage and cost tracking.

## Properties

Name | Type
------------ | -------------
`promptTokens` | number
`completionTokens` | number
`totalTokens` | number
`estimatedCostUsd` | number
`cachedTokens` | number

## Example

```typescript
import type { AuditLogEntryUsage } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "promptTokens": 150,
  "completionTokens": 250,
  "totalTokens": 400,
  "estimatedCostUsd": 0.0045,
  "cachedTokens": 0,
} satisfies AuditLogEntryUsage

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditLogEntryUsage
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


