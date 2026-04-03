
# AuditLogEntrySafety

Safety guardrail results for this request.

## Properties

Name | Type
------------ | -------------
`scanned` | boolean
`safe` | boolean
`actionTaken` | string
`findings` | [Array&lt;AuditLogEntrySafetyFindingsInner&gt;](AuditLogEntrySafetyFindingsInner.md)
`guardrailConfigId` | string
`scanDurationMs` | number

## Example

```typescript
import type { AuditLogEntrySafety } from '@aqueduct-ai/sdk'

// TODO: Update the object below with actual values
const example = {
  "scanned": true,
  "safe": true,
  "actionTaken": allow,
  "findings": null,
  "guardrailConfigId": null,
  "scanDurationMs": 45,
} satisfies AuditLogEntrySafety

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AuditLogEntrySafety
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


