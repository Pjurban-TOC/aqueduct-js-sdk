
# AuditLogEntryDlp

DLP scan results for this request.

## Properties

Name | Type
------------ | -------------
`scanned` | boolean
`findingsCount` | number
`blocked` | boolean
`policyId` | string
`scanDurationMs` | number

## Example

```typescript
import type { AuditLogEntryDlp } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "scanned": true,
  "findingsCount": 0,
  "blocked": false,
  "policyId": dlppol_01HQ3XYZABC123,
  "scanDurationMs": 25,
} satisfies AuditLogEntryDlp

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditLogEntryDlp
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


