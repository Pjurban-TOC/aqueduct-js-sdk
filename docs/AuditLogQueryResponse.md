
# AuditLogQueryResponse


## Properties

Name | Type
------------ | -------------
`entries` | [Array&lt;AuditLogEntry&gt;](AuditLogEntry.md)
`nextCursor` | string
`total` | number
`aggregations` | [AuditLogQueryResponseAggregations](AuditLogQueryResponseAggregations.md)

## Example

```typescript
import type { AuditLogQueryResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "entries": null,
  "nextCursor": null,
  "total": null,
  "aggregations": null,
} satisfies AuditLogQueryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditLogQueryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


