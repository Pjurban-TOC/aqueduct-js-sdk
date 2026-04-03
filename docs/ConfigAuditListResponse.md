
# ConfigAuditListResponse

Paginated list of configuration audit log entries. Matches `config.go` ConfigAuditListResponse struct.

## Properties

Name | Type
------------ | -------------
`entries` | [Array&lt;ConfigAuditEntry&gt;](ConfigAuditEntry.md)
`nextCursor` | string
`total` | number

## Example

```typescript
import type { ConfigAuditListResponse } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "entries": null,
  "nextCursor": eyJpZCI6ImNhdWRfMDEifQ==,
  "total": 256,
} satisfies ConfigAuditListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ConfigAuditListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


